export default class Car {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.rect(
      this.x-this.width/2,
      this.y-this.height/2,
      this.width,
      this.height
    )
    ctx.fill();
  }
}
