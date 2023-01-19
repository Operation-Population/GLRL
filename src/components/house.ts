export function createHouse(): void {
    const house = new Entity();
    engine.addEntity(house);

    house.addComponent(new GLTFShape("models/RedLightGreenLight_Asset_House.glb"));
    house.addComponent(new Transform({
        position: new Vector3(21, 0, 40.5),
        scale: new Vector3(1.000, 1.000, 1.000),
        rotation: new Quaternion().setEuler(0.000, 180.000, 0.000)
    })
    );
}