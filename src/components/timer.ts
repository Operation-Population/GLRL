export function createTimer(): void {
    const timer = new Entity();
    engine.addEntity(timer);

    timer.addComponent(new GLTFShape("models/RedLightGreenLight_Asset_Timer.glb"));
    timer.addComponent(new Transform({
        position: new Vector3(34.18, 7, 46.000),
        scale: new Vector3(1.000, 1.000, 1.000),
        rotation: new Quaternion().setEuler(0.000, 0.000, 0.000)
    }));
    timer.addComponent(new TextShape(formatTimeString(5)));
    timer.getComponent(TextShape).color = Color3.White();
    timer.getComponent(TextShape).fontSize = 7;
}
function formatTimeString(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return (
      mins.toLocaleString(undefined, { minimumIntegerDigits: 2 }) +
      ":" +
      secs.toLocaleString(undefined, { minimumIntegerDigits: 2 })
    );
  }