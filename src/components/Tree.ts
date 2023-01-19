export function createTree():void{
    const tree = new Entity();
    engine.addEntity(tree);

    tree.addComponent(new GLTFShape("models/RedLightGreenLight_Asset_Tree.glb"));
    tree.addComponent(new Transform({ 
        position: new Vector3(21.18, 0, 40.5),
        scale: new Vector3(2.000, 1.000, 1.000),
        rotation: new Quaternion().setEuler(0.000, 0.000, 0.000)
     }));
}