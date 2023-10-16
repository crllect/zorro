var gdjs;
(function(gdjs2) {
  class Variable {
    constructor(varData) {
      this._value = 0;
      this._str = "";
      this._numberDirty = false;
      this._stringDirty = true;
      this._isStructure = false;
      this._children = {};
      this._undefinedInContainer = false;
      this.reinitialize(varData);
    }
    reinitialize(varData) {
      this._value = 0;
      this._str = "";
      this._numberDirty = false;
      this._stringDirty = true;
      this._isStructure = false;
      this._children = {};
      this._undefinedInContainer = false;
      if (varData !== void 0) {
        if (varData.value !== void 0) {
          const initialValue = varData.value;
          const valueWhenConsideredAsNumber = parseFloat(initialValue);
          if (valueWhenConsideredAsNumber === valueWhenConsideredAsNumber && valueWhenConsideredAsNumber.toString() === initialValue) {
            this._value = parseFloat(initialValue);
          } else {
            if (initialValue.length === 0) {
              this._value = 0;
            } else {
              this._str = initialValue;
              this._numberDirty = true;
              this._stringDirty = false;
            }
          }
        } else {
          this._isStructure = true;
          if (varData.children !== void 0) {
            for (let i = 0, len = varData.children.length; i < len; ++i) {
              const childData = varData.children[i];
              this._children[childData.name] = new gdjs2.Variable(childData);
            }
          }
        }
      }
    }
    setUndefinedInContainer() {
      this._undefinedInContainer = true;
    }
    isUndefinedInContainer() {
      return this._undefinedInContainer;
    }
    getChild(childName) {
      if (this._children.hasOwnProperty(childName) && this._children[childName] !== void 0) {
        return this._children[childName];
      }
      this._isStructure = true;
      this._children[childName] = new gdjs2.Variable();
      return this._children[childName];
    }
    addChild(childName, childVariable) {
      this._isStructure = true;
      this._children[childName] = childVariable;
      return this;
    }
    hasChild(childName) {
      return this._isStructure && this._children.hasOwnProperty(childName);
    }
    removeChild(childName) {
      if (!this._isStructure) {
        return;
      }
      delete this._children[childName];
    }
    clearChildren() {
      if (!this._isStructure) {
        return;
      }
      for (const child in this._children) {
        if (this._children.hasOwnProperty(child)) {
          delete this._children[child];
        }
      }
    }
    replaceChildren(newChildren) {
      this._isStructure = true;
      this._children = newChildren;
    }
    getAsNumber() {
      if (this._numberDirty) {
        this._value = parseFloat(this._str);
        if (this._value !== this._value) {
          this._value = 0;
        }
        this._numberDirty = false;
      }
      return this._value;
    }
    setNumber(newValue) {
      this._value = newValue;
      this._stringDirty = true;
      this._numberDirty = false;
    }
    getAsString() {
      if (this._stringDirty) {
        this._str = this._value.toString();
        this._stringDirty = false;
      }
      return this._str;
    }
    setString(newValue) {
      this._str = newValue;
      this._numberDirty = true;
      this._stringDirty = false;
    }
    isStructure() {
      return this._isStructure;
    }
    isNumber() {
      return !this._isStructure && !this._numberDirty;
    }
    getAllChildren() {
      return this._children;
    }
    add(val) {
      this.setNumber(this.getAsNumber() + val);
    }
    sub(val) {
      this.setNumber(this.getAsNumber() - val);
    }
    mul(val) {
      this.setNumber(this.getAsNumber() * val);
    }
    div(val) {
      this.setNumber(this.getAsNumber() / val);
    }
    concatenate(str) {
      this.setString(this.getAsString() + str);
    }
  }
  gdjs2.Variable = Variable;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=variable.js.map
