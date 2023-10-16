gdjs.Dry_32OutCode = {};
gdjs.Dry_32OutCode.GDIcon1DefObjects1= [];
gdjs.Dry_32OutCode.GDIcon1DefObjects2= [];
gdjs.Dry_32OutCode.GDIcon1DefObjects3= [];
gdjs.Dry_32OutCode.GDIcon2DefObjects1= [];
gdjs.Dry_32OutCode.GDIcon2DefObjects2= [];
gdjs.Dry_32OutCode.GDIcon2DefObjects3= [];
gdjs.Dry_32OutCode.GDIcon3DefObjects1= [];
gdjs.Dry_32OutCode.GDIcon3DefObjects2= [];
gdjs.Dry_32OutCode.GDIcon3DefObjects3= [];
gdjs.Dry_32OutCode.GDIcon4DefObjects1= [];
gdjs.Dry_32OutCode.GDIcon4DefObjects2= [];
gdjs.Dry_32OutCode.GDIcon4DefObjects3= [];
gdjs.Dry_32OutCode.GDHitboxObjects1= [];
gdjs.Dry_32OutCode.GDHitboxObjects2= [];
gdjs.Dry_32OutCode.GDHitboxObjects3= [];
gdjs.Dry_32OutCode.GDGround1Objects1= [];
gdjs.Dry_32OutCode.GDGround1Objects2= [];
gdjs.Dry_32OutCode.GDGround1Objects3= [];
gdjs.Dry_32OutCode.GDGround2Objects1= [];
gdjs.Dry_32OutCode.GDGround2Objects2= [];
gdjs.Dry_32OutCode.GDGround2Objects3= [];
gdjs.Dry_32OutCode.GDCameraObjects1= [];
gdjs.Dry_32OutCode.GDCameraObjects2= [];
gdjs.Dry_32OutCode.GDCameraObjects3= [];
gdjs.Dry_32OutCode.GDBlockObjects1= [];
gdjs.Dry_32OutCode.GDBlockObjects2= [];
gdjs.Dry_32OutCode.GDBlockObjects3= [];
gdjs.Dry_32OutCode.GDBigSpikeObjects1= [];
gdjs.Dry_32OutCode.GDBigSpikeObjects2= [];
gdjs.Dry_32OutCode.GDBigSpikeObjects3= [];
gdjs.Dry_32OutCode.GDSmallSpikeObjects1= [];
gdjs.Dry_32OutCode.GDSmallSpikeObjects2= [];
gdjs.Dry_32OutCode.GDSmallSpikeObjects3= [];
gdjs.Dry_32OutCode.GDCameraTweenUpObjects1= [];
gdjs.Dry_32OutCode.GDCameraTweenUpObjects2= [];
gdjs.Dry_32OutCode.GDCameraTweenUpObjects3= [];
gdjs.Dry_32OutCode.GDCameraTweenDownObjects1= [];
gdjs.Dry_32OutCode.GDCameraTweenDownObjects2= [];
gdjs.Dry_32OutCode.GDCameraTweenDownObjects3= [];
gdjs.Dry_32OutCode.GDPauseMenuBGObjects1= [];
gdjs.Dry_32OutCode.GDPauseMenuBGObjects2= [];
gdjs.Dry_32OutCode.GDPauseMenuBGObjects3= [];
gdjs.Dry_32OutCode.GDPauseMenuObjects1= [];
gdjs.Dry_32OutCode.GDPauseMenuObjects2= [];
gdjs.Dry_32OutCode.GDPauseMenuObjects3= [];
gdjs.Dry_32OutCode.GDPauseMenuText1Objects1= [];
gdjs.Dry_32OutCode.GDPauseMenuText1Objects2= [];
gdjs.Dry_32OutCode.GDPauseMenuText1Objects3= [];
gdjs.Dry_32OutCode.GDPauseMenuText2Objects1= [];
gdjs.Dry_32OutCode.GDPauseMenuText2Objects2= [];
gdjs.Dry_32OutCode.GDPauseMenuText2Objects3= [];
gdjs.Dry_32OutCode.GDPauseMenuText3Objects1= [];
gdjs.Dry_32OutCode.GDPauseMenuText3Objects2= [];
gdjs.Dry_32OutCode.GDPauseMenuText3Objects3= [];
gdjs.Dry_32OutCode.GDEndPortalObjects1= [];
gdjs.Dry_32OutCode.GDEndPortalObjects2= [];
gdjs.Dry_32OutCode.GDEndPortalObjects3= [];

