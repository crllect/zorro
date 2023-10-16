gdjs.JumperCode = {};
gdjs.JumperCode.GDIcon1DefObjects1= [];
gdjs.JumperCode.GDIcon1DefObjects2= [];
gdjs.JumperCode.GDIcon1DefObjects3= [];
gdjs.JumperCode.GDIcon2DefObjects1= [];
gdjs.JumperCode.GDIcon2DefObjects2= [];
gdjs.JumperCode.GDIcon2DefObjects3= [];
gdjs.JumperCode.GDIcon3DefObjects1= [];
gdjs.JumperCode.GDIcon3DefObjects2= [];
gdjs.JumperCode.GDIcon3DefObjects3= [];
gdjs.JumperCode.GDIcon4DefObjects1= [];
gdjs.JumperCode.GDIcon4DefObjects2= [];
gdjs.JumperCode.GDIcon4DefObjects3= [];
gdjs.JumperCode.GDHitboxObjects1= [];
gdjs.JumperCode.GDHitboxObjects2= [];
gdjs.JumperCode.GDHitboxObjects3= [];
gdjs.JumperCode.GDGround1Objects1= [];
gdjs.JumperCode.GDGround1Objects2= [];
gdjs.JumperCode.GDGround1Objects3= [];
gdjs.JumperCode.GDGround2Objects1= [];
gdjs.JumperCode.GDGround2Objects2= [];
gdjs.JumperCode.GDGround2Objects3= [];
gdjs.JumperCode.GDCameraObjects1= [];
gdjs.JumperCode.GDCameraObjects2= [];
gdjs.JumperCode.GDCameraObjects3= [];
gdjs.JumperCode.GDBlockObjects1= [];
gdjs.JumperCode.GDBlockObjects2= [];
gdjs.JumperCode.GDBlockObjects3= [];
gdjs.JumperCode.GDBigSpikeObjects1= [];
gdjs.JumperCode.GDBigSpikeObjects2= [];
gdjs.JumperCode.GDBigSpikeObjects3= [];
gdjs.JumperCode.GDSmallSpikeObjects1= [];
gdjs.JumperCode.GDSmallSpikeObjects2= [];
gdjs.JumperCode.GDSmallSpikeObjects3= [];
gdjs.JumperCode.GDCameraTweenUpObjects1= [];
gdjs.JumperCode.GDCameraTweenUpObjects2= [];
gdjs.JumperCode.GDCameraTweenUpObjects3= [];
gdjs.JumperCode.GDCameraTweenDownObjects1= [];
gdjs.JumperCode.GDCameraTweenDownObjects2= [];
gdjs.JumperCode.GDCameraTweenDownObjects3= [];
gdjs.JumperCode.GDPauseMenuBGObjects1= [];
gdjs.JumperCode.GDPauseMenuBGObjects2= [];
gdjs.JumperCode.GDPauseMenuBGObjects3= [];
gdjs.JumperCode.GDPauseMenuObjects1= [];
gdjs.JumperCode.GDPauseMenuObjects2= [];
gdjs.JumperCode.GDPauseMenuObjects3= [];
gdjs.JumperCode.GDPauseMenuText1Objects1= [];
gdjs.JumperCode.GDPauseMenuText1Objects2= [];
gdjs.JumperCode.GDPauseMenuText1Objects3= [];
gdjs.JumperCode.GDPauseMenuText2Objects1= [];
gdjs.JumperCode.GDPauseMenuText2Objects2= [];
gdjs.JumperCode.GDPauseMenuText2Objects3= [];
gdjs.JumperCode.GDPauseMenuText3Objects1= [];
gdjs.JumperCode.GDPauseMenuText3Objects2= [];
gdjs.JumperCode.GDPauseMenuText3Objects3= [];
gdjs.JumperCode.GDEndPortalObjects1= [];
gdjs.JumperCode.GDEndPortalObjects2= [];
gdjs.JumperCode.GDEndPortalObjects3= [];
gdjs.JumperCode.GDOrbObjects1= [];
gdjs.JumperCode.GDOrbObjects2= [];
gdjs.JumperCode.GDOrbObjects3= [];

gdjs.JumperCode.conditionTrue_0 = {val:false};
gdjs.JumperCode.condition0IsTrue_0 = {val:false};
gdjs.JumperCode.condition1IsTrue_0 = {val:false};
gdjs.JumperCode.condition2IsTrue_0 = {val:false};
gdjs.JumperCode.condition3IsTrue_0 = {val:false};
gdjs.JumperCode.condition4IsTrue_0 = {val:false};
gdjs.JumperCode.condition5IsTrue_0 = {val:false};
gdjs.JumperCode.conditionTrue_1 = {val:false};
gdjs.JumperCode.condition0IsTrue_1 = {val:false};
gdjs.JumperCode.condition1IsTrue_1 = {val:false};
gdjs.JumperCode.condition2IsTrue_1 = {val:false};
gdjs.JumperCode.condition3IsTrue_1 = {val:false};
gdjs.JumperCode.condition4IsTrue_1 = {val:false};
gdjs.JumperCode.condition5IsTrue_1 = {val:false};


gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDIcon1DefObjects2Objects = Hashtable.newFrom({"Icon1Def": gdjs.JumperCode.GDIcon1DefObjects2});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDIcon2DefObjects2Objects = Hashtable.newFrom({"Icon2Def": gdjs.JumperCode.GDIcon2DefObjects2});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDIcon3DefObjects2Objects = Hashtable.newFrom({"Icon3Def": gdjs.JumperCode.GDIcon3DefObjects2});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDIcon4DefObjects2Objects = Hashtable.newFrom({"Icon4Def": gdjs.JumperCode.GDIcon4DefObjects2});gdjs.JumperCode.eventsList0 = function(runtimeScene) {

{


gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Icon")) == 1;
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.JumperCode.GDHitboxObjects1, gdjs.JumperCode.GDHitboxObjects2);

gdjs.JumperCode.GDIcon1DefObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDIcon1DefObjects2Objects, (( gdjs.JumperCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects2[0].getPointX("")), (( gdjs.JumperCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects2[0].getPointY("")), "");
}}

}


{


gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Icon")) == 2;
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.JumperCode.GDHitboxObjects1, gdjs.JumperCode.GDHitboxObjects2);

gdjs.JumperCode.GDIcon2DefObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDIcon2DefObjects2Objects, (( gdjs.JumperCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects2[0].getPointX("")), (( gdjs.JumperCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects2[0].getPointY("")), "");
}}

}


{


gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Icon")) == 3;
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.JumperCode.GDHitboxObjects1, gdjs.JumperCode.GDHitboxObjects2);

gdjs.JumperCode.GDIcon3DefObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDIcon3DefObjects2Objects, (( gdjs.JumperCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects2[0].getPointX("")), (( gdjs.JumperCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects2[0].getPointY("")), "");
}}

}


{


gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Icon")) == 4;
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.JumperCode.GDHitboxObjects1, gdjs.JumperCode.GDHitboxObjects2);

gdjs.JumperCode.GDIcon4DefObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDIcon4DefObjects2Objects, (( gdjs.JumperCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects2[0].getPointX("")), (( gdjs.JumperCode.GDHitboxObjects2.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects2[0].getPointY("")), "");
}}

}


