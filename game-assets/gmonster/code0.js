gdjs.Level_321Code = {};
gdjs.Level_321Code.forEachCount0_2 = 0;

gdjs.Level_321Code.forEachCount1_2 = 0;

gdjs.Level_321Code.forEachCount2_2 = 0;

gdjs.Level_321Code.forEachCount3_2 = 0;

gdjs.Level_321Code.forEachIndex2 = 0;

gdjs.Level_321Code.forEachObjects2 = [];

gdjs.Level_321Code.forEachTemporary2 = null;

gdjs.Level_321Code.forEachTotalCount2 = 0;

gdjs.Level_321Code.GDMonsterObjects1= [];
gdjs.Level_321Code.GDMonsterObjects2= [];
gdjs.Level_321Code.GDMonsterObjects3= [];
gdjs.Level_321Code.GDMonsterObjects4= [];
gdjs.Level_321Code.GDShape1Objects1= [];
gdjs.Level_321Code.GDShape1Objects2= [];
gdjs.Level_321Code.GDShape1Objects3= [];
gdjs.Level_321Code.GDShape1Objects4= [];
gdjs.Level_321Code.GDShape2Objects1= [];
gdjs.Level_321Code.GDShape2Objects2= [];
gdjs.Level_321Code.GDShape2Objects3= [];
gdjs.Level_321Code.GDShape2Objects4= [];
gdjs.Level_321Code.GDShape3Objects1= [];
gdjs.Level_321Code.GDShape3Objects2= [];
gdjs.Level_321Code.GDShape3Objects3= [];
gdjs.Level_321Code.GDShape3Objects4= [];
gdjs.Level_321Code.GDShape4Objects1= [];
gdjs.Level_321Code.GDShape4Objects2= [];
gdjs.Level_321Code.GDShape4Objects3= [];
gdjs.Level_321Code.GDShape4Objects4= [];
gdjs.Level_321Code.GDScore_95TextObjects1= [];
gdjs.Level_321Code.GDScore_95TextObjects2= [];
gdjs.Level_321Code.GDScore_95TextObjects3= [];
gdjs.Level_321Code.GDScore_95TextObjects4= [];
gdjs.Level_321Code.GDObstacleObjects1= [];
gdjs.Level_321Code.GDObstacleObjects2= [];
gdjs.Level_321Code.GDObstacleObjects3= [];
gdjs.Level_321Code.GDObstacleObjects4= [];
gdjs.Level_321Code.GDLifeObjects1= [];
gdjs.Level_321Code.GDLifeObjects2= [];
gdjs.Level_321Code.GDLifeObjects3= [];
gdjs.Level_321Code.GDLifeObjects4= [];
gdjs.Level_321Code.GDNewTiledSpriteObjects1= [];
gdjs.Level_321Code.GDNewTiledSpriteObjects2= [];
gdjs.Level_321Code.GDNewTiledSpriteObjects3= [];
gdjs.Level_321Code.GDNewTiledSpriteObjects4= [];
gdjs.Level_321Code.GDGameOverObjects1= [];
gdjs.Level_321Code.GDGameOverObjects2= [];
gdjs.Level_321Code.GDGameOverObjects3= [];
gdjs.Level_321Code.GDGameOverObjects4= [];
gdjs.Level_321Code.GDButtonTryAgainObjects1= [];
gdjs.Level_321Code.GDButtonTryAgainObjects2= [];
gdjs.Level_321Code.GDButtonTryAgainObjects3= [];
gdjs.Level_321Code.GDButtonTryAgainObjects4= [];
gdjs.Level_321Code.GDButtonMainMenuObjects1= [];
gdjs.Level_321Code.GDButtonMainMenuObjects2= [];
gdjs.Level_321Code.GDButtonMainMenuObjects3= [];
gdjs.Level_321Code.GDButtonMainMenuObjects4= [];


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMonsterObjects2[i].getX() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) + 5 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDMonsterObjects2[k] = gdjs.Level_321Code.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects2[i].addForce(-(450), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMonsterObjects1[i].getX() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 138 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDMonsterObjects1[k] = gdjs.Level_321Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMonsterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].addForce(450, 0, 0);
}
}}

}


};gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects2[i].addForce(-(450), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects2[i].addForce(450, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape1Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape2Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape3Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape4Objects2Objects = Hashtable.newFrom({"Shape1": gdjs.Level_321Code.GDShape1Objects2, "Shape2": gdjs.Level_321Code.GDShape2Objects2, "Shape3": gdjs.Level_321Code.GDShape3Objects2, "Shape4": gdjs.Level_321Code.GDShape4Objects2});
gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.Level_321Code.GDMonsterObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape1Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape2Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape3Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape4Objects2Objects = Hashtable.newFrom({"Shape1": gdjs.Level_321Code.GDShape1Objects2, "Shape2": gdjs.Level_321Code.GDShape2Objects2, "Shape3": gdjs.Level_321Code.GDShape3Objects2, "Shape4": gdjs.Level_321Code.GDShape4Objects2});
gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

};gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShapeCreation");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShapeCreation") >= 1.3;
if (isConditionTrue_0) {
gdjs.Level_321Code.GDShape1Objects2.length = 0;

gdjs.Level_321Code.GDShape2Objects2.length = 0;

gdjs.Level_321Code.GDShape3Objects2.length = 0;

gdjs.Level_321Code.GDShape4Objects2.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape1Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape2Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape3Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape4Objects2Objects, "Shape" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 4)), gdjs.randomInRange(80, 640 - 80), -(100), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDShape1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape1Objects2[i].setAngle(gdjs.randomInRange(0, 160));
}
for(var i = 0, len = gdjs.Level_321Code.GDShape2Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape2Objects2[i].setAngle(gdjs.randomInRange(0, 160));
}
for(var i = 0, len = gdjs.Level_321Code.GDShape3Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape3Objects2[i].setAngle(gdjs.randomInRange(0, 160));
}
for(var i = 0, len = gdjs.Level_321Code.GDShape4Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape4Objects2[i].setAngle(gdjs.randomInRange(0, 160));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShape1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape1Objects2[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level_321Code.GDShape2Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape2Objects2[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level_321Code.GDShape3Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape3Objects2[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level_321Code.GDShape4Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape4Objects2[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShapeCreation");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Level_321Code.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level_321Code.GDShape1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level_321Code.GDShape2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level_321Code.GDShape3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level_321Code.GDShape4Objects2);
{for(var i = 0, len = gdjs.Level_321Code.GDShape1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape1Objects2[i].addPolarForce(90, 100, 0);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape2Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape2Objects2[i].addPolarForce(90, 100, 0);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape3Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape3Objects2[i].addPolarForce(90, 100, 0);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape4Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape4Objects2[i].addPolarForce(90, 100, 0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShape1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape1Objects2[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape2Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape2Objects2[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape3Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape3Objects2[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape4Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape4Objects2[i].rotate(90, runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level_321Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level_321Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level_321Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level_321Code.GDShape4Objects1);

gdjs.Level_321Code.forEachTotalCount2 = 0;
gdjs.Level_321Code.forEachObjects2.length = 0;
gdjs.Level_321Code.forEachCount0_2 = gdjs.Level_321Code.GDShape1Objects1.length;
gdjs.Level_321Code.forEachTotalCount2 += gdjs.Level_321Code.forEachCount0_2;
gdjs.Level_321Code.forEachObjects2.push.apply(gdjs.Level_321Code.forEachObjects2,gdjs.Level_321Code.GDShape1Objects1);
gdjs.Level_321Code.forEachCount1_2 = gdjs.Level_321Code.GDShape2Objects1.length;
gdjs.Level_321Code.forEachTotalCount2 += gdjs.Level_321Code.forEachCount1_2;
gdjs.Level_321Code.forEachObjects2.push.apply(gdjs.Level_321Code.forEachObjects2,gdjs.Level_321Code.GDShape2Objects1);
gdjs.Level_321Code.forEachCount2_2 = gdjs.Level_321Code.GDShape3Objects1.length;
gdjs.Level_321Code.forEachTotalCount2 += gdjs.Level_321Code.forEachCount2_2;
gdjs.Level_321Code.forEachObjects2.push.apply(gdjs.Level_321Code.forEachObjects2,gdjs.Level_321Code.GDShape3Objects1);
gdjs.Level_321Code.forEachCount3_2 = gdjs.Level_321Code.GDShape4Objects1.length;
gdjs.Level_321Code.forEachTotalCount2 += gdjs.Level_321Code.forEachCount3_2;
gdjs.Level_321Code.forEachObjects2.push.apply(gdjs.Level_321Code.forEachObjects2,gdjs.Level_321Code.GDShape4Objects1);
for (gdjs.Level_321Code.forEachIndex2 = 0;gdjs.Level_321Code.forEachIndex2 < gdjs.Level_321Code.forEachTotalCount2;++gdjs.Level_321Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score_Text"), gdjs.Level_321Code.GDScore_95TextObjects2);
gdjs.Level_321Code.GDShape1Objects2.length = 0;

gdjs.Level_321Code.GDShape2Objects2.length = 0;

gdjs.Level_321Code.GDShape3Objects2.length = 0;

gdjs.Level_321Code.GDShape4Objects2.length = 0;


if (gdjs.Level_321Code.forEachIndex2 < gdjs.Level_321Code.forEachCount0_2) {
    gdjs.Level_321Code.GDShape1Objects2.push(gdjs.Level_321Code.forEachObjects2[gdjs.Level_321Code.forEachIndex2]);
}
else if (gdjs.Level_321Code.forEachIndex2 < gdjs.Level_321Code.forEachCount0_2+gdjs.Level_321Code.forEachCount1_2) {
    gdjs.Level_321Code.GDShape2Objects2.push(gdjs.Level_321Code.forEachObjects2[gdjs.Level_321Code.forEachIndex2]);
}
else if (gdjs.Level_321Code.forEachIndex2 < gdjs.Level_321Code.forEachCount0_2+gdjs.Level_321Code.forEachCount1_2+gdjs.Level_321Code.forEachCount2_2) {
    gdjs.Level_321Code.GDShape3Objects2.push(gdjs.Level_321Code.forEachObjects2[gdjs.Level_321Code.forEachIndex2]);
}
else if (gdjs.Level_321Code.forEachIndex2 < gdjs.Level_321Code.forEachCount0_2+gdjs.Level_321Code.forEachCount1_2+gdjs.Level_321Code.forEachCount2_2+gdjs.Level_321Code.forEachCount3_2) {
    gdjs.Level_321Code.GDShape4Objects2.push(gdjs.Level_321Code.forEachObjects2[gdjs.Level_321Code.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape1Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape2Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape3Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape4Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "monster.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.Level_321Code.GDShape1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape2Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape2Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape3Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape3Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape4Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape4Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level_321Code.GDScore_95TextObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDScore_95TextObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}}
}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.Level_321Code.GDObstacleObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.Level_321Code.GDObstacleObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.Level_321Code.GDMonsterObjects2});
gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.Level_321Code.GDMonsterObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDMonsterObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMonsterObjects3[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDMonsterObjects3[k] = gdjs.Level_321Code.GDMonsterObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMonsterObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.Level_321Code.GDButtonMainMenuObjects3);
gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.Level_321Code.GDButtonTryAgainObjects3);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level_321Code.GDGameOverObjects3);
gdjs.copyArray(gdjs.Level_321Code.GDLifeObjects2, gdjs.Level_321Code.GDLifeObjects3);

/* Reuse gdjs.Level_321Code.GDMonsterObjects3 */
gdjs.copyArray(gdjs.Level_321Code.GDObstacleObjects2, gdjs.Level_321Code.GDObstacleObjects3);

gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level_321Code.GDShape1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level_321Code.GDShape2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level_321Code.GDShape3Objects3);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level_321Code.GDShape4Objects3);
{for(var i = 0, len = gdjs.Level_321Code.GDLifeObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDLifeObjects3[i].setAnimationName("Life0");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects3[i].setAnimationName("Monster_Dead");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShape1Objects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape1Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape2Objects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape2Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape3Objects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape3Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape4Objects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape4Objects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDObstacleObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDObstacleObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDGameOverObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDGameOverObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDButtonTryAgainObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonTryAgainObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDButtonMainMenuObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonMainMenuObjects3[i].hide(false);
}
}}

}


};gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_321Code.GDMonsterObjects2, gdjs.Level_321Code.GDMonsterObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDMonsterObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMonsterObjects3[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDMonsterObjects3[k] = gdjs.Level_321Code.GDMonsterObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMonsterObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDMonsterObjects3 */
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects3[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Level_321Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList6(runtimeScene);
}


};gdjs.Level_321Code.eventsList8 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ObstacleCreation");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ObstacleCreation") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
gdjs.Level_321Code.GDObstacleObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDObstacleObjects2Objects, gdjs.randomInRange(80, 640 - 80), -(100), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ObstacleCreation");
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level_321Code.GDObstacleObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDObstacleObjects2[i].addPolarForce(90, 100, 0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDObstacleObjects2[i].setZOrder(4);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level_321Code.GDObstacleObjects1);

for (gdjs.Level_321Code.forEachIndex2 = 0;gdjs.Level_321Code.forEachIndex2 < gdjs.Level_321Code.GDObstacleObjects1.length;++gdjs.Level_321Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.Level_321Code.GDLifeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects2);
gdjs.Level_321Code.GDObstacleObjects2.length = 0;


gdjs.Level_321Code.forEachTemporary2 = gdjs.Level_321Code.GDObstacleObjects1[gdjs.Level_321Code.forEachIndex2];
gdjs.Level_321Code.GDObstacleObjects2.push(gdjs.Level_321Code.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDObstacleObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects2[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDObstacleObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDLifeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDLifeObjects2[i].setAnimationName("Life" + gdjs.evtTools.common.toString((( gdjs.Level_321Code.GDMonsterObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDMonsterObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "killed.wav", false, 50, 1);
}
{ //Subevents: 
gdjs.Level_321Code.eventsList7(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Level_321Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.Level_321Code.GDButtonMainMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.Level_321Code.GDButtonTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level_321Code.GDGameOverObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDGameOverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonTryAgainObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonMainMenuObjects1[i].hide();
}
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDButtonTryAgainObjects2Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.Level_321Code.GDButtonTryAgainObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDButtonTryAgainObjects1Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.Level_321Code.GDButtonTryAgainObjects1});
gdjs.Level_321Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level_321Code.GDButtonTryAgainObjects1, gdjs.Level_321Code.GDButtonTryAgainObjects2);

{for(var i = 0, len = gdjs.Level_321Code.GDButtonTryAgainObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonTryAgainObjects2[i].setAnimationName("TryAgainPressed");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Level_321Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.Level_321Code.GDButtonTryAgainObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDButtonTryAgainObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDButtonTryAgainObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDButtonTryAgainObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonTryAgainObjects2[i].setAnimationName("TryAgainNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.Level_321Code.GDButtonTryAgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDButtonTryAgainObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDButtonTryAgainObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonTryAgainObjects1[i].setAnimationName("TryAginHover");
}
}
{ //Subevents
gdjs.Level_321Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDButtonMainMenuObjects2Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.Level_321Code.GDButtonMainMenuObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDButtonMainMenuObjects1Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.Level_321Code.GDButtonMainMenuObjects1});
gdjs.Level_321Code.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level_321Code.GDButtonMainMenuObjects1, gdjs.Level_321Code.GDButtonMainMenuObjects2);

{for(var i = 0, len = gdjs.Level_321Code.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonMainMenuObjects2[i].setAnimationName("MainMenuPressed");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", false);
}}

}


};gdjs.Level_321Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.Level_321Code.GDButtonMainMenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDButtonMainMenuObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDButtonMainMenuObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonMainMenuObjects2[i].setAnimationName("MainMenuNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.Level_321Code.GDButtonMainMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDButtonMainMenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDButtonMainMenuObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonMainMenuObjects1[i].setAnimationName("MainMenuHover");
}
}
{ //Subevents
gdjs.Level_321Code.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.eventsList14 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList1(runtimeScene);
}


{


gdjs.Level_321Code.eventsList4(runtimeScene);
}


{


gdjs.Level_321Code.eventsList8(runtimeScene);
}


{


gdjs.Level_321Code.eventsList9(runtimeScene);
}


{


gdjs.Level_321Code.eventsList11(runtimeScene);
}


{


gdjs.Level_321Code.eventsList13(runtimeScene);
}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDMonsterObjects1.length = 0;
gdjs.Level_321Code.GDMonsterObjects2.length = 0;
gdjs.Level_321Code.GDMonsterObjects3.length = 0;
gdjs.Level_321Code.GDMonsterObjects4.length = 0;
gdjs.Level_321Code.GDShape1Objects1.length = 0;
gdjs.Level_321Code.GDShape1Objects2.length = 0;
gdjs.Level_321Code.GDShape1Objects3.length = 0;
gdjs.Level_321Code.GDShape1Objects4.length = 0;
gdjs.Level_321Code.GDShape2Objects1.length = 0;
gdjs.Level_321Code.GDShape2Objects2.length = 0;
gdjs.Level_321Code.GDShape2Objects3.length = 0;
gdjs.Level_321Code.GDShape2Objects4.length = 0;
gdjs.Level_321Code.GDShape3Objects1.length = 0;
gdjs.Level_321Code.GDShape3Objects2.length = 0;
gdjs.Level_321Code.GDShape3Objects3.length = 0;
gdjs.Level_321Code.GDShape3Objects4.length = 0;
gdjs.Level_321Code.GDShape4Objects1.length = 0;
gdjs.Level_321Code.GDShape4Objects2.length = 0;
gdjs.Level_321Code.GDShape4Objects3.length = 0;
gdjs.Level_321Code.GDShape4Objects4.length = 0;
gdjs.Level_321Code.GDScore_95TextObjects1.length = 0;
gdjs.Level_321Code.GDScore_95TextObjects2.length = 0;
gdjs.Level_321Code.GDScore_95TextObjects3.length = 0;
gdjs.Level_321Code.GDScore_95TextObjects4.length = 0;
gdjs.Level_321Code.GDObstacleObjects1.length = 0;
gdjs.Level_321Code.GDObstacleObjects2.length = 0;
gdjs.Level_321Code.GDObstacleObjects3.length = 0;
gdjs.Level_321Code.GDObstacleObjects4.length = 0;
gdjs.Level_321Code.GDLifeObjects1.length = 0;
gdjs.Level_321Code.GDLifeObjects2.length = 0;
gdjs.Level_321Code.GDLifeObjects3.length = 0;
gdjs.Level_321Code.GDLifeObjects4.length = 0;
gdjs.Level_321Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Level_321Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Level_321Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.Level_321Code.GDNewTiledSpriteObjects4.length = 0;
gdjs.Level_321Code.GDGameOverObjects1.length = 0;
gdjs.Level_321Code.GDGameOverObjects2.length = 0;
gdjs.Level_321Code.GDGameOverObjects3.length = 0;
gdjs.Level_321Code.GDGameOverObjects4.length = 0;
gdjs.Level_321Code.GDButtonTryAgainObjects1.length = 0;
gdjs.Level_321Code.GDButtonTryAgainObjects2.length = 0;
gdjs.Level_321Code.GDButtonTryAgainObjects3.length = 0;
gdjs.Level_321Code.GDButtonTryAgainObjects4.length = 0;
gdjs.Level_321Code.GDButtonMainMenuObjects1.length = 0;
gdjs.Level_321Code.GDButtonMainMenuObjects2.length = 0;
gdjs.Level_321Code.GDButtonMainMenuObjects3.length = 0;
gdjs.Level_321Code.GDButtonMainMenuObjects4.length = 0;

gdjs.Level_321Code.eventsList14(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