gdjs.Dry_32OutCode.conditionTrue_0 = {val:false};
gdjs.Dry_32OutCode.condition0IsTrue_0 = {val:false};
gdjs.Dry_32OutCode.condition1IsTrue_0 = {val:false};
gdjs.Dry_32OutCode.condition2IsTrue_0 = {val:false};
gdjs.Dry_32OutCode.condition3IsTrue_0 = {val:false};
gdjs.Dry_32OutCode.condition4IsTrue_0 = {val:false};
gdjs.Dry_32OutCode.condition5IsTrue_0 = {val:false};
gdjs.Dry_32OutCode.conditionTrue_1 = {val:false};
gdjs.Dry_32OutCode.condition0IsTrue_1 = {val:false};
gdjs.Dry_32OutCode.condition1IsTrue_1 = {val:false};
gdjs.Dry_32OutCode.condition2IsTrue_1 = {val:false};
gdjs.Dry_32OutCode.condition3IsTrue_1 = {val:false};
gdjs.Dry_32OutCode.condition4IsTrue_1 = {val:false};
gdjs.Dry_32OutCode.condition5IsTrue_1 = {val:false};


gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDIcon1DefObjects2Objects = Hashtable.newFrom({"Icon1Def": gdjs.Dry_32OutCode.GDIcon1DefObjects2});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDIcon2DefObjects2Objects = Hashtable.newFrom({"Icon2Def": gdjs.Dry_32OutCode.GDIcon2DefObjects2});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDIcon3DefObjects2Objects = Hashtable.newFrom({"Icon3Def": gdjs.Dry_32OutCode.GDIcon3DefObjects2});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDIcon4DefObjects2Objects = Hashtable.newFrom({"Icon4Def": gdjs.Dry_32OutCode.GDIcon4DefObjects2});gdjs.Dry_32OutCode.eventsList0 = function(runtimeScene) {

{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Icon")) == 1;
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Dry_32OutCode.GDHitboxObjects1, gdjs.Dry_32OutCode.GDHitboxObjects2);

gdjs.Dry_32OutCode.GDIcon1DefObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDIcon1DefObjects2Objects, (( gdjs.Dry_32OutCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects2[0].getPointX("")), (( gdjs.Dry_32OutCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects2[0].getPointY("")), "");
}}

}


{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Icon")) == 2;
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Dry_32OutCode.GDHitboxObjects1, gdjs.Dry_32OutCode.GDHitboxObjects2);

gdjs.Dry_32OutCode.GDIcon2DefObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDIcon2DefObjects2Objects, (( gdjs.Dry_32OutCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects2[0].getPointX("")), (( gdjs.Dry_32OutCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects2[0].getPointY("")), "");
}}

}


{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Icon")) == 3;
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Dry_32OutCode.GDHitboxObjects1, gdjs.Dry_32OutCode.GDHitboxObjects2);

gdjs.Dry_32OutCode.GDIcon3DefObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDIcon3DefObjects2Objects, (( gdjs.Dry_32OutCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects2[0].getPointX("")), (( gdjs.Dry_32OutCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects2[0].getPointY("")), "");
}}

}


{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Icon")) == 4;
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Dry_32OutCode.GDHitboxObjects1, gdjs.Dry_32OutCode.GDHitboxObjects2);

gdjs.Dry_32OutCode.GDIcon4DefObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDIcon4DefObjects2Objects, (( gdjs.Dry_32OutCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects2[0].getPointX("")), (( gdjs.Dry_32OutCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects2[0].getPointY("")), "");
}}

}