{


{
}

}


};gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.JumperCode.GDHitboxObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDCameraTweenUpObjects1Objects = Hashtable.newFrom({"CameraTweenUp": gdjs.JumperCode.GDCameraTweenUpObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.JumperCode.GDHitboxObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDCameraTweenDownObjects1Objects = Hashtable.newFrom({"CameraTweenDown": gdjs.JumperCode.GDCameraTweenDownObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.JumperCode.GDHitboxObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDBigSpikeObjects1Objects = Hashtable.newFrom({"BigSpike": gdjs.JumperCode.GDBigSpikeObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.JumperCode.GDHitboxObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDSmallSpikeObjects1Objects = Hashtable.newFrom({"SmallSpike": gdjs.JumperCode.GDSmallSpikeObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.JumperCode.GDHitboxObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDGround1Objects1Objects = Hashtable.newFrom({"Ground1": gdjs.JumperCode.GDGround1Objects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.JumperCode.GDHitboxObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.JumperCode.GDBlockObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.JumperCode.GDHitboxObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.JumperCode.GDBlockObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.JumperCode.GDHitboxObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDOrbObjects1Objects = Hashtable.newFrom({"Orb": gdjs.JumperCode.GDOrbObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.JumperCode.GDHitboxObjects1});gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDEndPortalObjects1Objects = Hashtable.newFrom({"EndPortal": gdjs.JumperCode.GDEndPortalObjects1});gdjs.JumperCode.eventsList1 = function(runtimeScene) {

{


gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.JumperCode.GDCameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraTweenDown"), gdjs.JumperCode.GDCameraTweenDownObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraTweenUp"), gdjs.JumperCode.GDCameraTweenUpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground1"), gdjs.JumperCode.GDGround1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ground2"), gdjs.JumperCode.GDGround2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);
{for(var i = 0, len = gdjs.JumperCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDCameraObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JumperCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDHitboxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JumperCode.GDGround1Objects1.length ;i < len;++i) {
    gdjs.JumperCode.GDGround1Objects1[i].setZOrder(1000);
}
}{for(var i = 0, len = gdjs.JumperCode.GDGround2Objects1.length ;i < len;++i) {
    gdjs.JumperCode.GDGround2Objects1[i].setZOrder(1000);
}
}{for(var i = 0, len = gdjs.JumperCode.GDCameraTweenUpObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDCameraTweenUpObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JumperCode.GDCameraTweenDownObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDCameraTweenDownObjects1[i].hide();
}
}
{ //Subevents
gdjs.JumperCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.JumperCode.GDCameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);
{for(var i = 0, len = gdjs.JumperCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDHitboxObjects1[i].setX(gdjs.JumperCode.GDHitboxObjects1[i].getX() + (7));
}
}{for(var i = 0, len = gdjs.JumperCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDCameraObjects1[i].setX(gdjs.JumperCode.GDCameraObjects1[i].getX() + (7));
}
}}

}


{


gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.JumperCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.JumperCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.JumperCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.JumperCode.GDIcon4DefObjects1);
{for(var i = 0, len = gdjs.JumperCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon1DefObjects1[i].setPosition((( gdjs.JumperCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects1[0].getPointX("")),(( gdjs.JumperCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects1[0].getPointY("")));
}
for(var i = 0, len = gdjs.JumperCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon2DefObjects1[i].setPosition((( gdjs.JumperCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects1[0].getPointX("")),(( gdjs.JumperCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects1[0].getPointY("")));
}
for(var i = 0, len = gdjs.JumperCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon3DefObjects1[i].setPosition((( gdjs.JumperCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects1[0].getPointX("")),(( gdjs.JumperCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects1[0].getPointY("")));
}
for(var i = 0, len = gdjs.JumperCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon4DefObjects1[i].setPosition((( gdjs.JumperCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects1[0].getPointX("")),(( gdjs.JumperCode.GDHitboxObjects1.length === 0 ) ? 0 :gdjs.JumperCode.GDHitboxObjects1[0].getPointY("")));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.JumperCode.GDCameraObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.JumperCode.GDCameraObjects1.length !== 0 ? gdjs.JumperCode.GDCameraObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CameraTweenUp"), gdjs.JumperCode.GDCameraTweenUpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);

gdjs.JumperCode.condition0IsTrue_0.val = false;
gdjs.JumperCode.condition1IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects, gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDCameraTweenUpObjects1Objects, false, runtimeScene, false);
}if ( gdjs.JumperCode.condition0IsTrue_0.val ) {
{
{gdjs.JumperCode.conditionTrue_1 = gdjs.JumperCode.condition1IsTrue_0;
gdjs.JumperCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10459396);
}
}}
if (gdjs.JumperCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.JumperCode.GDCameraObjects1);
{for(var i = 0, len = gdjs.JumperCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDCameraObjects1[i].getBehavior("Tween").addObjectPositionYTween("Camera Tween Up", -(30), "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CameraTweenDown"), gdjs.JumperCode.GDCameraTweenDownObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);

gdjs.JumperCode.condition0IsTrue_0.val = false;
gdjs.JumperCode.condition1IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects, gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDCameraTweenDownObjects1Objects, false, runtimeScene, false);
}if ( gdjs.JumperCode.condition0IsTrue_0.val ) {
{
{gdjs.JumperCode.conditionTrue_1 = gdjs.JumperCode.condition1IsTrue_0;
gdjs.JumperCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10460676);
}
}}
if (gdjs.JumperCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.JumperCode.GDCameraObjects1);
{for(var i = 0, len = gdjs.JumperCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDCameraObjects1[i].getBehavior("Tween").addObjectPositionYTween("Camera Tween Down", 240, "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigSpike"), gdjs.JumperCode.GDBigSpikeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);

gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects, gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDBigSpikeObjects1Objects, false, runtimeScene, false);
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
/* Reuse gdjs.JumperCode.GDHitboxObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.JumperCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.JumperCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.JumperCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.JumperCode.GDIcon4DefObjects1);
{for(var i = 0, len = gdjs.JumperCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDHitboxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.JumperCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon1DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon2DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon3DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon4DefObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jumper", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("SmallSpike"), gdjs.JumperCode.GDSmallSpikeObjects1);

gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects, gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDSmallSpikeObjects1Objects, false, runtimeScene, false);
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
/* Reuse gdjs.JumperCode.GDHitboxObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.JumperCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.JumperCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.JumperCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.JumperCode.GDIcon4DefObjects1);
{for(var i = 0, len = gdjs.JumperCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDHitboxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.JumperCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon1DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon2DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon3DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon4DefObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jumper", true);
}}

}


{


gdjs.JumperCode.condition0IsTrue_0.val = false;
gdjs.JumperCode.condition1IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
}if ( gdjs.JumperCode.condition0IsTrue_0.val ) {
{
{gdjs.JumperCode.conditionTrue_1 = gdjs.JumperCode.condition1IsTrue_0;
gdjs.JumperCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10463868);
}
}}
if (gdjs.JumperCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Jumper Pause Menu");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Orb"), gdjs.JumperCode.GDOrbObjects1);
{for(var i = 0, len = gdjs.JumperCode.GDOrbObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDOrbObjects1[i].rotate(30, runtimeScene);
}
}}

}


{


gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);
{for(var i = 0, len = gdjs.JumperCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.JumperCode.GDBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground1"), gdjs.JumperCode.GDGround1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);

gdjs.JumperCode.condition0IsTrue_0.val = false;
gdjs.JumperCode.condition1IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects, gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDGround1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.JumperCode.condition0IsTrue_0.val ) {
{
gdjs.JumperCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects, gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDBlockObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.JumperCode.condition1IsTrue_0.val) {
/* Reuse gdjs.JumperCode.GDHitboxObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.JumperCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.JumperCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.JumperCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.JumperCode.GDIcon4DefObjects1);
{for(var i = 0, len = gdjs.JumperCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDHitboxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.JumperCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon1DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon2DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon3DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon4DefObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jumper", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.JumperCode.GDBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);

gdjs.JumperCode.condition0IsTrue_0.val = false;
gdjs.JumperCode.condition1IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects, gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDBlockObjects1Objects, false, runtimeScene, false);
}if ( gdjs.JumperCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDHitboxObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.JumperCode.condition1IsTrue_0.val = true;
        gdjs.JumperCode.GDHitboxObjects1[k] = gdjs.JumperCode.GDHitboxObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDHitboxObjects1.length = k;}}
if (gdjs.JumperCode.condition1IsTrue_0.val) {
/* Reuse gdjs.JumperCode.GDHitboxObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.JumperCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.JumperCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.JumperCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.JumperCode.GDIcon4DefObjects1);
{for(var i = 0, len = gdjs.JumperCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDHitboxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.JumperCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon1DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon2DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon3DefObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon4DefObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jumper", true);
}}

}


{


gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "517506_-Jumper-2013-.mp3", 3, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.JumperCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.JumperCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.JumperCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.JumperCode.GDIcon4DefObjects1);

gdjs.JumperCode.condition0IsTrue_0.val = false;
gdjs.JumperCode.condition1IsTrue_0.val = false;
gdjs.JumperCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDHitboxObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDHitboxObjects1[k] = gdjs.JumperCode.GDHitboxObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDHitboxObjects1.length = k;}if ( gdjs.JumperCode.condition0IsTrue_0.val ) {
{
gdjs.JumperCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.JumperCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon1DefObjects1[i].getAngle() == 0 ) {
        gdjs.JumperCode.condition2IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon1DefObjects1[k] = gdjs.JumperCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon2DefObjects1[i].getAngle() == 0 ) {
        gdjs.JumperCode.condition2IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon2DefObjects1[k] = gdjs.JumperCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon3DefObjects1[i].getAngle() == 0 ) {
        gdjs.JumperCode.condition2IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon3DefObjects1[k] = gdjs.JumperCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon4DefObjects1[i].getAngle() == 0 ) {
        gdjs.JumperCode.condition2IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon4DefObjects1[k] = gdjs.JumperCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon4DefObjects1.length = k;}}
}
if (gdjs.JumperCode.condition2IsTrue_0.val) {
/* Reuse gdjs.JumperCode.GDIcon1DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon2DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon3DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon4DefObjects1 */
{for(var i = 0, len = gdjs.JumperCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon1DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 1", 90, "linear", 200, false);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon2DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 1", 90, "linear", 200, false);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon3DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 1", 90, "linear", 200, false);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon4DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 1", 90, "linear", 200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.JumperCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.JumperCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.JumperCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.JumperCode.GDIcon4DefObjects1);

gdjs.JumperCode.condition0IsTrue_0.val = false;
gdjs.JumperCode.condition1IsTrue_0.val = false;
gdjs.JumperCode.condition2IsTrue_0.val = false;
gdjs.JumperCode.condition3IsTrue_0.val = false;
gdjs.JumperCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon1DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 1") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon1DefObjects1[k] = gdjs.JumperCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon2DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 1") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon2DefObjects1[k] = gdjs.JumperCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon3DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 1") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon3DefObjects1[k] = gdjs.JumperCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon4DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 1") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon4DefObjects1[k] = gdjs.JumperCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon4DefObjects1.length = k;}if ( gdjs.JumperCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDHitboxObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.JumperCode.condition1IsTrue_0.val = true;
        gdjs.JumperCode.GDHitboxObjects1[k] = gdjs.JumperCode.GDHitboxObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDHitboxObjects1.length = k;}if ( gdjs.JumperCode.condition1IsTrue_0.val ) {
{
gdjs.JumperCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.JumperCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon1DefObjects1[i].getAngle() == 90 ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon1DefObjects1[k] = gdjs.JumperCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon2DefObjects1[i].getAngle() == 90 ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon2DefObjects1[k] = gdjs.JumperCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon3DefObjects1[i].getAngle() == 90 ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon3DefObjects1[k] = gdjs.JumperCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon4DefObjects1[i].getAngle() == 90 ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon4DefObjects1[k] = gdjs.JumperCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon4DefObjects1.length = k;}if ( gdjs.JumperCode.condition3IsTrue_0.val ) {
{
{gdjs.JumperCode.conditionTrue_1 = gdjs.JumperCode.condition4IsTrue_0;
gdjs.JumperCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10470908);
}
}}
}
}
}
if (gdjs.JumperCode.condition4IsTrue_0.val) {
/* Reuse gdjs.JumperCode.GDIcon1DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon2DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon3DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon4DefObjects1 */
{for(var i = 0, len = gdjs.JumperCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon1DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 2", 180, "linear", 200, false);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon2DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 2", 180, "linear", 200, false);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon3DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 2", 180, "linear", 200, false);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon4DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 2", 180, "linear", 200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.JumperCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.JumperCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.JumperCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.JumperCode.GDIcon4DefObjects1);

gdjs.JumperCode.condition0IsTrue_0.val = false;
gdjs.JumperCode.condition1IsTrue_0.val = false;
gdjs.JumperCode.condition2IsTrue_0.val = false;
gdjs.JumperCode.condition3IsTrue_0.val = false;
gdjs.JumperCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon1DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 2") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon1DefObjects1[k] = gdjs.JumperCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon2DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 2") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon2DefObjects1[k] = gdjs.JumperCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon3DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 2") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon3DefObjects1[k] = gdjs.JumperCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon4DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 2") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon4DefObjects1[k] = gdjs.JumperCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon4DefObjects1.length = k;}if ( gdjs.JumperCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDHitboxObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.JumperCode.condition1IsTrue_0.val = true;
        gdjs.JumperCode.GDHitboxObjects1[k] = gdjs.JumperCode.GDHitboxObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDHitboxObjects1.length = k;}if ( gdjs.JumperCode.condition1IsTrue_0.val ) {
{
gdjs.JumperCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.JumperCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon1DefObjects1[i].getAngle() == 180 ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon1DefObjects1[k] = gdjs.JumperCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon2DefObjects1[i].getAngle() == 180 ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon2DefObjects1[k] = gdjs.JumperCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon3DefObjects1[i].getAngle() == 180 ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon3DefObjects1[k] = gdjs.JumperCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon4DefObjects1[i].getAngle() == 180 ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon4DefObjects1[k] = gdjs.JumperCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon4DefObjects1.length = k;}if ( gdjs.JumperCode.condition3IsTrue_0.val ) {
{
{gdjs.JumperCode.conditionTrue_1 = gdjs.JumperCode.condition4IsTrue_0;
gdjs.JumperCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10472588);
}
}}
}
}
}
if (gdjs.JumperCode.condition4IsTrue_0.val) {
/* Reuse gdjs.JumperCode.GDIcon1DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon2DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon3DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon4DefObjects1 */
{for(var i = 0, len = gdjs.JumperCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon1DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 3", 270, "linear", 200, false);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon2DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 3", 270, "linear", 200, false);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon3DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 3", 270, "linear", 200, false);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon4DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 3", 270, "linear", 200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.JumperCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.JumperCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.JumperCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.JumperCode.GDIcon4DefObjects1);

gdjs.JumperCode.condition0IsTrue_0.val = false;
gdjs.JumperCode.condition1IsTrue_0.val = false;
gdjs.JumperCode.condition2IsTrue_0.val = false;
gdjs.JumperCode.condition3IsTrue_0.val = false;
gdjs.JumperCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon1DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 3") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon1DefObjects1[k] = gdjs.JumperCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon2DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 3") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon2DefObjects1[k] = gdjs.JumperCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon3DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 3") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon3DefObjects1[k] = gdjs.JumperCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon4DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 3") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon4DefObjects1[k] = gdjs.JumperCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon4DefObjects1.length = k;}if ( gdjs.JumperCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDHitboxObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.JumperCode.condition1IsTrue_0.val = true;
        gdjs.JumperCode.GDHitboxObjects1[k] = gdjs.JumperCode.GDHitboxObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDHitboxObjects1.length = k;}if ( gdjs.JumperCode.condition1IsTrue_0.val ) {
{
gdjs.JumperCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.JumperCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon1DefObjects1[i].getAngle() == 270 ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon1DefObjects1[k] = gdjs.JumperCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon2DefObjects1[i].getAngle() == 270 ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon2DefObjects1[k] = gdjs.JumperCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon3DefObjects1[i].getAngle() == 270 ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon3DefObjects1[k] = gdjs.JumperCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon4DefObjects1[i].getAngle() == 270 ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon4DefObjects1[k] = gdjs.JumperCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon4DefObjects1.length = k;}if ( gdjs.JumperCode.condition3IsTrue_0.val ) {
{
{gdjs.JumperCode.conditionTrue_1 = gdjs.JumperCode.condition4IsTrue_0;
gdjs.JumperCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10474396);
}
}}
}
}
}
if (gdjs.JumperCode.condition4IsTrue_0.val) {
/* Reuse gdjs.JumperCode.GDIcon1DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon2DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon3DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon4DefObjects1 */
{for(var i = 0, len = gdjs.JumperCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon1DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 4", 360, "linear", 200, false);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon2DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 4", 360, "linear", 200, false);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon3DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 4", 360, "linear", 200, false);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon4DefObjects1[i].getBehavior("Tween").addObjectAngleTween("Icons Jump Rotation 4", 360, "linear", 200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon1Def"), gdjs.JumperCode.GDIcon1DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2Def"), gdjs.JumperCode.GDIcon2DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3Def"), gdjs.JumperCode.GDIcon3DefObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon4Def"), gdjs.JumperCode.GDIcon4DefObjects1);

