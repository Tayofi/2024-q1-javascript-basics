//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("bideo-game");
/** @type {CanvasRenderingContext2D} */
//@ts-ignore ctx is an canvasrenderingcontext2d
const ctx = canvas.getContext("2d");

ctx.fillRect(0, 0,50,100);
ctx.fillRect(200, 0,50,100);
ctx.fillRect(0, 300,250,50);
ctx.fillRect(0, 250,50,50);
ctx.fillRect(200, 250,50,50);


ctx.beginPath();
ctx.arc(500,500, 250, 0, Math.PI * 2);
ctx.fill();