{


{
}

}


};gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.Dry_32OutCode.GDHitboxObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDCameraTweenUpObjects1Objects = Hashtable.newFrom({"CameraTweenUp": gdjs.Dry_32OutCode.GDCameraTweenUpObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.Dry_32OutCode.GDHitboxObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDCameraTweenDownObjects1Objects = Hashtable.newFrom({"CameraTweenDown": gdjs.Dry_32OutCode.GDCameraTweenDownObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.Dry_32OutCode.GDHitboxObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDBigSpikeObjects1Objects = Hashtable.newFrom({"BigSpike": gdjs.Dry_32OutCode.GDBigSpikeObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.Dry_32OutCode.GDHitboxObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDSmallSpikeObjects1Objects = Hashtable.newFrom({"SmallSpike": gdjs.Dry_32OutCode.GDSmallSpikeObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.Dry_32OutCode.GDHitboxObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDGround1Objects1Objects = Hashtable.newFrom({"Ground1": gdjs.Dry_32OutCode.GDGround1Objects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.Dry_32OutCode.GDHitboxObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.Dry_32OutCode.GDBlockObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.Dry_32OutCode.GDHitboxObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.Dry_32OutCode.GDBlockObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.Dry_32OutCode.GDHitboxObjects1});gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDEndPortalObjects1Objects = Hashtable.newFrom({"EndPortal": gdjs.Dry_32OutCode.GDEndPortalObjects1});gdjs.Dry_32OutCode.eventsList1 = function(runtimeScene) {

{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.Dry_32OutCode.GDCameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraTweenDown"), gdjs.Dry_32OutCode.GDCameraTweenDownObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraTweenUp"), gdjs.Dry_32OutCode.GDCameraTweenUpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground1"), gdjs.Dry_32OutCode.GDGround1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ground2"), gdjs.Dry_32OutCode.GDGround2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);
{for(var i = 0, len = gdjs.Dry_32OutCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDCameraObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDHitboxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDGround1Objects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDGround1Objects1[i].setZOrder(1000);
}
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDGround2Objects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDGround2Objects1[i].setZOrder(1000);
}
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDCameraTweenUpObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDCameraTweenUpObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDCameraTweenDownObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDCameraTweenDownObjects1[i].hide();
}
}
{ //Subevents
gdjs.Dry_32OutCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.Dry_32OutCode.GDCameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);
{for(var i = 0, len = gdjs.Dry_32OutCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDHitboxObjects1[i].setX(gdjs.Dry_32OutCode.GDHitboxObjects1[i].getX() + (7));
}
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDCameraObjects1[i].setX(gdjs.Dry_32OutCode.GDCameraObjects1[i].getX() + (7));
}
}}

}


{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.Dry_32OutCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.Dry_32OutCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.Dry_32OutCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.Dry_32OutCode.GDIcon4DefObjects1);
{for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].setPosition((( gdjs.Dry_32OutCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects1[0].getPointX("")),(( gdjs.Dry_32OutCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects1[0].getPointY("")));
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].setPosition((( gdjs.Dry_32OutCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects1[0].getPointX("")),(( gdjs.Dry_32OutCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects1[0].getPointY("")));
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].setPosition((( gdjs.Dry_32OutCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects1[0].getPointX("")),(( gdjs.Dry_32OutCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects1[0].getPointY("")));
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].setPosition((( gdjs.Dry_32OutCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects1[0].getPointX("")),(( gdjs.Dry_32OutCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.Dry_32OutCode.GDHitboxObjects1[0].getPointY("")));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.Dry_32OutCode.GDCameraObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Dry_32OutCode.GDCameraObjects1.length !== 0 ? gdjs.Dry_32OutCode.GDCameraObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CameraTweenUp"), gdjs.Dry_32OutCode.GDCameraTweenUpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);

gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition1IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects, gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDCameraTweenUpObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Dry_32OutCode.condition0IsTrue_0.val ) {
{
{gdjs.Dry_32OutCode.conditionTrue_1 = gdjs.Dry_32OutCode.condition1IsTrue_0;
gdjs.Dry_32OutCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10285180);
}
}}
if (gdjs.Dry_32OutCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.Dry_32OutCode.GDCameraObjects1);
{for(var i = 0, len = gdjs.Dry_32OutCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDCameraObjects1[i].getBehavior("Tween").addObjectPositionYTween("Camera Tween Up", -(30), "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CameraTweenDown"), gdjs.Dry_32OutCode.GDCameraTweenDownObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);

gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition1IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects, gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDCameraTweenDownObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Dry_32OutCode.condition0IsTrue_0.val ) {
{
{gdjs.Dry_32OutCode.conditionTrue_1 = gdjs.Dry_32OutCode.condition1IsTrue_0;
gdjs.Dry_32OutCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10286460);
}
}}
if (gdjs.Dry_32OutCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.Dry_32OutCode.GDCameraObjects1);
{for(var i = 0, len = gdjs.Dry_32OutCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDCameraObjects1[i].getBehavior("Tween").addObjectPositionYTween("Camera Tween Down", 240, "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigSpike"), gdjs.Dry_32OutCode.GDBigSpikeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);

gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects, gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDBigSpikeObjects1Objects, false, runtimeScene, false);
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Dry_32OutCode.GDHitboxObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.Dry_32OutCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.Dry_32OutCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.Dry_32OutCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.Dry_32OutCode.GDIcon4DefObjects1);
{for(var i = 0, len = gdjs.Dry_32OutCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDHitboxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dry Out", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("SmallSpike"), gdjs.Dry_32OutCode.GDSmallSpikeObjects1);

gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects, gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDSmallSpikeObjects1Objects, false, runtimeScene, false);
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Dry_32OutCode.GDHitboxObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.Dry_32OutCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.Dry_32OutCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.Dry_32OutCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.Dry_32OutCode.GDIcon4DefObjects1);
{for(var i = 0, len = gdjs.Dry_32OutCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDHitboxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dry Out", true);
}}

}


{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition1IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
}if ( gdjs.Dry_32OutCode.condition0IsTrue_0.val ) {
{
{gdjs.Dry_32OutCode.conditionTrue_1 = gdjs.Dry_32OutCode.condition1IsTrue_0;
gdjs.Dry_32OutCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10289652);
}
}}
if (gdjs.Dry_32OutCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Dry Out Pause Menu");
}}

}


