gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDIcon1DefObjects1= [];
gdjs.Main_32MenuCode.GDIcon1DefObjects2= [];
gdjs.Main_32MenuCode.GDIcon2DefObjects1= [];
gdjs.Main_32MenuCode.GDIcon2DefObjects2= [];
gdjs.Main_32MenuCode.GDIcon3DefObjects1= [];
gdjs.Main_32MenuCode.GDIcon3DefObjects2= [];
gdjs.Main_32MenuCode.GDIcon4DefObjects1= [];
gdjs.Main_32MenuCode.GDIcon4DefObjects2= [];
gdjs.Main_32MenuCode.GDTitleObjects1= [];
gdjs.Main_32MenuCode.GDTitleObjects2= [];
gdjs.Main_32MenuCode.GDPS1Text1Objects1= [];
gdjs.Main_32MenuCode.GDPS1Text1Objects2= [];
gdjs.Main_32MenuCode.GDPS1Text2Objects1= [];
gdjs.Main_32MenuCode.GDPS1Text2Objects2= [];
gdjs.Main_32MenuCode.GDPS1Text3Objects1= [];
gdjs.Main_32MenuCode.GDPS1Text3Objects2= [];
gdjs.Main_32MenuCode.GDGroundObjects1= [];
gdjs.Main_32MenuCode.GDGroundObjects2= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1= [];
gdjs.Main_32MenuCode.GDIconSelectionButtonObjects2= [];
gdjs.Main_32MenuCode.GDExitButtonObjects1= [];
gdjs.Main_32MenuCode.GDExitButtonObjects2= [];
gdjs.Main_32MenuCode.GDFloorObjects1= [];
gdjs.Main_32MenuCode.GDFloorObjects2= [];
gdjs.Main_32MenuCode.GDIcon1Objects1= [];
gdjs.Main_32MenuCode.GDIcon1Objects2= [];
gdjs.Main_32MenuCode.GDIcon2Objects1= [];
gdjs.Main_32MenuCode.GDIcon2Objects2= [];
gdjs.Main_32MenuCode.GDIcon3Objects1= [];
gdjs.Main_32MenuCode.GDIcon3Objects2= [];
gdjs.Main_32MenuCode.GDIcon4Objects1= [];
gdjs.Main_32MenuCode.GDIcon4Objects2= [];
gdjs.Main_32MenuCode.GDSoundtrackObjects1= [];
gdjs.Main_32MenuCode.GDSoundtrackObjects2= [];
gdjs.Main_32MenuCode.GDCreditObjects1= [];
gdjs.Main_32MenuCode.GDCreditObjects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_1 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDIconSelectionButtonObjects1Objects = Hashtable.newFrom({"IconSelectionButton": gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.Main_32MenuCode.GDExitButtonObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSoundtrackObjects1Objects = Hashtable.newFrom({"Soundtrack": gdjs.Main_32MenuCode.GDSoundtrackObjects1});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BG Color Change");
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "BG Color Change");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Main_32MenuCode.GDFloorObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "190;51;218");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDFloorObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFloorObjects1[i].setColor("80;227;194");
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6, "BG Color Change");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Main_32MenuCode.GDFloorObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "95;187;2");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDFloorObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFloorObjects1[i].setColor("134;194;60");
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 9, "BG Color Change");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Main_32MenuCode.GDFloorObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "230;160;45");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDFloorObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFloorObjects1[i].setColor("240;147;160");
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 12, "BG Color Change");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Main_32MenuCode.GDFloorObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "70;190;163");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDFloorObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFloorObjects1[i].setColor("152;96;201");
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 15, "BG Color Change");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Main_32MenuCode.GDFloorObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "238;67;88");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDFloorObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFloorObjects1[i].setColor("184;233;134");
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 18, "BG Color Change");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Main_32MenuCode.GDFloorObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "74;144;226");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDFloorObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFloorObjects1[i].setColor("74;144;226");
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 21, "BG Color Change");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BG Color Change");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("IconSelectionButton"), gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDIconSelectionButtonObjects1Objects, runtimeScene, false, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Button Tween 1", 1.2 / 1, 1.2 / 1, "bounce", 50, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("IconSelectionButton"), gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1[i].getBehavior("Tween").hasFinished("Button Tween 1") ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1[k] = gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Button Tween 2", 1 / 1, 1 / 1, "bounce", 50, false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Icon Selection", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects1Objects, runtimeScene, false, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Button Tween 3", 1.2 / 1, 1.2 / 1, "bounce", 50, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].getBehavior("Tween").hasFinished("Button Tween 3") ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDPlayButtonObjects1[k] = gdjs.Main_32MenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Button Tween 4", 1 / 1, 1 / 1, "bounce", 50, false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Selection", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.Main_32MenuCode.GDExitButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDExitButtonObjects1Objects, runtimeScene, false, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDExitButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Button Tween 5", 1.2 / 1, 1.2 / 1, "bounce", 50, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.Main_32MenuCode.GDExitButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDExitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDExitButtonObjects1[i].getBehavior("Tween").hasFinished("Button Tween 5") ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDExitButtonObjects1[k] = gdjs.Main_32MenuCode.GDExitButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDExitButtonObjects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDExitButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Button Tween 6", 1 / 1, 1 / 1, "bounce", 50, false);
}
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Icon1"), gdjs.Main_32MenuCode.GDIcon1Objects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon1Objects1[i].setX(gdjs.Main_32MenuCode.GDIcon1Objects1[i].getX() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icon1"), gdjs.Main_32MenuCode.GDIcon1Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDIcon1Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDIcon1Objects1[i].getX() == 180 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDIcon1Objects1[k] = gdjs.Main_32MenuCode.GDIcon1Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDIcon1Objects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDIcon1Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon1Objects1[i].getBehavior("Tween").addObjectPositionYTween("Icon 1 Jump 1", 200, "linear", 250, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon1Objects1[i].getBehavior("Tween").addObjectAngleTween("Icon 1 Rotation 1", 90, "linear", 200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icon1"), gdjs.Main_32MenuCode.GDIcon1Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDIcon1Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDIcon1Objects1[i].getBehavior("Tween").hasFinished("Icon 1 Jump 1") ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDIcon1Objects1[k] = gdjs.Main_32MenuCode.GDIcon1Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDIcon1Objects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDIcon1Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon1Objects1[i].getBehavior("Tween").addObjectPositionYTween("Icon 1 Fall 1", 290, "linear", 50, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icon1"), gdjs.Main_32MenuCode.GDIcon1Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDIcon1Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDIcon1Objects1[i].getX() >= 960 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDIcon1Objects1[k] = gdjs.Main_32MenuCode.GDIcon1Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDIcon1Objects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Icon2"), gdjs.Main_32MenuCode.GDIcon2Objects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon2Objects1[i].setX(gdjs.Main_32MenuCode.GDIcon2Objects1[i].getX() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icon2"), gdjs.Main_32MenuCode.GDIcon2Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDIcon2Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDIcon2Objects1[i].getX() == 550 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDIcon2Objects1[k] = gdjs.Main_32MenuCode.GDIcon2Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDIcon2Objects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDIcon2Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon2Objects1[i].getBehavior("Tween").addObjectPositionYTween("Icon 2 Jump 1", 200, "linear", 250, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon2Objects1[i].getBehavior("Tween").addObjectAngleTween("Icon 2 Rotation 1", 90, "linear", 250, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icon2"), gdjs.Main_32MenuCode.GDIcon2Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDIcon2Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDIcon2Objects1[i].getBehavior("Tween").hasFinished("Icon 2 Jump 1") ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDIcon2Objects1[k] = gdjs.Main_32MenuCode.GDIcon2Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDIcon2Objects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDIcon2Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon2Objects1[i].getBehavior("Tween").addObjectPositionYTween("Icon 2 Fall 1", 290, "linear", 50, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icon2"), gdjs.Main_32MenuCode.GDIcon2Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDIcon2Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDIcon2Objects1[i].getX() >= 960 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDIcon2Objects1[k] = gdjs.Main_32MenuCode.GDIcon2Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDIcon2Objects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Icon3"), gdjs.Main_32MenuCode.GDIcon3Objects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon3Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon3Objects1[i].setX(gdjs.Main_32MenuCode.GDIcon3Objects1[i].getX() + (10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icon3"), gdjs.Main_32MenuCode.GDIcon3Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDIcon3Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDIcon3Objects1[i].getX() >= 960 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDIcon3Objects1[k] = gdjs.Main_32MenuCode.GDIcon3Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDIcon3Objects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Icon4"), gdjs.Main_32MenuCode.GDIcon4Objects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon4Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon4Objects1[i].setX(gdjs.Main_32MenuCode.GDIcon4Objects1[i].getX() + (7));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icon4"), gdjs.Main_32MenuCode.GDIcon4Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDIcon4Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDIcon4Objects1[i].getX() >= 960 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDIcon4Objects1[k] = gdjs.Main_32MenuCode.GDIcon4Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDIcon4Objects1.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10214828);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Icon1"), gdjs.Main_32MenuCode.GDIcon1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Icon2"), gdjs.Main_32MenuCode.GDIcon2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Icon3"), gdjs.Main_32MenuCode.GDIcon3Objects1);
/* Reuse gdjs.Main_32MenuCode.GDIcon4Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon1Objects1[i].setX(-(100));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon2Objects1[i].setX(-(200));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon3Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon3Objects1[i].setX(-(300));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon4Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon4Objects1[i].setX(-(400));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon1Objects1[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDIcon2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDIcon2Objects1[i].setAngle(0);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "music_zapsplat_breaking_boundaries.mp3", 100, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Credit"), gdjs.Main_32MenuCode.GDCreditObjects1);
gdjs.copyArray(runtimeScene.getObjects("Soundtrack"), gdjs.Main_32MenuCode.GDSoundtrackObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSoundtrackObjects1Objects, runtimeScene, false, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDCreditObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDCreditObjects1[i].getY() == 640 ) {
        gdjs.Main_32MenuCode.condition2IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDCreditObjects1[k] = gdjs.Main_32MenuCode.GDCreditObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDCreditObjects1.length = k;}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDCreditObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDCreditObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCreditObjects1[i].setY(66);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Credit");
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "Credit");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Credit"), gdjs.Main_32MenuCode.GDCreditObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDCreditObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCreditObjects1[i].setY(640);
}
}}

}


{


{
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDIcon1DefObjects1.length = 0;
gdjs.Main_32MenuCode.GDIcon1DefObjects2.length = 0;
gdjs.Main_32MenuCode.GDIcon2DefObjects1.length = 0;
gdjs.Main_32MenuCode.GDIcon2DefObjects2.length = 0;
gdjs.Main_32MenuCode.GDIcon3DefObjects1.length = 0;
gdjs.Main_32MenuCode.GDIcon3DefObjects2.length = 0;
gdjs.Main_32MenuCode.GDIcon4DefObjects1.length = 0;
gdjs.Main_32MenuCode.GDIcon4DefObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDPS1Text1Objects1.length = 0;
gdjs.Main_32MenuCode.GDPS1Text1Objects2.length = 0;
gdjs.Main_32MenuCode.GDPS1Text2Objects1.length = 0;
gdjs.Main_32MenuCode.GDPS1Text2Objects2.length = 0;
gdjs.Main_32MenuCode.GDPS1Text3Objects1.length = 0;
gdjs.Main_32MenuCode.GDPS1Text3Objects2.length = 0;
gdjs.Main_32MenuCode.GDGroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDGroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDIconSelectionButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDIconSelectionButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDExitButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDExitButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDFloorObjects1.length = 0;
gdjs.Main_32MenuCode.GDFloorObjects2.length = 0;
gdjs.Main_32MenuCode.GDIcon1Objects1.length = 0;
gdjs.Main_32MenuCode.GDIcon1Objects2.length = 0;
gdjs.Main_32MenuCode.GDIcon2Objects1.length = 0;
gdjs.Main_32MenuCode.GDIcon2Objects2.length = 0;
gdjs.Main_32MenuCode.GDIcon3Objects1.length = 0;
gdjs.Main_32MenuCode.GDIcon3Objects2.length = 0;
gdjs.Main_32MenuCode.GDIcon4Objects1.length = 0;
gdjs.Main_32MenuCode.GDIcon4Objects2.length = 0;
gdjs.Main_32MenuCode.GDSoundtrackObjects1.length = 0;
gdjs.Main_32MenuCode.GDSoundtrackObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
