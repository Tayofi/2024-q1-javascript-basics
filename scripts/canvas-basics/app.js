//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("bideo-game");
/** @type {CanvasRenderingContext2D} */
//@ts-ignore ctx is an canvasrenderingcontext2d
const ctx = canvas.getContext("2d");



ctx.fillStyle = "hsla(261, 100%, 78%"
//"#f2e4fd" 
//"blue"



let lastTime = 0;

let hue =0;

let x1=30;
let y1=30;
let aniSpeed = 1;
function drawLoop(timestamp) {
let elapsedTime = timestamp-lastTime
lastTime=timestamp
ctx.fillStyle = `hsla(${hue}, 100%, 78%, 100%`
ctx.fillRect(0, 0,50,100);
ctx.fillRect(200, 0,50,100);
ctx.fillRect(0, 300,250,50);
ctx.fillRect(0, 250,50,50);
ctx.fillRect(200, 250,50,50);

ctx.beginPath();
ctx.arc(500,500, 250, 0, Math.PI * 2);
ctx.fill();

hue=hue+1; 

//console.log(elapsedTime);
window.requestAnimationFrame(drawLoop);
}

window.requestAnimationFrame(drawLoop);