{


{
}

}


{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);
{for(var i = 0, len = gdjs.Dry_32OutCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Dry_32OutCode.GDBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground1"), gdjs.Dry_32OutCode.GDGround1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);

gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition1IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects, gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDGround1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Dry_32OutCode.condition0IsTrue_0.val ) {
{
gdjs.Dry_32OutCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects, gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDBlockObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.Dry_32OutCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Dry_32OutCode.GDHitboxObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.Dry_32OutCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.Dry_32OutCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.Dry_32OutCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.Dry_32OutCode.GDIcon4DefObjects1);
{for(var i = 0, len = gdjs.Dry_32OutCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDHitboxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dry Out", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Dry_32OutCode.GDBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);

gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition1IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects, gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDBlockObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Dry_32OutCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDHitboxObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dry_32OutCode.condition1IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDHitboxObjects1[k] = gdjs.Dry_32OutCode.GDHitboxObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDHitboxObjects1.length = k;}}
if (gdjs.Dry_32OutCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Dry_32OutCode.GDHitboxObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.Dry_32OutCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.Dry_32OutCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.Dry_32OutCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.Dry_32OutCode.GDIcon4DefObjects1);
{for(var i = 0, len = gdjs.Dry_32OutCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDHitboxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dry Out", true);
}}

}


{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "915676_Dry-Out-202.mp3", 1, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.Dry_32OutCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.Dry_32OutCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.Dry_32OutCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.Dry_32OutCode.GDIcon4DefObjects1);

gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition1IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDHitboxObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDHitboxObjects1[k] = gdjs.Dry_32OutCode.GDHitboxObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDHitboxObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition0IsTrue_0.val ) {
{
gdjs.Dry_32OutCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Dry_32OutCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getAngle() == 0 ) {
        gdjs.Dry_32OutCode.condition2IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon1DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getAngle() == 0 ) {
        gdjs.Dry_32OutCode.condition2IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon2DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getAngle() == 0 ) {
        gdjs.Dry_32OutCode.condition2IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon3DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getAngle() == 0 ) {
        gdjs.Dry_32OutCode.condition2IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon4DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon4DefObjects1.length = k;}}
}
if (gdjs.Dry_32OutCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Dry_32OutCode.GDIcon1DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon2DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon3DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon4DefObjects1 */
{for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 1", 90, "linear", 200, false);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 1", 90, "linear", 200, false);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 1", 90, "linear", 200, false);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 1", 90, "linear", 200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.Dry_32OutCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.Dry_32OutCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.Dry_32OutCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.Dry_32OutCode.GDIcon4DefObjects1);

gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition1IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition2IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition3IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 1") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon1DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 1") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon2DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 1") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon3DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 1") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon4DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon4DefObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDHitboxObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Dry_32OutCode.condition1IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDHitboxObjects1[k] = gdjs.Dry_32OutCode.GDHitboxObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDHitboxObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition1IsTrue_0.val ) {
{
gdjs.Dry_32OutCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Dry_32OutCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getAngle() == 90 ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon1DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getAngle() == 90 ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon2DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getAngle() == 90 ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon3DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getAngle() == 90 ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon4DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon4DefObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition3IsTrue_0.val ) {
{
{gdjs.Dry_32OutCode.conditionTrue_1 = gdjs.Dry_32OutCode.condition4IsTrue_0;
gdjs.Dry_32OutCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10296532);
}
}}
}
}
}
if (gdjs.Dry_32OutCode.condition4IsTrue_0.val) {
/* Reuse gdjs.Dry_32OutCode.GDIcon1DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon2DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon3DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon4DefObjects1 */
{for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 2", 180, "linear", 200, false);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 2", 180, "linear", 200, false);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 2", 180, "linear", 200, false);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 2", 180, "linear", 200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.Dry_32OutCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.Dry_32OutCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.Dry_32OutCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.Dry_32OutCode.GDIcon4DefObjects1);

gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition1IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition2IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition3IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 2") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon1DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 2") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon2DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 2") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon3DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 2") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon4DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon4DefObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDHitboxObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Dry_32OutCode.condition1IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDHitboxObjects1[k] = gdjs.Dry_32OutCode.GDHitboxObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDHitboxObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition1IsTrue_0.val ) {
{
gdjs.Dry_32OutCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Dry_32OutCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getAngle() == 180 ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon1DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getAngle() == 180 ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon2DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getAngle() == 180 ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon3DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getAngle() == 180 ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon4DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon4DefObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition3IsTrue_0.val ) {
{
{gdjs.Dry_32OutCode.conditionTrue_1 = gdjs.Dry_32OutCode.condition4IsTrue_0;
gdjs.Dry_32OutCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10298212);
}
}}
}
}
}
if (gdjs.Dry_32OutCode.condition4IsTrue_0.val) {
/* Reuse gdjs.Dry_32OutCode.GDIcon1DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon2DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon3DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon4DefObjects1 */
{for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 3", 270, "linear", 200, false);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 3", 270, "linear", 200, false);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 3", 270, "linear", 200, false);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 3", 270, "linear", 200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.Dry_32OutCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.Dry_32OutCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.Dry_32OutCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.Dry_32OutCode.GDIcon4DefObjects1);

gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition1IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition2IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition3IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 3") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon1DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 3") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon2DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 3") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon3DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 3") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon4DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon4DefObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDHitboxObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Dry_32OutCode.condition1IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDHitboxObjects1[k] = gdjs.Dry_32OutCode.GDHitboxObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDHitboxObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition1IsTrue_0.val ) {
{
gdjs.Dry_32OutCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Dry_32OutCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getAngle() == 270 ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon1DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getAngle() == 270 ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon2DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getAngle() == 270 ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon3DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getAngle() == 270 ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon4DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon4DefObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition3IsTrue_0.val ) {
{
{gdjs.Dry_32OutCode.conditionTrue_1 = gdjs.Dry_32OutCode.condition4IsTrue_0;
gdjs.Dry_32OutCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10300020);
}
}}
}
}
}
if (gdjs.Dry_32OutCode.condition4IsTrue_0.val) {
/* Reuse gdjs.Dry_32OutCode.GDIcon1DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon2DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon3DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon4DefObjects1 */
{for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 4", 360, "linear", 200, false);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 4", 360, "linear", 200, false);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 4", 360, "linear", 200, false);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 4", 360, "linear", 200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.Dry_32OutCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.Dry_32OutCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.Dry_32OutCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.Dry_32OutCode.GDIcon4DefObjects1);

gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition1IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition2IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition3IsTrue_0.val = false;
gdjs.Dry_32OutCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 4") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon1DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 4") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon2DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 4") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon3DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 4") ) {
        gdjs.Dry_32OutCode.condition0IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon4DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon4DefObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDHitboxObjects1.length;i<l;++i) {
    if ( gdjs.Dry_32OutCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Dry_32OutCode.condition1IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDHitboxObjects1[k] = gdjs.Dry_32OutCode.GDHitboxObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDHitboxObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( !(gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getAngle() == 90) ) {
        gdjs.Dry_32OutCode.condition2IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon1DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( !(gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getAngle() == 90) ) {
        gdjs.Dry_32OutCode.condition2IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon2DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( !(gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getAngle() == 90) ) {
        gdjs.Dry_32OutCode.condition2IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon3DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( !(gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getAngle() == 90) ) {
        gdjs.Dry_32OutCode.condition2IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon4DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon4DefObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( !(gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getAngle() == 180) ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon1DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( !(gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getAngle() == 180) ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon2DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( !(gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getAngle() == 180) ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon3DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( !(gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getAngle() == 180) ) {
        gdjs.Dry_32OutCode.condition3IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon4DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon4DefObjects1.length = k;}if ( gdjs.Dry_32OutCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( !(gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].getAngle() == 270) ) {
        gdjs.Dry_32OutCode.condition4IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon1DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( !(gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].getAngle() == 270) ) {
        gdjs.Dry_32OutCode.condition4IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon2DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( !(gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].getAngle() == 270) ) {
        gdjs.Dry_32OutCode.condition4IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon3DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( !(gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].getAngle() == 270) ) {
        gdjs.Dry_32OutCode.condition4IsTrue_0.val = true;
        gdjs.Dry_32OutCode.GDIcon4DefObjects1[k] = gdjs.Dry_32OutCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.Dry_32OutCode.GDIcon4DefObjects1.length = k;}}
}
}
}
if (gdjs.Dry_32OutCode.condition4IsTrue_0.val) {
/* Reuse gdjs.Dry_32OutCode.GDIcon1DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon2DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon3DefObjects1 */
/* Reuse gdjs.Dry_32OutCode.GDIcon4DefObjects1 */
{for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon1DefObjects1[i].setAngle(0);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon2DefObjects1[i].setAngle(0);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon3DefObjects1[i].setAngle(0);
}
for(var i = 0, len = gdjs.Dry_32OutCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDIcon4DefObjects1[i].setAngle(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EndPortal"), gdjs.Dry_32OutCode.GDEndPortalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Dry_32OutCode.GDHitboxObjects1);

gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDHitboxObjects1Objects, gdjs.Dry_32OutCode.mapOfGDgdjs_46Dry_9532OutCode_46GDEndPortalObjects1Objects, false, runtimeScene, false);
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Selection", true);
}{runtimeScene.getGame().getVariables().get("Dry Out Completion").setNumber(1);
}}

}


{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Color Change");
}}

}


{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "Color Change");
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ground1"), gdjs.Dry_32OutCode.GDGround1Objects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "80;25;218");
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDGround1Objects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDGround1Objects1[i].setColor("80;25;218");
}
}}

}


{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 20, "Color Change");
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ground1"), gdjs.Dry_32OutCode.GDGround1Objects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "210;25;218");
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDGround1Objects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDGround1Objects1[i].setColor("210;25;218");
}
}}

}


{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 30, "Color Change");
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ground1"), gdjs.Dry_32OutCode.GDGround1Objects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "25;204;218");
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDGround1Objects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDGround1Objects1[i].setColor("25;204;218");
}
}}

}


{


gdjs.Dry_32OutCode.condition0IsTrue_0.val = false;
{
gdjs.Dry_32OutCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 40, "Color Change");
}if (gdjs.Dry_32OutCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ground1"), gdjs.Dry_32OutCode.GDGround1Objects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "36;192;120");
}{for(var i = 0, len = gdjs.Dry_32OutCode.GDGround1Objects1.length ;i < len;++i) {
    gdjs.Dry_32OutCode.GDGround1Objects1[i].setColor("36;192;120");
}
}}

}


