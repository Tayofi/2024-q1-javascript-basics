//@ts-check
import { circle } from "./shapes/circle.js";
import { Squaare } from "./shapes/square.js";
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("bideo-game");
/** @type {CanvasRenderingContext2D} */
//@ts-ignore ctx is an canvasrenderingcontext2d
const ctx = canvas.getContext("2d");




let c1 = new circle(0,0, ctx, canvas);
let shapes = [];
for (let i = 0; i < 100; i++){
    shapes.push(new circle(0,0));
} 
    
let s1 = new Squaare(0,0, ctx, canvas);

for (let i = 0; i < 100; i++){
    shapes.push(new Squaare(0,0));
} 
let lastTime = 0;


function drawLoop(timestamp) {
ctx.clearRect(0, 0, canvas.width, canvas.height);
    let elapsedTime = timestamp-lastTime
lastTime=timestamp

c1.draw();
c1.update();
for (const shape of shapes){
    shape.update();
    shape.draw();
}
window.requestAnimationFrame(drawLoop);
}

window.requestAnimationFrame(drawLoop);

