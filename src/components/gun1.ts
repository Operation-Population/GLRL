export function createGun1():void{
    const tree = new Entity();
    engine.addEntity(tree);

    tree.addComponent(new GLTFShape("models/RedLightGreenLight_Asset_Gun.glb"));
    tree.addComponent(new Transform({
         position: new Vector3(12.18, 1, 45.000),
         scale: new Vector3(1.000, 1.000, 1.000),
        rotation: new Quaternion().setEuler(0.000, 0.000, 0.000) 
        }));
}