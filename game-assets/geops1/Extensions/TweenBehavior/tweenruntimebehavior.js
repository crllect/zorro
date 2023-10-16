var gdjs;
(function(gdjs2) {
  const TweenRuntimeBehavior2 = class extends gdjs2.RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
      super(runtimeScene, behaviorData, owner);
      this._tweens = {};
      this._isActive = true;
      this._runtimeScene = runtimeScene;
    }
    updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
      return true;
    }
    _addTween(identifier, instance, startTime, totalDuration) {
      this._tweens[identifier] = new TweenRuntimeBehavior2.TweenInstance(instance, false, startTime, totalDuration);
    }
    _getTween(identifier) {
      return this._tweens[identifier];
    }
    _tweenExists(identifier) {
      return !!this._tweens[identifier];
    }
    _tweenIsPlaying(identifier) {
      return this._tweens[identifier].instance.isPlaying();
    }
    _pauseTween(identifier) {
      const tween = this._tweens[identifier];
      tween.instance.pause();
      const shiftyJsScene = this._runtimeScene.shiftyJsScene;
      if (shiftyJsScene) {
        shiftyJsScene.remove(tween.instance);
      }
    }
    _resumeTween(identifier) {
      const tween = this._tweens[identifier];
      tween.instance.resume();
      const shiftyJsScene = this._runtimeScene.shiftyJsScene;
      if (shiftyJsScene) {
        shiftyJsScene.add(tween.instance);
      }
    }
    _stopTween(identifier, jumpToDest) {
      return this._tweens[identifier].instance.stop(jumpToDest);
    }
    _setTweenFinished(identifier, hasFinished) {
      this._tweens[identifier].hasFinished = hasFinished;
    }
    _tweenHasFinished(identifier) {
      return this._tweens[identifier].hasFinished;
    }
    _removeObjectFromScene(identifier) {
      this._removeTween(identifier);
      return this.owner.deleteFromScene(this._runtimeScene);
    }
    _removeTween(identifier) {
      if (!this._tweens[identifier]) {
        return;
      }
      this._tweens[identifier].instance.stop();
      TweenRuntimeBehavior2.removeFromScene(this._runtimeScene, this._tweens[identifier].instance);
      delete this._tweens[identifier];
    }
    _setupTweenEnding(identifier, destroyObjectWhenFinished) {
      const that = this;
      if (destroyObjectWhenFinished) {
        this._tweens[identifier].instance.tween().then(function() {
          that._removeObjectFromScene(identifier);
        }).catch(function() {
        });
      } else {
        this._tweens[identifier].instance.tween().then(function() {
          if (that._tweens[identifier]) {
            that._tweens[identifier].hasFinished = true;
          }
        }).catch(function() {
        });
      }
    }
    addVariableTween(identifier, variable, fromValue, toValue, easingValue, durationValue, destroyObjectWhenFinished) {
      if (!this._isActive) {
        return;
      }
      if (!!TweenRuntimeBehavior2.easings[easingValue]) {
        return;
      }
      if (this._tweenExists(identifier)) {
        this.removeTween(identifier);
      }
      const newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
      newTweenable.setConfig({
        from: {value: fromValue},
        to: {value: toValue},
        duration: durationValue,
        easing: easingValue,
        step: function step(state) {
          variable.setNumber(state.value);
        }
      });
      this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
      this._setupTweenEnding(identifier, destroyObjectWhenFinished);
    }
    addObjectPositionTween(identifier, toX, toY, easingValue, durationValue, destroyObjectWhenFinished) {
      const that = this;
      if (!this._isActive) {
        return;
      }
      if (!!TweenRuntimeBehavior2.easings[easingValue]) {
        return;
      }
      if (this._tweenExists(identifier)) {
        this.removeTween(identifier);
      }
      const newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
      newTweenable.setConfig({
        from: {x: this.owner.getX(), y: this.owner.getY()},
        to: {x: toX, y: toY},
        duration: durationValue,
        easing: easingValue,
        step: function step(state) {
          that.owner.setX(state.x);
          that.owner.setY(state.y);
        }
      });
      this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
      this._setupTweenEnding(identifier, destroyObjectWhenFinished);
    }
    addObjectPositionXTween(identifier, toX, easingValue, durationValue, destroyObjectWhenFinished) {
      const that = this;
      if (!this._isActive) {
        return;
      }
      if (!!TweenRuntimeBehavior2.easings[easingValue]) {
        return;
      }
      if (this._tweenExists(identifier)) {
        this.removeTween(identifier);
      }
      const newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
      newTweenable.setConfig({
        from: {x: this.owner.getX()},
        to: {x: toX},
        duration: durationValue,
        easing: easingValue,
        step: function step(state) {
          that.owner.setX(state.x);
        }
      });
      this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
      this._setupTweenEnding(identifier, destroyObjectWhenFinished);
    }
    addObjectPositionYTween(identifier, toY, easingValue, durationValue, destroyObjectWhenFinished) {
      const that = this;
      if (!this._isActive) {
        return;
      }
      if (!!TweenRuntimeBehavior2.easings[easingValue]) {
        return;
      }
      if (this._tweenExists(identifier)) {
        this.removeTween(identifier);
      }
      const newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
      newTweenable.setConfig({
        from: {y: this.owner.getY()},
        to: {y: toY},
        duration: durationValue,
        easing: easingValue,
        step: function step(state) {
          that.owner.setY(state.y);
        }
      });
      this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
      this._setupTweenEnding(identifier, destroyObjectWhenFinished);
    }
    addObjectAngleTween(identifier, toAngle, easingValue, durationValue, destroyObjectWhenFinished) {
      const that = this;
      if (!this._isActive) {
        return;
      }
      if (!!TweenRuntimeBehavior2.easings[easingValue]) {
        return;
      }
      if (this._tweenExists(identifier)) {
        this.removeTween(identifier);
      }
      const newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
      newTweenable.setConfig({
        from: {angle: this.owner.getAngle()},
        to: {angle: toAngle},
        duration: durationValue,
        easing: easingValue,
        step: function step(state) {
          that.owner.setAngle(state.angle);
        }
      });
      this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
      this._setupTweenEnding(identifier, destroyObjectWhenFinished);
    }
    addObjectScaleTween(identifier, toScaleX, toScaleY, easingValue, durationValue, destroyObjectWhenFinished) {
      const that = this;
      if (!this._isActive) {
        return;
      }
      if (!this.owner.setScaleX || !this.owner.setScaleY) {
        return;
      }
      if (!!TweenRuntimeBehavior2.easings[easingValue]) {
        return;
      }
      if (this._tweenExists(identifier)) {
        this.removeTween(identifier);
      }
      if (toScaleX < 0) {
        toScaleX = 0;
      }
      if (toScaleY < 0) {
        toScaleY = 0;
      }
      const newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
      newTweenable.setConfig({
        from: {
          scaleX: this.owner.getScaleX(),
          scaleY: this.owner.getScaleY()
        },
        to: {scaleX: toScaleX, scaleY: toScaleY},
        duration: durationValue,
        easing: easingValue,
        step: function step(state) {
          that.owner.setScaleX(state.scaleX);
          that.owner.setScaleY(state.scaleY);
        }
      });
      this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
      this._setupTweenEnding(identifier, destroyObjectWhenFinished);
    }
    addObjectScaleXTween(identifier, toScaleX, easingValue, durationValue, destroyObjectWhenFinished) {
      const that = this;
      if (!this._isActive) {
        return;
      }
      if (!this.owner.setScaleX) {
        return;
      }
      if (!!TweenRuntimeBehavior2.easings[easingValue]) {
        return;
      }
      if (this._tweenExists(identifier)) {
        this.removeTween(identifier);
      }
      const newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
      newTweenable.setConfig({
        from: {scaleX: this.owner.getScaleX()},
        to: {scaleX: toScaleX},
        duration: durationValue,
        easing: easingValue,
        step: function step(state) {
          that.owner.setScaleX(state.scaleX);
        }
      });
      this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
      this._setupTweenEnding(identifier, destroyObjectWhenFinished);
    }
    addObjectScaleYTween(identifier, toScaleY, easingValue, durationValue, destroyObjectWhenFinished) {
      const that = this;
      if (!this._isActive) {
        return;
      }
      if (!this.owner.setScaleY) {
        return;
      }
      if (!!TweenRuntimeBehavior2.easings[easingValue]) {
        return;
      }
      if (this._tweenExists(identifier)) {
        this.removeTween(identifier);
      }
      const newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
      newTweenable.setConfig({
        from: {scaleY: this.owner.getScaleY()},
        to: {scaleY: toScaleY},
        duration: durationValue,
        easing: easingValue,
        step: function step(state) {
          that.owner.setScaleY(state.scaleY);
        }
      });
      this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
      this._setupTweenEnding(identifier, destroyObjectWhenFinished);
    }
    addObjectOpacityTween(identifier, toOpacity, easingValue, durationValue, destroyObjectWhenFinished) {
      const that = this;
      if (!this._isActive) {
        return;
      }
      if (!this.owner.getOpacity || !this.owner.setOpacity) {
        return;
      }
      if (!!TweenRuntimeBehavior2.easings[easingValue]) {
        return;
      }
      if (this._tweenExists(identifier)) {
        this.removeTween(identifier);
      }
      const newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
      newTweenable.setConfig({
        from: {opacity: this.owner.getOpacity()},
        to: {opacity: toOpacity},
        duration: durationValue,
        easing: easingValue,
        step: function step(state) {
          that.owner.setOpacity(state.opacity);
        }
      });
      this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
      this._setupTweenEnding(identifier, destroyObjectWhenFinished);
    }
    addObjectColorTween(identifier, toColorStr, easingValue, durationValue, destroyObjectWhenFinished) {
      const that = this;
      if (!this._isActive) {
        return;
      }
      if (!this.owner.getColor || !this.owner.setColor) {
        return;
      }
      if (!toColorStr.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]);){2}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")) {
        return;
      }
      if (!!TweenRuntimeBehavior2.easings[easingValue]) {
        return;
      }
      if (this._tweenExists(identifier)) {
        this.removeTween(identifier);
      }
      const fromColor = this.owner.getColor().split(";");
      let toColor = toColorStr.split(";");
      if (toColor.length !== 3) {
        return;
      }
      const newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
      newTweenable.setConfig({
        from: {red: fromColor[0], green: fromColor[1], blue: fromColor[2]},
        to: {red: toColor[0], green: toColor[1], blue: toColor[2]},
        duration: durationValue,
        easing: easingValue,
        step: function step(state) {
          that.owner.setColor(Math.floor(state.red) + ";" + Math.floor(state.green) + ";" + Math.floor(state.blue));
        }
      });
      this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
      this._setupTweenEnding(identifier, destroyObjectWhenFinished);
    }
    addTextObjectCharacterSizeTween(identifier, toSize, easingValue, durationValue, destroyObjectWhenFinished) {
      const that = this;
      if (!this._isActive) {
        return;
      }
      if (!this.owner.setCharacterSize) {
        return;
      }
      if (!!TweenRuntimeBehavior2.easings[easingValue]) {
        return;
      }
      if (this._tweenExists(identifier)) {
        this.removeTween(identifier);
      }
      const newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
      newTweenable.setConfig({
        from: {size: this.owner.getCharacterSize()},
        to: {size: toSize},
        duration: durationValue,
        easing: easingValue,
        step: function step(state) {
          that.owner.setCharacterSize(state.size);
        }
      });
      this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
      this._setupTweenEnding(identifier, destroyObjectWhenFinished);
    }
    addObjectWidthTween(identifier, toWidth, easingValue, durationValue, destroyObjectWhenFinished) {
      const that = this;
      if (!this._isActive) {
        return;
      }
      if (!!TweenRuntimeBehavior2.easings[easingValue]) {
        return;
      }
      if (this._tweenExists(identifier)) {
        this.removeTween(identifier);
      }
      const newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
      newTweenable.setConfig({
        from: {width: this.owner.getWidth()},
        to: {width: toWidth},
        duration: durationValue,
        easing: easingValue,
        step: function step(state) {
          that.owner.setWidth(state.width);
        }
      });
      this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
      this._setupTweenEnding(identifier, destroyObjectWhenFinished);
    }
    addObjectHeightTween(identifier, toHeight, easingValue, durationValue, destroyObjectWhenFinished) {
      const that = this;
      if (!this._isActive) {
        return;
      }
      if (!!TweenRuntimeBehavior2.easings[easingValue]) {
        return;
      }
      if (this._tweenExists(identifier)) {
        this.removeTween(identifier);
      }
      const newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
      newTweenable.setConfig({
        from: {height: this.owner.getHeight()},
        to: {height: toHeight},
        duration: durationValue,
        easing: easingValue,
        step: function step(state) {
          that.owner.setHeight(state.height);
        }
      });
      this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
      this._setupTweenEnding(identifier, destroyObjectWhenFinished);
    }
    isPlaying(identifier) {
      if (this._tweenExists(identifier) && this._tweenIsPlaying(identifier)) {
        return true;
      } else {
        return false;
      }
    }
    exists(identifier) {
      return this._tweenExists(identifier);
    }
    hasFinished(identifier) {
      if (this._tweenExists(identifier)) {
        return this._tweenHasFinished(identifier);
      } else {
        return false;
      }
    }
    pauseTween(identifier) {
      if (!this._isActive) {
        return;
      }
      if (this._tweenExists(identifier) && this._tweenIsPlaying(identifier)) {
        this._pauseTween(identifier);
      }
    }
    stopTween(identifier, jumpToDest) {
      if (!this._isActive) {
        return;
      }
      if (this._tweenExists(identifier) && this._tweenIsPlaying(identifier)) {
        this._stopTween(identifier, jumpToDest);
      }
    }
    resumeTween(identifier) {
      if (!this._isActive) {
        return;
      }
      if (this._tweenExists(identifier) && !this._tweenIsPlaying(identifier)) {
        this._resumeTween(identifier);
      }
    }
    removeTween(identifier) {
      this._removeTween(identifier);
    }
    getProgress(identifier) {
      const tween = this._getTween(identifier);
      if (tween) {
        const currentTime = this._runtimeScene.getTimeManager().getTimeFromStart();
        if (currentTime >= tween.startTime + tween.totalDuration) {
          return 1;
        }
        return (currentTime - tween.startTime) / tween.totalDuration;
      } else {
        return 0;
      }
    }
    onDeActivate() {
      if (!this._isActive) {
        return;
      }
      for (const key in this._tweens) {
        if (this._tweens.hasOwnProperty(key)) {
          const tween = this._tweens[key];
          if (tween.instance.isPlaying()) {
            tween.resumeOnActivate = true;
            this._pauseTween(key);
          }
        }
      }
      this._isActive = false;
    }
    onActivate() {
      if (this._isActive) {
        return;
      }
      for (const key in this._tweens) {
        if (this._tweens.hasOwnProperty(key)) {
          const tween = this._tweens[key];
          if (tween.resumeOnActivate) {
            tween.resumeOnActivate = false;
            this._resumeTween(key);
          }
        }
      }
      this._isActive = true;
    }
    static makeNewTweenable(runtimeScene) {
      if (!runtimeScene.shiftyJsScene) {
        runtimeScene.shiftyJsScene = new shifty.Scene();
      }
      const tweenable = new shifty.Tweenable();
      runtimeScene.shiftyJsScene.add(tweenable);
      return tweenable;
    }
    static removeFromScene(runtimeScene, tweenable) {
      if (!runtimeScene.shiftyJsScene) {
        return;
      }
      runtimeScene.shiftyJsScene.remove(tweenable);
    }
  };
  let TweenRuntimeBehavior = TweenRuntimeBehavior2;
  TweenRuntimeBehavior.easings = [
    "linear",
    "easeInQuad",
    "easeOutQuad",
    "easeInOutQuad",
    "easeInCubic",
    "easeOutCubic",
    "easeInOutCubic",
    "easeInQuart",
    "easeOutQuart",
    "easeInOutQuart",
    "easeInQuint",
    "easeOutQuint",
    "easeInOutQuint",
    "easeInSine",
    "easeOutSine",
    "easeInOutSine",
    "easeInExpo",
    "easeOutExpo",
    "easeInOutExpo",
    "easeInCirc",
    "easeOutCirc",
    "easeInOutCirc",
    "easeOutBounce",
    "easeInBack",
    "easeOutBack",
    "easeInOutBack",
    "elastic",
    "swingFromTo",
    "swingFrom",
    "swingTo",
    "bounce",
    "bouncePast",
    "easeFromTo",
    "easeFrom",
    "easeTo"
  ];
  TweenRuntimeBehavior._tweensProcessed = false;
  TweenRuntimeBehavior._currentTweenTime = 0;
  gdjs2.TweenRuntimeBehavior = TweenRuntimeBehavior;
  gdjs2.registerBehavior("Tween::TweenBehavior", gdjs2.TweenRuntimeBehavior);
  (function(TweenRuntimeBehavior3) {
    class TweenInstance {
      constructor(instance, hasFinished, startTime, totalDuration) {
        this.resumeOnActivate = false;
        this.instance = instance;
        this.hasFinished = hasFinished;
        this.startTime = startTime;
        this.totalDuration = totalDuration;
      }
    }
    TweenRuntimeBehavior3.TweenInstance = TweenInstance;
  })(TweenRuntimeBehavior = gdjs2.TweenRuntimeBehavior || (gdjs2.TweenRuntimeBehavior = {}));
  gdjs2.registerRuntimeSceneUnloadedCallback(function(runtimeScene) {
    const shiftyJsScene = runtimeScene.shiftyJsScene;
    if (!shiftyJsScene) {
      return;
    }
    shiftyJsScene.stop(false);
    shiftyJsScene.tweenables.forEach(shiftyJsScene.remove.bind(shiftyJsScene));
  });
  gdjs2.registerRuntimeScenePausedCallback(function(runtimeScene) {
    const shiftyJsScene = runtimeScene.shiftyJsScene;
    if (!shiftyJsScene) {
      return;
    }
    shiftyJsScene.pause();
  });
  gdjs2.registerRuntimeSceneResumedCallback(function(runtimeScene) {
    const shiftyJsScene = runtimeScene.shiftyJsScene;
    if (!shiftyJsScene) {
      return;
    }
    TweenRuntimeBehavior._currentTweenTime = runtimeScene.getTimeManager().getTimeFromStart();
    shiftyJsScene.resume();
  });
  gdjs2.registerRuntimeScenePreEventsCallback(function(runtimeScene) {
    TweenRuntimeBehavior._currentTweenTime = runtimeScene.getTimeManager().getTimeFromStart();
    shifty.processTweens();
  });
  shifty.Tweenable.setScheduleFunction(function() {
  });
  shifty.Tweenable.now = function() {
    return TweenRuntimeBehavior._currentTweenTime;
  };
})(gdjs || (gdjs = {}));
//# sourceMappingURL=tweenruntimebehavior.js.map
