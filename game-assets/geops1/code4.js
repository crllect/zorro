gdjs.Dry_32Out_32Pause_32MenuCode = {};
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon1DefObjects1= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon1DefObjects2= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon2DefObjects1= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon2DefObjects2= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon3DefObjects1= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon3DefObjects2= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon4DefObjects1= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon4DefObjects2= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDGamePausedObjects1= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDGamePausedObjects2= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDText1Objects1= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDText1Objects2= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDText2Objects1= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDText2Objects2= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDText3Objects1= [];
gdjs.Dry_32Out_32Pause_32MenuCode.GDText3Objects2= [];

gdjs.Dry_32Out_32Pause_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Dry_32Out_32Pause_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Dry_32Out_32Pause_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Dry_32Out_32Pause_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Dry_32Out_32Pause_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Dry_32Out_32Pause_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Dry_32Out_32Pause_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Dry_32Out_32Pause_32MenuCode.condition2IsTrue_1 = {val:false};


gdjs.Dry_32Out_32Pause_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Dry_32Out_32Pause_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Dry_32Out_32Pause_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Dry_32Out_32Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.Dry_32Out_32Pause_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Dry_32Out_32Pause_32MenuCode.conditionTrue_1 = gdjs.Dry_32Out_32Pause_32MenuCode.condition1IsTrue_0;
gdjs.Dry_32Out_32Pause_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10335116);
}
}}
if (gdjs.Dry_32Out_32Pause_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.Dry_32Out_32Pause_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Dry_32Out_32Pause_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Dry_32Out_32Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
}if ( gdjs.Dry_32Out_32Pause_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Dry_32Out_32Pause_32MenuCode.conditionTrue_1 = gdjs.Dry_32Out_32Pause_32MenuCode.condition1IsTrue_0;
gdjs.Dry_32Out_32Pause_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10335884);
}
}}
if (gdjs.Dry_32Out_32Pause_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dry Out", true);
}}

}


{


gdjs.Dry_32Out_32Pause_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Dry_32Out_32Pause_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Dry_32Out_32Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}if ( gdjs.Dry_32Out_32Pause_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Dry_32Out_32Pause_32MenuCode.conditionTrue_1 = gdjs.Dry_32Out_32Pause_32MenuCode.condition1IsTrue_0;
gdjs.Dry_32Out_32Pause_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10336748);
}
}}
if (gdjs.Dry_32Out_32Pause_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Selection", true);
}}

}


};

gdjs.Dry_32Out_32Pause_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon1DefObjects1.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon1DefObjects2.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon2DefObjects1.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon2DefObjects2.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon3DefObjects1.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon3DefObjects2.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon4DefObjects1.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDIcon4DefObjects2.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDGamePausedObjects1.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDGamePausedObjects2.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDText1Objects1.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDText1Objects2.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDText2Objects1.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDText2Objects2.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDText3Objects1.length = 0;
gdjs.Dry_32Out_32Pause_32MenuCode.GDText3Objects2.length = 0;

gdjs.Dry_32Out_32Pause_32MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['Dry_32Out_32Pause_32MenuCode'] = gdjs.Dry_32Out_32Pause_32MenuCode;
