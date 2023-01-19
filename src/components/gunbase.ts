export function createGunBase():void{
    const tree = new Entity();
    engine.addEntity(tree);

    tree.addComponent(new GLTFShape("models/RedLightGreenLight_Asset_GunBase.glb"));
    tree.addComponent(new Transform({
         position: new Vector3(21.18, 1, 46.5),
         scale: new Vector3(16.000, 8.000, 2.000),
        rotation: new Quaternion().setEuler(0.000, 0.000, 0.000) 
        }));
}