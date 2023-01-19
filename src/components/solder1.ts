export function createSolder1():void{
    const tree = new Entity();
    engine.addEntity(tree);

    tree.addComponent(new GLTFShape("models/RedLightGreenLight_Asset_Soldier.glb"));
    tree.addComponent(new Transform({
        position: new Vector3(18.18, 0.100, 36.5),
         scale: new Vector3(1.000, 1.000, 1.000),
        rotation: new Quaternion().setEuler(0.000, 180.000, 0.000) 
        }));
}