gdjs.Jumper_32Pause_32MenuCode = {};
gdjs.Jumper_32Pause_32MenuCode.GDIcon1DefObjects1= [];
gdjs.Jumper_32Pause_32MenuCode.GDIcon1DefObjects2= [];
gdjs.Jumper_32Pause_32MenuCode.GDIcon2DefObjects1= [];
gdjs.Jumper_32Pause_32MenuCode.GDIcon2DefObjects2= [];
gdjs.Jumper_32Pause_32MenuCode.GDIcon3DefObjects1= [];
gdjs.Jumper_32Pause_32MenuCode.GDIcon3DefObjects2= [];
gdjs.Jumper_32Pause_32MenuCode.GDIcon4DefObjects1= [];
gdjs.Jumper_32Pause_32MenuCode.GDIcon4DefObjects2= [];
gdjs.Jumper_32Pause_32MenuCode.GDGamePausedObjects1= [];
gdjs.Jumper_32Pause_32MenuCode.GDGamePausedObjects2= [];
gdjs.Jumper_32Pause_32MenuCode.GDText1Objects1= [];
gdjs.Jumper_32Pause_32MenuCode.GDText1Objects2= [];
gdjs.Jumper_32Pause_32MenuCode.GDText2Objects1= [];
gdjs.Jumper_32Pause_32MenuCode.GDText2Objects2= [];
gdjs.Jumper_32Pause_32MenuCode.GDText3Objects1= [];
gdjs.Jumper_32Pause_32MenuCode.GDText3Objects2= [];

gdjs.Jumper_32Pause_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Jumper_32Pause_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Jumper_32Pause_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Jumper_32Pause_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Jumper_32Pause_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Jumper_32Pause_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Jumper_32Pause_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Jumper_32Pause_32MenuCode.condition2IsTrue_1 = {val:false};


gdjs.Jumper_32Pause_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Jumper_32Pause_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Jumper_32Pause_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Jumper_32Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.Jumper_32Pause_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Jumper_32Pause_32MenuCode.conditionTrue_1 = gdjs.Jumper_32Pause_32MenuCode.condition1IsTrue_0;
gdjs.Jumper_32Pause_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10510060);
}
}}
if (gdjs.Jumper_32Pause_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.Jumper_32Pause_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Jumper_32Pause_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Jumper_32Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
}if ( gdjs.Jumper_32Pause_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Jumper_32Pause_32MenuCode.conditionTrue_1 = gdjs.Jumper_32Pause_32MenuCode.condition1IsTrue_0;
gdjs.Jumper_32Pause_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10510828);
}
}}
if (gdjs.Jumper_32Pause_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jumper", true);
}}

}


{


gdjs.Jumper_32Pause_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Jumper_32Pause_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Jumper_32Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}if ( gdjs.Jumper_32Pause_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Jumper_32Pause_32MenuCode.conditionTrue_1 = gdjs.Jumper_32Pause_32MenuCode.condition1IsTrue_0;
gdjs.Jumper_32Pause_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10511692);
}
}}
if (gdjs.Jumper_32Pause_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Selection", true);
}}

}


};

gdjs.Jumper_32Pause_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Jumper_32Pause_32MenuCode.GDIcon1DefObjects1.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDIcon1DefObjects2.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDIcon2DefObjects1.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDIcon2DefObjects2.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDIcon3DefObjects1.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDIcon3DefObjects2.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDIcon4DefObjects1.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDIcon4DefObjects2.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDGamePausedObjects1.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDGamePausedObjects2.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDText1Objects1.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDText1Objects2.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDText2Objects1.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDText2Objects2.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDText3Objects1.length = 0;
gdjs.Jumper_32Pause_32MenuCode.GDText3Objects2.length = 0;

gdjs.Jumper_32Pause_32MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['Jumper_32Pause_32MenuCode'] = gdjs.Jumper_32Pause_32MenuCode;
