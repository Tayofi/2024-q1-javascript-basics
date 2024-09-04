//@ts-check

let playerControls = document.getElementById("player-controls");
let btnRock = document.getElementById("btn-rock");
let btnPaper = document.getElementById("btn-paper");
let btnscissors = document.getElementById("btn-scissors");

function rockClicked(name) {
console.log("Rock was selected")
};
btnRock?.addEventListener("click", rockClicked);

function scissorsClicked(name) {
console.log("Scissors was selected")
};
btnscissors?.addEventListener("click", scissorsClicked);

    function paperClicked(name) {
console.log("Paper was selected")
};
btnPaper?.addEventListener("click", paperClicked)
    