gdjs.JumperCode.condition0IsTrue_0.val = false;
gdjs.JumperCode.condition1IsTrue_0.val = false;
gdjs.JumperCode.condition2IsTrue_0.val = false;
gdjs.JumperCode.condition3IsTrue_0.val = false;
gdjs.JumperCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon1DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 4") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon1DefObjects1[k] = gdjs.JumperCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon2DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 4") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon2DefObjects1[k] = gdjs.JumperCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon3DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 4") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon3DefObjects1[k] = gdjs.JumperCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDIcon4DefObjects1[i].getBehavior("Tween").hasFinished("Icons Jump Rotation 4") ) {
        gdjs.JumperCode.condition0IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon4DefObjects1[k] = gdjs.JumperCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon4DefObjects1.length = k;}if ( gdjs.JumperCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDHitboxObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.JumperCode.condition1IsTrue_0.val = true;
        gdjs.JumperCode.GDHitboxObjects1[k] = gdjs.JumperCode.GDHitboxObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDHitboxObjects1.length = k;}if ( gdjs.JumperCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( !(gdjs.JumperCode.GDIcon1DefObjects1[i].getAngle() == 90) ) {
        gdjs.JumperCode.condition2IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon1DefObjects1[k] = gdjs.JumperCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( !(gdjs.JumperCode.GDIcon2DefObjects1[i].getAngle() == 90) ) {
        gdjs.JumperCode.condition2IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon2DefObjects1[k] = gdjs.JumperCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( !(gdjs.JumperCode.GDIcon3DefObjects1[i].getAngle() == 90) ) {
        gdjs.JumperCode.condition2IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon3DefObjects1[k] = gdjs.JumperCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( !(gdjs.JumperCode.GDIcon4DefObjects1[i].getAngle() == 90) ) {
        gdjs.JumperCode.condition2IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon4DefObjects1[k] = gdjs.JumperCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon4DefObjects1.length = k;}if ( gdjs.JumperCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( !(gdjs.JumperCode.GDIcon1DefObjects1[i].getAngle() == 180) ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon1DefObjects1[k] = gdjs.JumperCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( !(gdjs.JumperCode.GDIcon2DefObjects1[i].getAngle() == 180) ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon2DefObjects1[k] = gdjs.JumperCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( !(gdjs.JumperCode.GDIcon3DefObjects1[i].getAngle() == 180) ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon3DefObjects1[k] = gdjs.JumperCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( !(gdjs.JumperCode.GDIcon4DefObjects1[i].getAngle() == 180) ) {
        gdjs.JumperCode.condition3IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon4DefObjects1[k] = gdjs.JumperCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon4DefObjects1.length = k;}if ( gdjs.JumperCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon1DefObjects1.length;i<l;++i) {
    if ( !(gdjs.JumperCode.GDIcon1DefObjects1[i].getAngle() == 270) ) {
        gdjs.JumperCode.condition4IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon1DefObjects1[k] = gdjs.JumperCode.GDIcon1DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon1DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon2DefObjects1.length;i<l;++i) {
    if ( !(gdjs.JumperCode.GDIcon2DefObjects1[i].getAngle() == 270) ) {
        gdjs.JumperCode.condition4IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon2DefObjects1[k] = gdjs.JumperCode.GDIcon2DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon2DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon3DefObjects1.length;i<l;++i) {
    if ( !(gdjs.JumperCode.GDIcon3DefObjects1[i].getAngle() == 270) ) {
        gdjs.JumperCode.condition4IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon3DefObjects1[k] = gdjs.JumperCode.GDIcon3DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon3DefObjects1.length = k;for(var i = 0, k = 0, l = gdjs.JumperCode.GDIcon4DefObjects1.length;i<l;++i) {
    if ( !(gdjs.JumperCode.GDIcon4DefObjects1[i].getAngle() == 270) ) {
        gdjs.JumperCode.condition4IsTrue_0.val = true;
        gdjs.JumperCode.GDIcon4DefObjects1[k] = gdjs.JumperCode.GDIcon4DefObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDIcon4DefObjects1.length = k;}}
}
}
}
if (gdjs.JumperCode.condition4IsTrue_0.val) {
/* Reuse gdjs.JumperCode.GDIcon1DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon2DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon3DefObjects1 */
/* Reuse gdjs.JumperCode.GDIcon4DefObjects1 */
{for(var i = 0, len = gdjs.JumperCode.GDIcon1DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon1DefObjects1[i].setAngle(0);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon2DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon2DefObjects1[i].setAngle(0);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon3DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon3DefObjects1[i].setAngle(0);
}
for(var i = 0, len = gdjs.JumperCode.GDIcon4DefObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDIcon4DefObjects1[i].setAngle(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Orb"), gdjs.JumperCode.GDOrbObjects1);

gdjs.JumperCode.condition0IsTrue_0.val = false;
gdjs.JumperCode.condition1IsTrue_0.val = false;
gdjs.JumperCode.condition2IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects, gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDOrbObjects1Objects, false, runtimeScene, false);
}if ( gdjs.JumperCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JumperCode.GDHitboxObjects1.length;i<l;++i) {
    if ( gdjs.JumperCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.JumperCode.condition1IsTrue_0.val = true;
        gdjs.JumperCode.GDHitboxObjects1[k] = gdjs.JumperCode.GDHitboxObjects1[i];
        ++k;
    }
}
gdjs.JumperCode.GDHitboxObjects1.length = k;}if ( gdjs.JumperCode.condition1IsTrue_0.val ) {
{
gdjs.JumperCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
if (gdjs.JumperCode.condition2IsTrue_0.val) {
/* Reuse gdjs.JumperCode.GDHitboxObjects1 */
{for(var i = 0, len = gdjs.JumperCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.JumperCode.GDHitboxObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EndPortal"), gdjs.JumperCode.GDEndPortalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.JumperCode.GDHitboxObjects1);

gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDHitboxObjects1Objects, gdjs.JumperCode.mapOfGDgdjs_46JumperCode_46GDEndPortalObjects1Objects, false, runtimeScene, false);
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Selection", true);
}{runtimeScene.getGame().getVariables().get("Jumper Completion").setNumber(1);
}}

}


{


gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Color Change");
}}

}


{


gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "Color Change");
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ground1"), gdjs.JumperCode.GDGround1Objects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "80;25;218");
}{for(var i = 0, len = gdjs.JumperCode.GDGround1Objects1.length ;i < len;++i) {
    gdjs.JumperCode.GDGround1Objects1[i].setColor("80;25;218");
}
}}

}


{


gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 20, "Color Change");
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ground1"), gdjs.JumperCode.GDGround1Objects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "210;25;218");
}{for(var i = 0, len = gdjs.JumperCode.GDGround1Objects1.length ;i < len;++i) {
    gdjs.JumperCode.GDGround1Objects1[i].setColor("210;25;218");
}
}}

}


{


gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 30, "Color Change");
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ground1"), gdjs.JumperCode.GDGround1Objects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "25;204;218");
}{for(var i = 0, len = gdjs.JumperCode.GDGround1Objects1.length ;i < len;++i) {
    gdjs.JumperCode.GDGround1Objects1[i].setColor("25;204;218");
}
}}

}


