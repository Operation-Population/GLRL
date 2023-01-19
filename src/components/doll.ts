export function createDoll():void{
    const doll = new Entity();
    engine.addEntity(doll);

    doll.addComponent(new GLTFShape("models/RedLightGreenLight_Asset_DollBody.glb"));
    doll.addComponent(new Transform({ 
        position: new Vector3(21.18, 7, 36.5),
        scale: new Vector3(1.000, 1.000, 1.000),
        rotation: new Quaternion().setEuler(0.000, 180.000, 0.000)
    }));

//     doll.addComponent(new GLTFShape("models/RedLightGreenLight_Asset_DollHead.glb"));
//     doll.addComponent(new Transform({ position: new Vector3(21.18, 10.8, 24.5) }));
}