import Car from "./Car.js";

const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);

car.draw(ctx);


