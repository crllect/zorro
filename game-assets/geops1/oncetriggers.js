var gdjs;
(function(gdjs2) {
  class OnceTriggers {
    constructor() {
      this._onceTriggers = {};
      this._lastFrameOnceTrigger = {};
    }
    startNewFrame() {
      this._clearObject(this._lastFrameOnceTrigger);
      for (const k in this._onceTriggers) {
        if (this._onceTriggers.hasOwnProperty(k)) {
          this._lastFrameOnceTrigger[k] = this._onceTriggers[k];
          delete this._onceTriggers[k];
        }
      }
    }
    triggerOnce(triggerId) {
      this._onceTriggers[triggerId] = true;
      return !this._lastFrameOnceTrigger.hasOwnProperty(triggerId);
    }
    _clearObject(obj) {
      for (const k in obj) {
        if (obj.hasOwnProperty(k)) {
          delete obj[k];
        }
      }
    }
  }
  gdjs2.OnceTriggers = OnceTriggers;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=oncetriggers.js.map
