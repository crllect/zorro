gdjs.Main_32menuCode = {};
gdjs.Main_32menuCode.GDGameTitleObjects1= [];
gdjs.Main_32menuCode.GDGameTitleObjects2= [];
gdjs.Main_32menuCode.GDGameTitleObjects3= [];
gdjs.Main_32menuCode.GDButtonStartObjects1= [];
gdjs.Main_32menuCode.GDButtonStartObjects2= [];
gdjs.Main_32menuCode.GDButtonStartObjects3= [];
gdjs.Main_32menuCode.GDNewSpriteObjects1= [];
gdjs.Main_32menuCode.GDNewSpriteObjects2= [];
gdjs.Main_32menuCode.GDNewSpriteObjects3= [];
gdjs.Main_32menuCode.GDNewSprite2Objects1= [];
gdjs.Main_32menuCode.GDNewSprite2Objects2= [];
gdjs.Main_32menuCode.GDNewSprite2Objects3= [];
gdjs.Main_32menuCode.GDNewSprite3Objects1= [];
gdjs.Main_32menuCode.GDNewSprite3Objects2= [];
gdjs.Main_32menuCode.GDNewSprite3Objects3= [];


gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDButtonStartObjects2Objects = Hashtable.newFrom({"ButtonStart": gdjs.Main_32menuCode.GDButtonStartObjects2});
gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.Main_32menuCode.GDButtonStartObjects1});
gdjs.Main_32menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Main_32menuCode.GDButtonStartObjects1, gdjs.Main_32menuCode.GDButtonStartObjects2);

{for(var i = 0, len = gdjs.Main_32menuCode.GDButtonStartObjects2.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDButtonStartObjects2[i].setAnimationName("StartPressed");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Select mode", false);
}}

}


};gdjs.Main_32menuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.Main_32menuCode.GDButtonStartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDButtonStartObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32menuCode.GDButtonStartObjects2 */
{for(var i = 0, len = gdjs.Main_32menuCode.GDButtonStartObjects2.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDButtonStartObjects2[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.Main_32menuCode.GDButtonStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDButtonStartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32menuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.Main_32menuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDButtonStartObjects1[i].setAnimationName("StartHover");
}
}
{ //Subevents
gdjs.Main_32menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32menuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32menuCode.eventsList1(runtimeScene);
}


};

gdjs.Main_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32menuCode.GDGameTitleObjects1.length = 0;
gdjs.Main_32menuCode.GDGameTitleObjects2.length = 0;
gdjs.Main_32menuCode.GDGameTitleObjects3.length = 0;
gdjs.Main_32menuCode.GDButtonStartObjects1.length = 0;
gdjs.Main_32menuCode.GDButtonStartObjects2.length = 0;
gdjs.Main_32menuCode.GDButtonStartObjects3.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects3.length = 0;
gdjs.Main_32menuCode.GDNewSprite2Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite2Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite2Objects3.length = 0;
gdjs.Main_32menuCode.GDNewSprite3Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite3Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite3Objects3.length = 0;

gdjs.Main_32menuCode.eventsList2(runtimeScene);

return;

}

gdjs['Main_32menuCode'] = gdjs.Main_32menuCode;
