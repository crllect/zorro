
gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax = gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax || {};

/**
 * Behavior generated from Horizontal Parallax for a Tiled Sprite
 */
gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax = class HorizontalTiledSpriteParallax extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.ParallaxFactor = behaviorData.ParallaxFactor !== undefined ? behaviorData.ParallaxFactor : Number("0.5") || 0;
    this._behaviorData.FollowedLayer = behaviorData.FollowedLayer !== undefined ? behaviorData.FollowedLayer : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ParallaxFactor !== newBehaviorData.ParallaxFactor)
      this._behaviorData.ParallaxFactor = newBehaviorData.ParallaxFactor;
    if (oldBehaviorData.FollowedLayer !== newBehaviorData.FollowedLayer)
      this._behaviorData.FollowedLayer = newBehaviorData.FollowedLayer;

    return true;
  }

  // Properties:
  
  _getParallaxFactor() {
    return this._behaviorData.ParallaxFactor !== undefined ? this._behaviorData.ParallaxFactor : Number("0.5") || 0;
  }
  _setParallaxFactor(newValue) {
    this._behaviorData.ParallaxFactor = newValue;
  }
  _getFollowedLayer() {
    return this._behaviorData.FollowedLayer !== undefined ? this._behaviorData.FollowedLayer : "";
  }
  _setFollowedLayer(newValue) {
    this._behaviorData.FollowedLayer = newValue;
  }
}

// Methods:
gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowedLayer()), 0) * (gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getParallaxFactor()));
}
}{for(var i = 0, len = gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects1[i].setX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects1[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, (gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0));
}
}}

}


};

gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Parallax::HorizontalTiledSpriteParallax", gdjs.evtsExt__Parallax__HorizontalTiledSpriteParallax.HorizontalTiledSpriteParallax);