{


gdjs.JumperCode.condition0IsTrue_0.val = false;
{
gdjs.JumperCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 40, "Color Change");
}if (gdjs.JumperCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ground1"), gdjs.JumperCode.GDGround1Objects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "36;192;120");
}{for(var i = 0, len = gdjs.JumperCode.GDGround1Objects1.length ;i < len;++i) {
    gdjs.JumperCode.GDGround1Objects1[i].setColor("36;192;120");
}
}}

}


{


{
}

}


};

gdjs.JumperCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JumperCode.GDIcon1DefObjects1.length = 0;
gdjs.JumperCode.GDIcon1DefObjects2.length = 0;
gdjs.JumperCode.GDIcon1DefObjects3.length = 0;
gdjs.JumperCode.GDIcon2DefObjects1.length = 0;
gdjs.JumperCode.GDIcon2DefObjects2.length = 0;
gdjs.JumperCode.GDIcon2DefObjects3.length = 0;
gdjs.JumperCode.GDIcon3DefObjects1.length = 0;
gdjs.JumperCode.GDIcon3DefObjects2.length = 0;
gdjs.JumperCode.GDIcon3DefObjects3.length = 0;
gdjs.JumperCode.GDIcon4DefObjects1.length = 0;
gdjs.JumperCode.GDIcon4DefObjects2.length = 0;
gdjs.JumperCode.GDIcon4DefObjects3.length = 0;
gdjs.JumperCode.GDHitboxObjects1.length = 0;
gdjs.JumperCode.GDHitboxObjects2.length = 0;
gdjs.JumperCode.GDHitboxObjects3.length = 0;
gdjs.JumperCode.GDGround1Objects1.length = 0;
gdjs.JumperCode.GDGround1Objects2.length = 0;
gdjs.JumperCode.GDGround1Objects3.length = 0;
gdjs.JumperCode.GDGround2Objects1.length = 0;
gdjs.JumperCode.GDGround2Objects2.length = 0;
gdjs.JumperCode.GDGround2Objects3.length = 0;
gdjs.JumperCode.GDCameraObjects1.length = 0;
gdjs.JumperCode.GDCameraObjects2.length = 0;
gdjs.JumperCode.GDCameraObjects3.length = 0;
gdjs.JumperCode.GDBlockObjects1.length = 0;
gdjs.JumperCode.GDBlockObjects2.length = 0;
gdjs.JumperCode.GDBlockObjects3.length = 0;
gdjs.JumperCode.GDBigSpikeObjects1.length = 0;
gdjs.JumperCode.GDBigSpikeObjects2.length = 0;
gdjs.JumperCode.GDBigSpikeObjects3.length = 0;
gdjs.JumperCode.GDSmallSpikeObjects1.length = 0;
gdjs.JumperCode.GDSmallSpikeObjects2.length = 0;
gdjs.JumperCode.GDSmallSpikeObjects3.length = 0;
gdjs.JumperCode.GDCameraTweenUpObjects1.length = 0;
gdjs.JumperCode.GDCameraTweenUpObjects2.length = 0;
gdjs.JumperCode.GDCameraTweenUpObjects3.length = 0;
gdjs.JumperCode.GDCameraTweenDownObjects1.length = 0;
gdjs.JumperCode.GDCameraTweenDownObjects2.length = 0;
gdjs.JumperCode.GDCameraTweenDownObjects3.length = 0;
gdjs.JumperCode.GDPauseMenuBGObjects1.length = 0;
gdjs.JumperCode.GDPauseMenuBGObjects2.length = 0;
gdjs.JumperCode.GDPauseMenuBGObjects3.length = 0;
gdjs.JumperCode.GDPauseMenuObjects1.length = 0;
gdjs.JumperCode.GDPauseMenuObjects2.length = 0;
gdjs.JumperCode.GDPauseMenuObjects3.length = 0;
gdjs.JumperCode.GDPauseMenuText1Objects1.length = 0;
gdjs.JumperCode.GDPauseMenuText1Objects2.length = 0;
gdjs.JumperCode.GDPauseMenuText1Objects3.length = 0;
gdjs.JumperCode.GDPauseMenuText2Objects1.length = 0;
gdjs.JumperCode.GDPauseMenuText2Objects2.length = 0;
gdjs.JumperCode.GDPauseMenuText2Objects3.length = 0;
gdjs.JumperCode.GDPauseMenuText3Objects1.length = 0;
gdjs.JumperCode.GDPauseMenuText3Objects2.length = 0;
gdjs.JumperCode.GDPauseMenuText3Objects3.length = 0;
gdjs.JumperCode.GDEndPortalObjects1.length = 0;
gdjs.JumperCode.GDEndPortalObjects2.length = 0;
gdjs.JumperCode.GDEndPortalObjects3.length = 0;
gdjs.JumperCode.GDOrbObjects1.length = 0;
gdjs.JumperCode.GDOrbObjects2.length = 0;
gdjs.JumperCode.GDOrbObjects3.length = 0;

gdjs.JumperCode.eventsList1(runtimeScene);
return;

}

gdjs['JumperCode'] = gdjs.JumperCode;
