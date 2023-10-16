var gdjs;
(function(gdjs2) {
  class PlatformerObjectRuntimeBehavior extends gdjs2.RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
      super(runtimeScene, behaviorData, owner);
      this._ignoreTouchingEdges = true;
      this._isOnFloor = false;
      this._isOnLadder = false;
      this._floorPlatform = null;
      this._currentFallSpeed = 0;
      this._currentSpeed = 0;
      this._jumping = false;
      this._currentJumpSpeed = 0;
      this._timeSinceCurrentJumpStart = 0;
      this._jumpKeyHeldSinceJumpStart = false;
      this._canJump = false;
      this._isGrabbingPlatform = false;
      this._grabbedPlatform = null;
      this._leftKey = false;
      this._rightKey = false;
      this._ladderKey = false;
      this._upKey = false;
      this._downKey = false;
      this._jumpKey = false;
      this._oldHeight = 0;
      this._hasReallyMoved = false;
      this._roundCoordinates = behaviorData.roundCoordinates;
      this._gravity = behaviorData.gravity;
      this._maxFallingSpeed = behaviorData.maxFallingSpeed;
      this._ladderClimbingSpeed = behaviorData.ladderClimbingSpeed || 150;
      this._acceleration = behaviorData.acceleration;
      this._deceleration = behaviorData.deceleration;
      this._maxSpeed = behaviorData.maxSpeed;
      this._jumpSpeed = behaviorData.jumpSpeed;
      this._canGrabPlatforms = behaviorData.canGrabPlatforms || false;
      this._yGrabOffset = behaviorData.yGrabOffset || 0;
      this._xGrabTolerance = behaviorData.xGrabTolerance || 10;
      this._jumpSustainTime = behaviorData.jumpSustainTime || 0;
      this._ignoreDefaultControls = behaviorData.ignoreDefaultControls;
      this._potentialCollidingObjects = [];
      this._overlappedJumpThru = [];
      this._slopeMaxAngle = 0;
      this.setSlopeMaxAngle(behaviorData.slopeMaxAngle);
      this._manager = gdjs2.PlatformObjectsManager.getManager(runtimeScene);
    }
    updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
      if (oldBehaviorData.roundCoordinates !== newBehaviorData.roundCoordinates) {
        this._roundCoordinates = newBehaviorData.roundCoordinates;
      }
      if (oldBehaviorData.gravity !== newBehaviorData.gravity) {
        this.setGravity(newBehaviorData.gravity);
      }
      if (oldBehaviorData.maxFallingSpeed !== newBehaviorData.maxFallingSpeed) {
        this.setMaxFallingSpeed(newBehaviorData.maxFallingSpeed);
      }
      if (oldBehaviorData.acceleration !== newBehaviorData.acceleration) {
        this.setAcceleration(newBehaviorData.acceleration);
      }
      if (oldBehaviorData.deceleration !== newBehaviorData.deceleration) {
        this.setDeceleration(newBehaviorData.deceleration);
      }
      if (oldBehaviorData.maxSpeed !== newBehaviorData.maxSpeed) {
        this.setMaxSpeed(newBehaviorData.maxSpeed);
      }
      if (oldBehaviorData.jumpSpeed !== newBehaviorData.jumpSpeed) {
        this.setJumpSpeed(newBehaviorData.jumpSpeed);
      }
      if (oldBehaviorData.canGrabPlatforms !== newBehaviorData.canGrabPlatforms) {
        this.setCanGrabPlatforms(newBehaviorData.canGrabPlatforms);
      }
      if (oldBehaviorData.yGrabOffset !== newBehaviorData.yGrabOffset) {
        this._yGrabOffset = newBehaviorData.yGrabOffset;
      }
      if (oldBehaviorData.xGrabTolerance !== newBehaviorData.xGrabTolerance) {
        this._xGrabTolerance = newBehaviorData.xGrabTolerance;
      }
      if (oldBehaviorData.jumpSustainTime !== newBehaviorData.jumpSustainTime) {
        this.setJumpSustainTime(newBehaviorData.jumpSustainTime);
      }
      return true;
    }
    doStepPreEvents(runtimeScene) {
      const LEFTKEY = 37;
      const UPKEY = 38;
      const RIGHTKEY = 39;
      const DOWNKEY = 40;
      const LSHIFTKEY = 1016;
      const RSHIFTKEY = 2016;
      const SPACEKEY = 32;
      const object = this.owner;
      const timeDelta = this.owner.getElapsedTime(runtimeScene) / 1e3;
      let requestedDeltaX = 0;
      let requestedDeltaY = 0;
      this._leftKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(LEFTKEY);
      this._rightKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(RIGHTKEY);
      if (this._leftKey) {
        this._currentSpeed -= this._acceleration * timeDelta;
      }
      if (this._rightKey) {
        this._currentSpeed += this._acceleration * timeDelta;
      }
      if (this._leftKey == this._rightKey) {
        const wasPositive = this._currentSpeed > 0;
        this._currentSpeed -= this._deceleration * timeDelta * (wasPositive ? 1 : -1);
        if (wasPositive && this._currentSpeed < 0) {
          this._currentSpeed = 0;
        }
        if (!wasPositive && this._currentSpeed > 0) {
          this._currentSpeed = 0;
        }
      }
      if (this._currentSpeed > this._maxSpeed) {
        this._currentSpeed = this._maxSpeed;
      }
      if (this._currentSpeed < -this._maxSpeed) {
        this._currentSpeed = -this._maxSpeed;
      }
      requestedDeltaX += this._currentSpeed * timeDelta;
      if (this._isOnFloor && this._oldHeight !== object.getHeight()) {
        object.setY(this._floorLastY - object.getHeight() + (object.getY() - object.getDrawableY()) - 1);
      }
      this._oldHeight = object.getHeight();
      this._updatePotentialCollidingObjects(Math.max(requestedDeltaX, this._maxFallingSpeed * timeDelta));
      this._updateOverlappedJumpThru();
      if (this._isOnFloor && !this._isIn(this._potentialCollidingObjects, this._floorPlatform.owner.id)) {
        this._isOnFloor = false;
        this._floorPlatform = null;
      }
      if (this._isGrabbingPlatform && !this._isIn(this._potentialCollidingObjects, this._grabbedPlatform.owner.id)) {
        this._releaseGrabbedPlatform();
      }
      if (this._isOnFloor) {
        requestedDeltaX += this._floorPlatform.owner.getX() - this._floorLastX;
        requestedDeltaY += this._floorPlatform.owner.getY() - this._floorLastY;
      }
      if (this._isGrabbingPlatform) {
        requestedDeltaX = this._grabbedPlatform.owner.getX() - this._grabbedPlatformLastX;
        requestedDeltaY = this._grabbedPlatform.owner.getY() - this._grabbedPlatformLastY;
      }
      if (this._separateFromPlatforms(this._potentialCollidingObjects, true)) {
        this._canJump = true;
      }
      const oldX = object.getX();
      if (requestedDeltaX !== 0) {
        const floorPlatformId = this._floorPlatform !== null ? this._floorPlatform.owner.id : null;
        object.setX(object.getX() + requestedDeltaX);
        let tryRounding = true;
        while (this._isCollidingWith(this._potentialCollidingObjects, floorPlatformId, true)) {
          if (requestedDeltaX > 0 && object.getX() <= oldX || requestedDeltaX < 0 && object.getX() >= oldX) {
            object.setX(oldX);
            break;
          }
          if (this._isOnFloor) {
            object.setY(object.getY() - 1);
            if (!this._isCollidingWith(this._potentialCollidingObjects, floorPlatformId, true)) {
              break;
            }
            object.setY(object.getY() + 1);
          }
          if (tryRounding) {
            object.setX(Math.round(object.getX()));
            tryRounding = false;
          } else {
            object.setX(Math.round(object.getX()) + (requestedDeltaX > 0 ? -1 : 1));
          }
          this._currentSpeed = 0;
        }
      }
      this._ladderKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(UPKEY);
      if (this._ladderKey && this._isOverlappingLadder()) {
        this._canJump = true;
        this._isOnFloor = false;
        this._floorPlatform = null;
        this._currentJumpSpeed = 0;
        this._currentFallSpeed = 0;
        this._isOnLadder = true;
      }
      if (this._isOnLadder) {
        this._upKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(UPKEY);
        this._downKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(DOWNKEY);
        if (this._upKey) {
          requestedDeltaY -= this._ladderClimbingSpeed * timeDelta;
        }
        if (this._downKey) {
          requestedDeltaY += this._ladderClimbingSpeed * timeDelta;
        }
        if (!this._isOverlappingLadder()) {
          this._isOnLadder = false;
        }
      }
      if (!this._isOnFloor && !this._isOnLadder && !this._isGrabbingPlatform) {
        this._currentFallSpeed += this._gravity * timeDelta;
        if (this._currentFallSpeed > this._maxFallingSpeed) {
          this._currentFallSpeed = this._maxFallingSpeed;
        }
        requestedDeltaY += this._currentFallSpeed * timeDelta;
        requestedDeltaY = Math.min(requestedDeltaY, this._maxFallingSpeed * timeDelta);
      }
      if (this._canGrabPlatforms && requestedDeltaX !== 0 && !this._isOnLadder && !this._isOnFloor) {
        let tryGrabbingPlatform = false;
        object.setX(object.getX() + (requestedDeltaX > 0 ? this._xGrabTolerance : -this._xGrabTolerance));
        let collidingPlatform = this._getCollidingPlatform();
        if (collidingPlatform !== null && this._canGrab(collidingPlatform, requestedDeltaY)) {
          tryGrabbingPlatform = true;
        }
        object.setX(object.getX() + (requestedDeltaX > 0 ? -this._xGrabTolerance : this._xGrabTolerance));
        if (tryGrabbingPlatform) {
          let oldY = object.getY();
          object.setY(collidingPlatform.owner.getY() + collidingPlatform.getYGrabOffset() - this._yGrabOffset);
          if (!this._isCollidingWith(this._potentialCollidingObjects, null, true)) {
            this._isGrabbingPlatform = true;
            this._grabbedPlatform = collidingPlatform;
            requestedDeltaY = 0;
          } else {
            object.setY(oldY);
          }
        }
      }
      this._releaseKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(DOWNKEY);
      if (this._isGrabbingPlatform && !this._releaseKey) {
        this._canJump = true;
        this._currentJumpSpeed = 0;
        this._currentFallSpeed = 0;
        this._grabbedPlatformLastX = this._grabbedPlatform.owner.getX();
        this._grabbedPlatformLastY = this._grabbedPlatform.owner.getY();
      }
      if (this._releaseKey) {
        this._releaseGrabbedPlatform();
      }
      this._jumpKey |= !this._ignoreDefaultControls && (runtimeScene.getGame().getInputManager().isKeyPressed(LSHIFTKEY) || runtimeScene.getGame().getInputManager().isKeyPressed(RSHIFTKEY) || runtimeScene.getGame().getInputManager().isKeyPressed(SPACEKEY));
      if (this._canJump && this._jumpKey) {
        this._jumping = true;
        this._canJump = false;
        this._timeSinceCurrentJumpStart = 0;
        this._jumpKeyHeldSinceJumpStart = true;
        this._isOnLadder = false;
        this._currentJumpSpeed = this._jumpSpeed;
        this._currentFallSpeed = 0;
        this._isGrabbingPlatform = false;
      }
      if (!this._jumpKey) {
        this._jumpKeyHeldSinceJumpStart = false;
      }
      if (this._jumping) {
        this._timeSinceCurrentJumpStart += timeDelta;
        requestedDeltaY -= this._currentJumpSpeed * timeDelta;
        const sustainJumpSpeed = this._jumpKeyHeldSinceJumpStart && this._timeSinceCurrentJumpStart < this._jumpSustainTime;
        if (!sustainJumpSpeed) {
          this._currentJumpSpeed -= this._gravity * timeDelta;
        }
        if (this._currentJumpSpeed < 0) {
          this._currentJumpSpeed = 0;
          this._jumping = false;
        }
      }
      if (this._isOnFloor) {
        if (gdjs2.RuntimeObject.collisionTest(object, this._floorPlatform.owner, this._ignoreTouchingEdges)) {
          let oldY = object.getY();
          let step = 0;
          let stillInFloor = false;
          do {
            if (step >= Math.floor(Math.abs(requestedDeltaX * this._slopeClimbingFactor))) {
              object.setY(object.getY() - (Math.abs(requestedDeltaX * this._slopeClimbingFactor) - step));
              if (gdjs2.RuntimeObject.collisionTest(object, this._floorPlatform.owner, this._ignoreTouchingEdges)) {
                stillInFloor = true;
              }
              break;
            }
            object.setY(object.getY() - 1);
            step++;
          } while (gdjs2.RuntimeObject.collisionTest(object, this._floorPlatform.owner, this._ignoreTouchingEdges));
          if (stillInFloor) {
            object.setY(oldY);
            object.setX(oldX);
          }
        } else {
          let oldY = object.getY();
          const tentativeStartY = object.getY() + 1;
          object.setY(this._roundCoordinates ? Math.round(tentativeStartY) : tentativeStartY);
          let step = 0;
          let noMoreOnFloor = false;
          while (!this._isCollidingWith(this._potentialCollidingObjects)) {
            if (step > Math.abs(requestedDeltaX * this._slopeClimbingFactor)) {
              noMoreOnFloor = true;
              break;
            }
            object.setY(object.getY() + 1);
            step++;
          }
          if (noMoreOnFloor) {
            object.setY(oldY);
          } else {
            object.setY(object.getY() - 1);
          }
        }
      }
      if (requestedDeltaY !== 0) {
        let oldY = object.getY();
        object.setY(object.getY() + requestedDeltaY);
        while (requestedDeltaY < 0 && this._isCollidingWith(this._potentialCollidingObjects, null, true) || requestedDeltaY > 0 && this._isCollidingWithExcluding(this._potentialCollidingObjects, this._overlappedJumpThru)) {
          this._jumping = false;
          this._currentJumpSpeed = 0;
          if (requestedDeltaY > 0 && object.getY() <= oldY || requestedDeltaY < 0 && object.getY() >= oldY) {
            object.setY(oldY);
            break;
          }
          object.setY(Math.floor(object.getY()) + (requestedDeltaY > 0 ? -1 : 1));
        }
      }
      this._updateOverlappedJumpThru();
      if (!this._isOnLadder) {
        let oldY = object.getY();
        object.setY(object.getY() + 1);
        if (this._isOnFloor && gdjs2.RuntimeObject.collisionTest(object, this._floorPlatform.owner, this._ignoreTouchingEdges)) {
          this._floorLastX = this._floorPlatform.owner.getX();
          this._floorLastY = this._floorPlatform.owner.getY();
          this._releaseGrabbedPlatform();
        } else {
          const canLand = requestedDeltaY >= 0;
          let collidingPlatform = this._getCollidingPlatform();
          if (canLand && collidingPlatform !== null) {
            this._isOnFloor = true;
            this._canJump = true;
            this._jumping = false;
            this._currentJumpSpeed = 0;
            this._currentFallSpeed = 0;
            this._floorPlatform = collidingPlatform;
            this._floorLastX = this._floorPlatform.owner.getX();
            this._floorLastY = this._floorPlatform.owner.getY();
            this._releaseGrabbedPlatform();
          } else {
            this._canJump = false;
            this._isOnFloor = false;
            this._floorPlatform = null;
          }
        }
        object.setY(oldY);
      }
      this._leftKey = false;
      this._rightKey = false;
      this._ladderKey = false;
      this._upKey = false;
      this._downKey = false;
      this._releaseKey = false;
      this._jumpKey = false;
      this._hasReallyMoved = Math.abs(object.getX() - oldX) >= 1;
    }
    doStepPostEvents(runtimeScene) {
    }
    _canGrab(platform, requestedDeltaY) {
      const y1 = this.owner.getY() + this._yGrabOffset;
      const y2 = this.owner.getY() + this._yGrabOffset + requestedDeltaY;
      const platformY = platform.owner.getY() + platform.getYGrabOffset();
      return platform.canBeGrabbed() && (y1 < platformY && platformY < y2 || y2 < platformY && platformY < y1);
    }
    _releaseGrabbedPlatform() {
      this._isGrabbingPlatform = false;
      this._grabbedPlatform = null;
    }
    _isCollidingWith(candidates, exceptThisOne, excludeJumpThrus) {
      excludeJumpThrus = !!excludeJumpThrus;
      for (let i = 0; i < candidates.length; ++i) {
        const platform = candidates[i];
        if (platform.owner.id === exceptThisOne) {
          continue;
        }
        if (platform.getPlatformType() === gdjs2.PlatformRuntimeBehavior.LADDER) {
          continue;
        }
        if (excludeJumpThrus && platform.getPlatformType() === gdjs2.PlatformRuntimeBehavior.JUMPTHRU) {
          continue;
        }
        if (gdjs2.RuntimeObject.collisionTest(this.owner, platform.owner, this._ignoreTouchingEdges)) {
          return true;
        }
      }
      return false;
    }
    _separateFromPlatforms(candidates, excludeJumpThrus) {
      excludeJumpThrus = !!excludeJumpThrus;
      const objects = gdjs2.staticArray(PlatformerObjectRuntimeBehavior.prototype._separateFromPlatforms);
      objects.length = 0;
      for (let i = 0; i < candidates.length; ++i) {
        const platform = candidates[i];
        if (platform.getPlatformType() === gdjs2.PlatformRuntimeBehavior.LADDER) {
          continue;
        }
        if (excludeJumpThrus && platform.getPlatformType() === gdjs2.PlatformRuntimeBehavior.JUMPTHRU) {
          continue;
        }
        objects.push(platform.owner);
      }
      return this.owner.separateFromObjects(objects, this._ignoreTouchingEdges);
    }
    _isCollidingWithExcluding(candidates, exceptTheseOnes) {
      for (let i = 0; i < candidates.length; ++i) {
        const platform = candidates[i];
        if (exceptTheseOnes && this._isIn(exceptTheseOnes, platform.owner.id)) {
          continue;
        }
        if (platform.getPlatformType() === gdjs2.PlatformRuntimeBehavior.LADDER) {
          continue;
        }
        if (gdjs2.RuntimeObject.collisionTest(this.owner, platform.owner, this._ignoreTouchingEdges)) {
          return true;
        }
      }
      return false;
    }
    _getCollidingPlatform() {
      for (let i = 0; i < this._potentialCollidingObjects.length; ++i) {
        const platform = this._potentialCollidingObjects[i];
        if (platform.getPlatformType() !== gdjs2.PlatformRuntimeBehavior.LADDER && !this._isIn(this._overlappedJumpThru, platform.owner.id) && gdjs2.RuntimeObject.collisionTest(this.owner, platform.owner, this._ignoreTouchingEdges)) {
          return platform;
        }
      }
      return null;
    }
    _updateOverlappedJumpThru() {
      this._overlappedJumpThru.length = 0;
      for (let i = 0; i < this._potentialCollidingObjects.length; ++i) {
        const platform = this._potentialCollidingObjects[i];
        if (platform.getPlatformType() === gdjs2.PlatformRuntimeBehavior.JUMPTHRU && gdjs2.RuntimeObject.collisionTest(this.owner, platform.owner, this._ignoreTouchingEdges)) {
          this._overlappedJumpThru.push(platform);
        }
      }
    }
    _isOverlappingLadder() {
      for (let i = 0; i < this._potentialCollidingObjects.length; ++i) {
        const platform = this._potentialCollidingObjects[i];
        if (platform.getPlatformType() !== gdjs2.PlatformRuntimeBehavior.LADDER) {
          continue;
        }
        if (gdjs2.RuntimeObject.collisionTest(this.owner, platform.owner, this._ignoreTouchingEdges)) {
          return true;
        }
      }
      return false;
    }
    _isIn(platformArray, id) {
      for (let i = 0; i < platformArray.length; ++i) {
        if (platformArray[i].owner.id === id) {
          return true;
        }
      }
      return false;
    }
    _updatePotentialCollidingObjects(maxMovementLength) {
      this._manager.getAllPlatformsAround(this.owner, maxMovementLength, this._potentialCollidingObjects);
      for (let i = 0; i < this._potentialCollidingObjects.length; ) {
        if (this._potentialCollidingObjects[i].owner === this.owner) {
          this._potentialCollidingObjects.splice(i, 1);
        } else {
          i++;
        }
      }
    }
    simulateControl(input) {
      if (input === "Left") {
        this._leftKey = true;
      } else if (input === "Right") {
        this._rightKey = true;
      } else if (input === "Up") {
        this._upKey = true;
      } else if (input === "Down") {
        this._downKey = true;
      } else if (input === "Ladder") {
        this._ladderKey = true;
      } else if (input === "Jump") {
        this._jumpKey = true;
      } else if (input === "Release") {
        this._releaseKey = true;
      }
    }
    getGravity() {
      return this._gravity;
    }
    getMaxFallingSpeed() {
      return this._maxFallingSpeed;
    }
    getLadderClimbingSpeed() {
      return this._ladderClimbingSpeed;
    }
    getAcceleration() {
      return this._acceleration;
    }
    getDeceleration() {
      return this._deceleration;
    }
    getMaxSpeed() {
      return this._maxSpeed;
    }
    getJumpSpeed() {
      return this._jumpSpeed;
    }
    getJumpSustainTime() {
      return this._jumpSustainTime;
    }
    getCurrentFallSpeed() {
      return this._currentFallSpeed;
    }
    getCurrentSpeed() {
      return this._currentSpeed;
    }
    getCurrentJumpSpeed() {
      return this._currentJumpSpeed;
    }
    canGrabPlatforms() {
      return this._canGrabPlatforms;
    }
    canJump() {
      return this._canJump;
    }
    setGravity(gravity) {
      this._gravity = gravity;
    }
    setMaxFallingSpeed(maxFallingSpeed) {
      this._maxFallingSpeed = maxFallingSpeed;
    }
    setLadderClimbingSpeed(ladderClimbingSpeed) {
      this._ladderClimbingSpeed = ladderClimbingSpeed;
    }
    setAcceleration(acceleration) {
      this._acceleration = acceleration;
    }
    setDeceleration(deceleration) {
      this._deceleration = deceleration;
    }
    setMaxSpeed(maxSpeed) {
      this._maxSpeed = maxSpeed;
    }
    setJumpSpeed(jumpSpeed) {
      this._jumpSpeed = jumpSpeed;
    }
    setJumpSustainTime(jumpSustainTime) {
      this._jumpSustainTime = jumpSustainTime;
    }
    setSlopeMaxAngle(slopeMaxAngle) {
      if (slopeMaxAngle < 0 || slopeMaxAngle >= 90) {
        return;
      }
      this._slopeMaxAngle = slopeMaxAngle;
      if (slopeMaxAngle == 45) {
        this._slopeClimbingFactor = 1;
      } else {
        this._slopeClimbingFactor = Math.tan(slopeMaxAngle * 3.1415926 / 180);
      }
    }
    setCanJump() {
      this._canJump = true;
    }
    setCanGrabPlatforms(enable) {
      this._canGrabPlatforms = enable;
      if (!this._canGrabPlatforms) {
        this._releaseGrabbedPlatform();
      }
    }
    ignoreDefaultControls(ignore) {
      this._ignoreDefaultControls = ignore;
    }
    simulateLeftKey() {
      this._leftKey = true;
    }
    simulateRightKey() {
      this._rightKey = true;
    }
    simulateLadderKey() {
      this._ladderKey = true;
    }
    simulateUpKey() {
      this._upKey = true;
    }
    simulateDownKey() {
      this._downKey = true;
    }
    simulateJumpKey() {
      this._jumpKey = true;
    }
    simulateReleaseKey() {
      this._releaseKey = true;
    }
    isOnFloor() {
      return this._isOnFloor;
    }
    isOnLadder() {
      return this._isOnLadder;
    }
    isJumping() {
      return this._jumping;
    }
    isGrabbingPlatform() {
      return this._isGrabbingPlatform;
    }
    isFalling() {
      return !this._isOnFloor && !this._isGrabbingPlatform && !this._isOnLadder && (!this._jumping || this._currentJumpSpeed < this._currentFallSpeed);
    }
    isMoving() {
      return this._hasReallyMoved && this._currentSpeed !== 0 || this._currentJumpSpeed !== 0 || this._currentFallSpeed !== 0;
    }
  }
  gdjs2.PlatformerObjectRuntimeBehavior = PlatformerObjectRuntimeBehavior;
  gdjs2.registerBehavior("PlatformBehavior::PlatformerObjectBehavior", gdjs2.PlatformerObjectRuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=platformerobjectruntimebehavior.js.map
