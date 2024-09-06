//@ts-check

let playerControls = document.getElementById("player-controls");
let btnRock = document.getElementById("btn-rock");
let btnPaper = document.getElementById("btn-paper");
let btnscissors = document.getElementById("btn-scissors");



function playerControlHandler(evente){
    console.log(evente.target.innerText);
}
    playerControls?.addEventListener("click", playerControlHandler);