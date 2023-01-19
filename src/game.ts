// import { Dash_TriggerZone, Dash_Tweaker } from "dcldash"

import { createDoll } from "./components/doll";
import { createGun1 } from "./components/gun1";
import { createGun2 } from "./components/gun2";
import { createGunBase } from "./components/gunbase";
import { createHouse } from "./components/house";
import { createDollHead } from "./components/rotatingDollHead";
import { createSolder1 } from "./components/solder1";
import { createSoldier } from "./components/soldier";
import { createTimer } from "./components/timer";
import { createTree } from "./components/Tree";


// //System Creation
// class CheckSystem implements ISystem {
//   update(dt: number): void {

//     //Write here the logic for cheking if the position of avatar has modified



//   }
// }
// //The system needs to be added to engine when ready, uncomment the line below
// engine.addSystem(new CheckSystem())
const baseScene = new Entity();
engine.addEntity(baseScene);

baseScene.addComponent(new GLTFShape("../models/RedLightGreenLight_Environment.glb"));

createDoll();
createDollHead();
// createHouse();
createTree();
createSolder1();
createSoldier();
createGunBase();
createGun1();
createGun2();
createTimer();