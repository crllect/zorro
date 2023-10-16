var gdjs;
(function(gdjs2) {
  class RuntimeGamePixiRenderer {
    constructor(game, forceFullscreen) {
      this._isFullPage = true;
      this._isFullscreen = false;
      this._pixiRenderer = null;
      this._canvasWidth = 0;
      this._canvasHeight = 0;
      this._keepRatio = true;
      this._game = game;
      this._forceFullscreen = forceFullscreen;
      this._marginLeft = this._marginTop = this._marginRight = this._marginBottom = 0;
      this._setupOrientation();
    }
    createStandardCanvas(parentElement) {
      this._pixiRenderer = PIXI.autoDetectRenderer({
        width: this._game.getGameResolutionWidth(),
        height: this._game.getGameResolutionHeight(),
        preserveDrawingBuffer: true,
        antialias: false
      });
      parentElement.appendChild(this._pixiRenderer.view);
      this._pixiRenderer.view.style["position"] = "absolute";
      this._pixiRenderer.view.tabIndex = 1;
      this._resizeCanvas();
      if (this._game.getScaleMode() === "nearest") {
        this._pixiRenderer.view.style["image-rendering"] = "-moz-crisp-edges";
        this._pixiRenderer.view.style["image-rendering"] = "-webkit-optimize-contrast";
        this._pixiRenderer.view.style["image-rendering"] = "-webkit-crisp-edges";
        this._pixiRenderer.view.style["image-rendering"] = "pixelated";
      }
      const that = this;
      window.addEventListener("resize", function() {
        that._game.onWindowInnerSizeChanged();
        that._resizeCanvas();
        that._game._notifySceneForResize = true;
      });
      return this._pixiRenderer;
    }
    static getWindowInnerWidth() {
      return typeof window !== "undefined" ? window.innerWidth : 800;
    }
    static getWindowInnerHeight() {
      return typeof window !== "undefined" ? window.innerHeight : 800;
    }
    updateRendererSize() {
      this._resizeCanvas();
    }
    _setupOrientation() {
      if (typeof window === "undefined" || !window.screen || !window.screen.orientation) {
        return;
      }
      const gameOrientation = this._game.getGameData().properties.orientation;
      try {
        if (gameOrientation === "default") {
          const promise = window.screen.orientation.unlock();
          if (promise) {
            promise.catch(() => {
            });
          }
        } else {
          window.screen.orientation.lock(gameOrientation).catch(() => {
          });
        }
      } catch (error) {
        console.error("Unexpected error while setting up orientation: ", error);
      }
    }
    _resizeCanvas() {
      if (!this._pixiRenderer)
        return;
      if (this._pixiRenderer.width !== this._game.getGameResolutionWidth() || this._pixiRenderer.height !== this._game.getGameResolutionHeight()) {
        this._pixiRenderer.resize(this._game.getGameResolutionWidth(), this._game.getGameResolutionHeight());
      }
      const isFullPage = this._forceFullscreen || this._isFullPage || this._isFullscreen;
      let canvasWidth = this._game.getGameResolutionWidth();
      let canvasHeight = this._game.getGameResolutionHeight();
      let maxWidth = window.innerWidth - this._marginLeft - this._marginRight;
      let maxHeight = window.innerHeight - this._marginTop - this._marginBottom;
      if (maxWidth < 0) {
        maxWidth = 0;
      }
      if (maxHeight < 0) {
        maxHeight = 0;
      }
      if (isFullPage && !this._keepRatio) {
        canvasWidth = maxWidth;
        canvasHeight = maxHeight;
      } else {
        if (isFullPage && this._keepRatio || canvasWidth > maxWidth || canvasHeight > maxHeight) {
          let factor = maxWidth / canvasWidth;
          if (canvasHeight * factor > maxHeight) {
            factor = maxHeight / canvasHeight;
          }
          canvasWidth *= factor;
          canvasHeight *= factor;
        }
      }
      this._pixiRenderer.view.style["top"] = this._marginTop + (maxHeight - canvasHeight) / 2 + "px";
      this._pixiRenderer.view.style["left"] = this._marginLeft + (maxWidth - canvasWidth) / 2 + "px";
      this._pixiRenderer.view.style.width = canvasWidth + "px";
      this._pixiRenderer.view.style.height = canvasHeight + "px";
      this._canvasWidth = canvasWidth;
      this._canvasHeight = canvasHeight;
    }
    keepAspectRatio(enable) {
      if (this._keepRatio === enable) {
        return;
      }
      this._keepRatio = enable;
      this._resizeCanvas();
      this._game._notifySceneForResize = true;
    }
    setMargins(top, right, bottom, left) {
      if (this._marginTop === top && this._marginRight === right && this._marginBottom === bottom && this._marginLeft === left) {
        return;
      }
      this._marginTop = top;
      this._marginRight = right;
      this._marginBottom = bottom;
      this._marginLeft = left;
      this._resizeCanvas();
      this._game._notifySceneForResize = true;
    }
    setWindowSize(width, height) {
      const electron = this.getElectron();
      if (electron) {
        const browserWindow = electron.remote.getCurrentWindow();
        if (browserWindow) {
          browserWindow.setContentSize(width, height);
        }
      } else {
        console.warn("Window size can't be changed on this platform.");
      }
    }
    centerWindow() {
      const electron = this.getElectron();
      if (electron) {
        const browserWindow = electron.remote.getCurrentWindow();
        if (browserWindow) {
          browserWindow.center();
        }
      } else {
      }
    }
    setFullScreen(enable) {
      if (this._forceFullscreen) {
        return;
      }
      if (this._isFullscreen !== enable) {
        this._isFullscreen = !!enable;
        const electron = this.getElectron();
        if (electron) {
          const browserWindow = electron.remote.getCurrentWindow();
          if (browserWindow) {
            browserWindow.setFullScreen(this._isFullscreen);
          }
        } else {
          if (this._isFullscreen) {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else {
              if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
              } else {
                if (document.documentElement.webkitRequestFullScreen) {
                  document.documentElement.webkitRequestFullScreen();
                }
              }
            }
          } else {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else {
              if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else {
                if (document.webkitCancelFullScreen) {
                  document.webkitCancelFullScreen();
                }
              }
            }
          }
        }
        this._resizeCanvas();
        this._notifySceneForResize = true;
      }
    }
    isFullScreen() {
      const electron = this.getElectron();
      if (electron) {
        return electron.remote.getCurrentWindow().isFullScreen();
      }
      return this._isFullscreen || window.screen.height === window.innerHeight;
    }
    bindStandardEvents(manager, window2, document2) {
      const renderer = this._pixiRenderer;
      if (!renderer)
        return;
      const canvas = renderer.view;
      const that = this;
      function getEventPosition(e) {
        const pos = [0, 0];
        if (e.pageX) {
          pos[0] = e.pageX - canvas.offsetLeft;
          pos[1] = e.pageY - canvas.offsetTop;
        } else {
          pos[0] = e.clientX + document2.body.scrollLeft + document2.documentElement.scrollLeft - canvas.offsetLeft;
          pos[1] = e.clientY + document2.body.scrollTop + document2.documentElement.scrollTop - canvas.offsetTop;
        }
        pos[0] *= that._game.getGameResolutionWidth() / (that._canvasWidth || 1);
        pos[1] *= that._game.getGameResolutionHeight() / (that._canvasHeight || 1);
        return pos;
      }
      (function ensureOffsetsExistence() {
        if (isNaN(canvas.offsetLeft)) {
          canvas.offsetLeft = 0;
          canvas.offsetTop = 0;
        }
        if (isNaN(document2.body.scrollLeft)) {
          document2.body.scrollLeft = 0;
          document2.body.scrollTop = 0;
        }
        if (document2.documentElement === void 0 || document2.documentElement === null) {
          document2.documentElement = {};
        }
        if (isNaN(document2.documentElement.scrollLeft)) {
          document2.documentElement.scrollLeft = 0;
          document2.documentElement.scrollTop = 0;
        }
        if (isNaN(canvas.offsetLeft)) {
          canvas.offsetLeft = 0;
          canvas.offsetTop = 0;
        }
      })();
      document2.onkeydown = function(e) {
        manager.onKeyPressed(e.keyCode, e.location);
      };
      document2.onkeyup = function(e) {
        manager.onKeyReleased(e.keyCode, e.location);
      };
      renderer.view.onmousemove = function(e) {
        const pos = getEventPosition(e);
        manager.onMouseMove(pos[0], pos[1]);
      };
      renderer.view.onmousedown = function(e) {
        manager.onMouseButtonPressed(e.button === 2 ? gdjs2.InputManager.MOUSE_RIGHT_BUTTON : e.button === 1 ? gdjs2.InputManager.MOUSE_MIDDLE_BUTTON : gdjs2.InputManager.MOUSE_LEFT_BUTTON);
        if (window2.focus !== void 0) {
          window2.focus();
        }
        return false;
      };
      renderer.view.onmouseup = function(e) {
        manager.onMouseButtonReleased(e.button === 2 ? gdjs2.InputManager.MOUSE_RIGHT_BUTTON : e.button === 1 ? gdjs2.InputManager.MOUSE_MIDDLE_BUTTON : gdjs2.InputManager.MOUSE_LEFT_BUTTON);
        return false;
      };
      window2.addEventListener("click", function(e) {
        if (window2.focus !== void 0) {
          window2.focus();
        }
        e.preventDefault();
        return false;
      }, false);
      renderer.view.oncontextmenu = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      };
      renderer.view.onmousewheel = function(event) {
        manager.onMouseWheel(event.wheelDelta);
      };
      window2.addEventListener("touchmove", function(e) {
        e.preventDefault();
        if (e.changedTouches) {
          for (let i = 0; i < e.changedTouches.length; ++i) {
            const pos = getEventPosition(e.changedTouches[i]);
            manager.onTouchMove(e.changedTouches[i].identifier, pos[0], pos[1]);
          }
        }
      });
      window2.addEventListener("touchstart", function(e) {
        e.preventDefault();
        if (e.changedTouches) {
          for (let i = 0; i < e.changedTouches.length; ++i) {
            const pos = getEventPosition(e.changedTouches[i]);
            manager.onTouchStart(e.changedTouches[i].identifier, pos[0], pos[1]);
          }
        }
        return false;
      });
      window2.addEventListener("touchend", function(e) {
        e.preventDefault();
        if (e.changedTouches) {
          for (let i = 0; i < e.changedTouches.length; ++i) {
            const pos = getEventPosition(e.changedTouches[i]);
            manager.onTouchEnd(e.changedTouches[i].identifier);
          }
        }
        return false;
      });
    }
    setWindowTitle(title) {
      if (typeof document !== "undefined") {
        document.title = title;
      }
    }
    getWindowTitle() {
      return typeof document !== "undefined" ? document.title : "";
    }
    startGameLoop(fn) {
      requestAnimationFrame(gameLoop);
      let oldTime = 0;
      function gameLoop(time) {
        const dt = oldTime ? time - oldTime : 0;
        oldTime = time;
        if (fn(dt)) {
          requestAnimationFrame(gameLoop);
        }
      }
    }
    getPIXIRenderer() {
      return this._pixiRenderer;
    }
    openURL(url) {
      if (typeof window !== "undefined") {
        const electron = this.getElectron();
        if (electron) {
          electron.shell.openExternal(url);
        } else {
          const target = window.cordova ? "_system" : "_blank";
          window.open(url, target);
        }
      }
    }
    stopGame() {
      const electron = this.getElectron();
      if (electron) {
        const browserWindow = electron.remote.getCurrentWindow();
        if (browserWindow) {
          browserWindow.close();
        }
      } else {
        if (typeof navigator !== "undefined" && navigator.app && navigator.app.exitApp) {
          navigator.app.exitApp();
        }
      }
    }
    getCanvas() {
      return this._pixiRenderer.view;
    }
    isWebGLSupported() {
      return !!this._pixiRenderer && this._pixiRenderer.type === PIXI.RENDERER_TYPE.WEBGL;
    }
    getElectron() {
      if (typeof require !== "undefined") {
        return require("electron");
      }
      return null;
    }
  }
  gdjs2.RuntimeGamePixiRenderer = RuntimeGamePixiRenderer;
  gdjs2.RuntimeGameRenderer = RuntimeGamePixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimegame-pixi-renderer.js.map