{


{
}

}


};

gdjs.Dry_32OutCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dry_32OutCode.GDIcon1DefObjects1.length = 0;
gdjs.Dry_32OutCode.GDIcon1DefObjects2.length = 0;
gdjs.Dry_32OutCode.GDIcon1DefObjects3.length = 0;
gdjs.Dry_32OutCode.GDIcon2DefObjects1.length = 0;
gdjs.Dry_32OutCode.GDIcon2DefObjects2.length = 0;
gdjs.Dry_32OutCode.GDIcon2DefObjects3.length = 0;
gdjs.Dry_32OutCode.GDIcon3DefObjects1.length = 0;
gdjs.Dry_32OutCode.GDIcon3DefObjects2.length = 0;
gdjs.Dry_32OutCode.GDIcon3DefObjects3.length = 0;
gdjs.Dry_32OutCode.GDIcon4DefObjects1.length = 0;
gdjs.Dry_32OutCode.GDIcon4DefObjects2.length = 0;
gdjs.Dry_32OutCode.GDIcon4DefObjects3.length = 0;
gdjs.Dry_32OutCode.GDHitboxObjects1.length = 0;
gdjs.Dry_32OutCode.GDHitboxObjects2.length = 0;
gdjs.Dry_32OutCode.GDHitboxObjects3.length = 0;
gdjs.Dry_32OutCode.GDGround1Objects1.length = 0;
gdjs.Dry_32OutCode.GDGround1Objects2.length = 0;
gdjs.Dry_32OutCode.GDGround1Objects3.length = 0;
gdjs.Dry_32OutCode.GDGround2Objects1.length = 0;
gdjs.Dry_32OutCode.GDGround2Objects2.length = 0;
gdjs.Dry_32OutCode.GDGround2Objects3.length = 0;
gdjs.Dry_32OutCode.GDCameraObjects1.length = 0;
gdjs.Dry_32OutCode.GDCameraObjects2.length = 0;
gdjs.Dry_32OutCode.GDCameraObjects3.length = 0;
gdjs.Dry_32OutCode.GDBlockObjects1.length = 0;
gdjs.Dry_32OutCode.GDBlockObjects2.length = 0;
gdjs.Dry_32OutCode.GDBlockObjects3.length = 0;
gdjs.Dry_32OutCode.GDBigSpikeObjects1.length = 0;
gdjs.Dry_32OutCode.GDBigSpikeObjects2.length = 0;
gdjs.Dry_32OutCode.GDBigSpikeObjects3.length = 0;
gdjs.Dry_32OutCode.GDSmallSpikeObjects1.length = 0;
gdjs.Dry_32OutCode.GDSmallSpikeObjects2.length = 0;
gdjs.Dry_32OutCode.GDSmallSpikeObjects3.length = 0;
gdjs.Dry_32OutCode.GDCameraTweenUpObjects1.length = 0;
gdjs.Dry_32OutCode.GDCameraTweenUpObjects2.length = 0;
gdjs.Dry_32OutCode.GDCameraTweenUpObjects3.length = 0;
gdjs.Dry_32OutCode.GDCameraTweenDownObjects1.length = 0;
gdjs.Dry_32OutCode.GDCameraTweenDownObjects2.length = 0;
gdjs.Dry_32OutCode.GDCameraTweenDownObjects3.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuBGObjects1.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuBGObjects2.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuBGObjects3.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuObjects1.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuObjects2.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuObjects3.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuText1Objects1.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuText1Objects2.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuText1Objects3.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuText2Objects1.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuText2Objects2.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuText2Objects3.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuText3Objects1.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuText3Objects2.length = 0;
gdjs.Dry_32OutCode.GDPauseMenuText3Objects3.length = 0;
gdjs.Dry_32OutCode.GDEndPortalObjects1.length = 0;
gdjs.Dry_32OutCode.GDEndPortalObjects2.length = 0;
gdjs.Dry_32OutCode.GDEndPortalObjects3.length = 0;

gdjs.Dry_32OutCode.eventsList1(runtimeScene);
return;

}

gdjs['Dry_32OutCode'] = gdjs.Dry_32OutCode;
