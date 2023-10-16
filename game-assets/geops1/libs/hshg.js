var gdjs;
(function(gdjs2) {
  gdjs2.HSHG = gdjs2.HSHG || {};
  (function(root, undefined) {
    function update_RECOMPUTE() {
      let i, obj, grid, meta, objAABB, newObjHash;
      for (i = 0; i < this._globalObjects.length; i++) {
        obj = this._globalObjects[i];
        meta = obj.HSHG;
        grid = meta.grid;
        objAABB = obj.getAABB();
        newObjHash = grid.toHash(objAABB.min[0], objAABB.min[1]);
        if (newObjHash !== meta.hash) {
          grid.removeObject(obj);
          grid.addObject(obj, newObjHash);
        }
      }
    }
    function update_REMOVEALL() {
    }
    function testAABBOverlap(objA, objB) {
      const a = objA.getAABB(), b = objB.getAABB();
      if (a.min[0] > b.max[0] || a.min[1] > b.max[1] || a.max[0] < b.min[0] || a.max[1] < b.min[1]) {
        return false;
      } else {
        return true;
      }
    }
    function getLongestAABBEdge(min, max) {
      return Math.max(Math.abs(max[0] - min[0]), Math.abs(max[1] - min[1]));
    }
    class HSHG {
      constructor() {
        this.INITIAL_GRID_LENGTH = 256;
        this.HIERARCHY_FACTOR = 2;
        this._grids = [];
        this._globalObjects = [];
        this.MAX_OBJECT_CELL_DENSITY = 1 / 8;
        this.HIERARCHY_FACTOR_SQRT = Math.SQRT2;
        this.UPDATE_METHOD = update_RECOMPUTE;
      }
      addObject(obj) {
        let x;
        let i;
        let cellSize;
        const objAABB = obj.getAABB();
        const objSize = getLongestAABBEdge(objAABB.min, objAABB.max);
        let oneGrid;
        let newGrid;
        obj.HSHG = {globalObjectsIndex: this._globalObjects.length};
        this._globalObjects.push(obj);
        if (this._grids.length === 0) {
          cellSize = objSize * this.HIERARCHY_FACTOR_SQRT;
          newGrid = new Grid(cellSize, this.INITIAL_GRID_LENGTH, this);
          newGrid.initCells();
          newGrid.addObject(obj);
          this._grids.push(newGrid);
        } else {
          x = 0;
          for (i = 0; i < this._grids.length; i++) {
            oneGrid = this._grids[i];
            x = oneGrid.cellSize;
            if (objSize < x) {
              x = x / this.HIERARCHY_FACTOR;
              if (objSize < x) {
                while (objSize < x) {
                  x = x / this.HIERARCHY_FACTOR;
                }
                newGrid = new Grid(x * this.HIERARCHY_FACTOR, this.INITIAL_GRID_LENGTH, this);
                newGrid.initCells();
                newGrid.addObject(obj);
                this._grids.splice(i, 0, newGrid);
              } else {
                oneGrid.addObject(obj);
              }
              return;
            }
          }
          while (objSize >= x) {
            x = x * this.HIERARCHY_FACTOR;
          }
          newGrid = new Grid(x, this.INITIAL_GRID_LENGTH, this);
          newGrid.initCells();
          newGrid.addObject(obj);
          this._grids.push(newGrid);
        }
      }
      removeObject(obj) {
        const meta = obj.HSHG;
        let globalObjectsIndex;
        let replacementObj;
        if (meta === undefined) {
          throw Error(obj + " was not in the HSHG.");
          return;
        }
        globalObjectsIndex = meta.globalObjectsIndex;
        if (globalObjectsIndex === this._globalObjects.length - 1) {
          this._globalObjects.pop();
        } else {
          replacementObj = this._globalObjects.pop();
          replacementObj.HSHG.globalObjectsIndex = globalObjectsIndex;
          this._globalObjects[globalObjectsIndex] = replacementObj;
        }
        meta.grid.removeObject(obj);
        delete obj.HSHG;
      }
      update() {
        this.UPDATE_METHOD.call(this);
      }
      queryForCollisionWith(theObject, result) {
        let i, j, k, l, c, grid, cell, objA, objB, offset, adjacentCell, biggerGrid, objAAABB, objAHashInBiggerGrid;
        result.length = 0;
        theObject.HSHG.excludeMe = true;
        const theObjectAABB = theObject.getAABB();
        const theObjectHashInItsGrid = theObject.HSHG.grid.toHash(theObjectAABB.min[0], theObjectAABB.min[1]);
        const theObjectCellInItsGrid = theObject.HSHG.grid.allCells[theObjectHashInItsGrid];
        const broadOverlapTest = testAABBOverlap;
        for (i = 0; i < this._grids.length; i++) {
          grid = this._grids[i];
          if (grid.cellSize === theObject.HSHG.grid.cellSize) {
            for (j = 0; j < grid.occupiedCells.length; j++) {
              cell = grid.occupiedCells[j];
              for (l = 0; l < cell.objectContainer.length; l++) {
                objB = cell.objectContainer[l];
                if (!objB.HSHG.excludeMe && broadOverlapTest(theObject, objB) === true) {
                  result.push(objB);
                }
              }
              for (c = 0; c < 4; c++) {
                offset = cell.neighborOffsetArray[c];
                adjacentCell = grid.allCells[cell.allCellsIndex + offset];
                for (l = 0; l < adjacentCell.objectContainer.length; l++) {
                  objB = adjacentCell.objectContainer[l];
                  if (!objB.HSHG.excludeMe && broadOverlapTest(theObject, objB) === true) {
                    result.push(objB);
                  }
                }
              }
            }
            for (k = i + 1; k < this._grids.length; k++) {
              biggerGrid = this._grids[k];
              const objectHashInBiggerGrid = biggerGrid.toHash(theObjectAABB.min[0], theObjectAABB.min[1]);
              cell = biggerGrid.allCells[objectHashInBiggerGrid];
              for (c = 0; c < cell.neighborOffsetArray.length; c++) {
                offset = cell.neighborOffsetArray[c];
                adjacentCell = biggerGrid.allCells[cell.allCellsIndex + offset];
                for (l = 0; l < adjacentCell.objectContainer.length; l++) {
                  objB = adjacentCell.objectContainer[l];
                  if (broadOverlapTest(theObject, objB) === true) {
                    result.push(objB);
                  }
                }
              }
            }
            break;
          } else {
            if (grid.cellSize < theObject.HSHG.grid.cellSize) {
              for (j = 0; j < grid.allObjects.length; j++) {
                objA = grid.allObjects[j];
                objAAABB = objA.getAABB();
                objAHashInBiggerGrid = theObject.HSHG.grid.toHash(objAAABB.min[0], objAAABB.min[1]);
                let objAIsInAdjacentCellToObject = false;
                for (c = 0; c < theObjectCellInItsGrid.neighborOffsetArray.length; c++) {
                  offset = theObjectCellInItsGrid.neighborOffsetArray[c];
                  if (objAHashInBiggerGrid === theObjectCellInItsGrid.allCellsIndex + offset) {
                    objAIsInAdjacentCellToObject = true;
                    break;
                  }
                }
                if (objAIsInAdjacentCellToObject) {
                  if (broadOverlapTest(theObject, objA) === true) {
                    result.push(objA);
                  }
                }
              }
            }
          }
        }
        delete theObject.HSHG.excludeMe;
      }
    }
    HSHG.update_RECOMPUTE = update_RECOMPUTE;
    HSHG.update_REMOVEALL = update_REMOVEALL;
    class Grid {
      constructor(cellSize, cellCount, parentHierarchy) {
        this.occupiedCells = [];
        this.allObjects = [];
        this.sharedInnerOffsets = [];
        this.cellSize = cellSize;
        this.inverseCellSize = 1 / cellSize;
        this.rowColumnCount = ~~Math.sqrt(cellCount);
        this.xyHashMask = this.rowColumnCount - 1;
        this.allCells = Array(this.rowColumnCount * this.rowColumnCount);
        this._parentHierarchy = parentHierarchy || null;
      }
      initCells() {
        let i;
        const gridLength = this.allCells.length;
        let x;
        let y;
        const wh = this.rowColumnCount;
        let isOnRightEdge;
        let isOnLeftEdge;
        let isOnTopEdge;
        let isOnBottomEdge;
        const innerOffsets = [
          wh - 1,
          wh,
          wh + 1,
          -1,
          0,
          1,
          -1 + -wh,
          -wh,
          -wh + 1
        ];
        let leftOffset;
        let rightOffset;
        let topOffset;
        let bottomOffset;
        let uniqueOffsets = [];
        let cell;
        this.sharedInnerOffsets = innerOffsets;
        for (i = 0; i < gridLength; i++) {
          cell = new Cell();
          y = ~~(i / this.rowColumnCount);
          x = ~~(i - y * this.rowColumnCount);
          isOnRightEdge = false;
          isOnLeftEdge = false;
          isOnTopEdge = false;
          isOnBottomEdge = false;
          if ((x + 1) % this.rowColumnCount == 0) {
            isOnRightEdge = true;
          } else {
            if (x % this.rowColumnCount == 0) {
              isOnLeftEdge = true;
            }
          }
          if ((y + 1) % this.rowColumnCount == 0) {
            isOnTopEdge = true;
          } else {
            if (y % this.rowColumnCount == 0) {
              isOnBottomEdge = true;
            }
          }
          if (isOnRightEdge || isOnLeftEdge || isOnTopEdge || isOnBottomEdge) {
            rightOffset = isOnRightEdge === true ? -wh + 1 : 1;
            leftOffset = isOnLeftEdge === true ? wh - 1 : -1;
            topOffset = isOnTopEdge === true ? -gridLength + wh : wh;
            bottomOffset = isOnBottomEdge === true ? gridLength - wh : -wh;
            uniqueOffsets = [
              leftOffset + topOffset,
              topOffset,
              rightOffset + topOffset,
              leftOffset,
              0,
              rightOffset,
              leftOffset + bottomOffset,
              bottomOffset,
              rightOffset + bottomOffset
            ];
            cell.neighborOffsetArray = uniqueOffsets;
          } else {
            cell.neighborOffsetArray = this.sharedInnerOffsets;
          }
          cell.allCellsIndex = i;
          this.allCells[i] = cell;
        }
      }
      toHash(x, y, z) {
        let i, xHash, yHash, zHash;
        if (x < 0) {
          i = -x * this.inverseCellSize;
          xHash = this.rowColumnCount - 1 - (~~i & this.xyHashMask);
        } else {
          i = x * this.inverseCellSize;
          xHash = ~~i & this.xyHashMask;
        }
        if (y < 0) {
          i = -y * this.inverseCellSize;
          yHash = this.rowColumnCount - 1 - (~~i & this.xyHashMask);
        } else {
          i = y * this.inverseCellSize;
          yHash = ~~i & this.xyHashMask;
        }
        return xHash + yHash * this.rowColumnCount;
      }
      addObject(obj, hash) {
        let objAABB, objHash, targetCell;
        if (hash !== undefined) {
          objHash = hash;
        } else {
          objAABB = obj.getAABB();
          objHash = this.toHash(objAABB.min[0], objAABB.min[1]);
        }
        targetCell = this.allCells[objHash];
        if (targetCell.objectContainer.length === 0) {
          targetCell.occupiedCellsIndex = this.occupiedCells.length;
          this.occupiedCells.push(targetCell);
        }
        obj.HSHG.objectContainerIndex = targetCell.objectContainer.length;
        obj.HSHG.hash = objHash;
        obj.HSHG.grid = this;
        obj.HSHG.allGridObjectsIndex = this.allObjects.length;
        targetCell.objectContainer.push(obj);
        this.allObjects.push(obj);
        if (this.allObjects.length / this.allCells.length > this._parentHierarchy.MAX_OBJECT_CELL_DENSITY) {
          this.expandGrid();
        }
      }
      removeObject(obj) {
        const meta = obj.HSHG;
        let hash;
        let containerIndex;
        let allGridObjectsIndex;
        let cell;
        let replacementCell;
        let replacementObj;
        hash = meta.hash;
        containerIndex = meta.objectContainerIndex;
        allGridObjectsIndex = meta.allGridObjectsIndex;
        cell = this.allCells[hash];
        if (cell.objectContainer.length === 1) {
          cell.objectContainer.length = 0;
          if (cell.occupiedCellsIndex === this.occupiedCells.length - 1) {
            this.occupiedCells.pop();
          } else {
            replacementCell = this.occupiedCells.pop();
            replacementCell.occupiedCellsIndex = cell.occupiedCellsIndex;
            this.occupiedCells[cell.occupiedCellsIndex] = replacementCell;
          }
          cell.occupiedCellsIndex = null;
        } else {
          if (containerIndex === cell.objectContainer.length - 1) {
            cell.objectContainer.pop();
          } else {
            replacementObj = cell.objectContainer.pop();
            replacementObj.HSHG.objectContainerIndex = containerIndex;
            cell.objectContainer[containerIndex] = replacementObj;
          }
        }
        if (allGridObjectsIndex === this.allObjects.length - 1) {
          this.allObjects.pop();
        } else {
          replacementObj = this.allObjects.pop();
          replacementObj.HSHG.allGridObjectsIndex = allGridObjectsIndex;
          this.allObjects[allGridObjectsIndex] = replacementObj;
        }
      }
      expandGrid() {
        let i;
        let j;
        const currentCellCount = this.allCells.length;
        const currentRowColumnCount = this.rowColumnCount;
        const currentXYHashMask = this.xyHashMask;
        const newCellCount = currentCellCount * 4;
        const newRowColumnCount = ~~Math.sqrt(newCellCount);
        const newXYHashMask = newRowColumnCount - 1;
        const allObjects = this.allObjects.slice(0);
        let aCell;
        const push = Array.prototype.push;
        for (i = 0; i < allObjects.length; i++) {
          this.removeObject(allObjects[i]);
        }
        this.rowColumnCount = newRowColumnCount;
        this.allCells = Array(this.rowColumnCount * this.rowColumnCount);
        this.xyHashMask = newXYHashMask;
        this.initCells();
        for (i = 0; i < allObjects.length; i++) {
          this.addObject(allObjects[i]);
        }
      }
    }
    class Cell {
      constructor() {
        this.objectContainer = [];
        this.occupiedCellsIndex = null;
        this.allCellsIndex = null;
      }
    }
    root["HSHG"] = HSHG;
    HSHG._private = {
      Grid,
      Cell,
      testAABBOverlap,
      getLongestAABBEdge
    };
  })(gdjs2.HSHG);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=hshg.js.map
