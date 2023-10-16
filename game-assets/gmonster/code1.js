gdjs.Select_32modeCode = {};
gdjs.Select_32modeCode.GDGameTitleObjects1= [];
gdjs.Select_32modeCode.GDGameTitleObjects2= [];
gdjs.Select_32modeCode.GDButtonStartObjects1= [];
gdjs.Select_32modeCode.GDButtonStartObjects2= [];
gdjs.Select_32modeCode.GDNewSpriteObjects1= [];
gdjs.Select_32modeCode.GDNewSpriteObjects2= [];
gdjs.Select_32modeCode.GDNewSprite2Objects1= [];
gdjs.Select_32modeCode.GDNewSprite2Objects2= [];
gdjs.Select_32modeCode.GDNewSprite3Objects1= [];
gdjs.Select_32modeCode.GDNewSprite3Objects2= [];
gdjs.Select_32modeCode.GDNewSprite4Objects1= [];
gdjs.Select_32modeCode.GDNewSprite4Objects2= [];
gdjs.Select_32modeCode.GDNewSprite5Objects1= [];
gdjs.Select_32modeCode.GDNewSprite5Objects2= [];
gdjs.Select_32modeCode.GDNewTextObjects1= [];
gdjs.Select_32modeCode.GDNewTextObjects2= [];


gdjs.Select_32modeCode.mapOfGDgdjs_46Select_9532modeCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Select_32modeCode.GDNewSpriteObjects1});
gdjs.Select_32modeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Select_32modeCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Select_32modeCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32modeCode.mapOfGDgdjs_46Select_9532modeCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(6);
}
{ //Subevents
gdjs.Select_32modeCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Select_32modeCode.mapOfGDgdjs_46Select_9532modeCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Select_32modeCode.GDNewSprite2Objects1});
gdjs.Select_32modeCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Select_32modeCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Select_32modeCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32modeCode.mapOfGDgdjs_46Select_9532modeCode_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}
{ //Subevents
gdjs.Select_32modeCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Select_32modeCode.mapOfGDgdjs_46Select_9532modeCode_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Select_32modeCode.GDNewSprite3Objects1});
gdjs.Select_32modeCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Select_32modeCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Select_32modeCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32modeCode.mapOfGDgdjs_46Select_9532modeCode_46GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1.5);
}
{ //Subevents
gdjs.Select_32modeCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Select_32modeCode.mapOfGDgdjs_46Select_9532modeCode_46GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Select_32modeCode.GDNewSprite4Objects1});
gdjs.Select_32modeCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Select_32modeCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Select_32modeCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32modeCode.mapOfGDgdjs_46Select_9532modeCode_46GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0.5);
}
{ //Subevents
gdjs.Select_32modeCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Select_32modeCode.mapOfGDgdjs_46Select_9532modeCode_46GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.Select_32modeCode.GDNewSprite5Objects1});
gdjs.Select_32modeCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Select_32modeCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Select_32modeCode.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32modeCode.mapOfGDgdjs_46Select_9532modeCode_46GDNewSprite5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{ //Subevents
gdjs.Select_32modeCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Select_32modeCode.eventsList10 = function(runtimeScene) {

{


gdjs.Select_32modeCode.eventsList1(runtimeScene);
}


{


gdjs.Select_32modeCode.eventsList3(runtimeScene);
}


{


gdjs.Select_32modeCode.eventsList5(runtimeScene);
}


{


gdjs.Select_32modeCode.eventsList7(runtimeScene);
}


{


gdjs.Select_32modeCode.eventsList9(runtimeScene);
}


};

gdjs.Select_32modeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Select_32modeCode.GDGameTitleObjects1.length = 0;
gdjs.Select_32modeCode.GDGameTitleObjects2.length = 0;
gdjs.Select_32modeCode.GDButtonStartObjects1.length = 0;
gdjs.Select_32modeCode.GDButtonStartObjects2.length = 0;
gdjs.Select_32modeCode.GDNewSpriteObjects1.length = 0;
gdjs.Select_32modeCode.GDNewSpriteObjects2.length = 0;
gdjs.Select_32modeCode.GDNewSprite2Objects1.length = 0;
gdjs.Select_32modeCode.GDNewSprite2Objects2.length = 0;
gdjs.Select_32modeCode.GDNewSprite3Objects1.length = 0;
gdjs.Select_32modeCode.GDNewSprite3Objects2.length = 0;
gdjs.Select_32modeCode.GDNewSprite4Objects1.length = 0;
gdjs.Select_32modeCode.GDNewSprite4Objects2.length = 0;
gdjs.Select_32modeCode.GDNewSprite5Objects1.length = 0;
gdjs.Select_32modeCode.GDNewSprite5Objects2.length = 0;
gdjs.Select_32modeCode.GDNewTextObjects1.length = 0;
gdjs.Select_32modeCode.GDNewTextObjects2.length = 0;

gdjs.Select_32modeCode.eventsList10(runtimeScene);

return;

}

gdjs['Select_32modeCode'] = gdjs.Select_32modeCode;
