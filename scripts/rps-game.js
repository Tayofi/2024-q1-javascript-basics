//@ts-check

let playerControls = document.getElementById("player-controls");
/**
 * @type{HTMLElement}
 */
//@ts-ignore
let gameResultHeader = document.getElementById("gameResults");

/**
 * @type{HTMLElement}
 */
//@ts-ignore
let gameRestartHandler = document.getElementById("gameRestart");
gameResultHeader.innerText = "hey There!";
let isGameOver = false;

let weapons = [
{
    type: "Rock",
    beats: "Scissors",
},{
    type: "Scissors",
    beats: "Paper"
},{
    type: "Paper",
    beats: "Rock"
}

]

function chooserRandomWeapon(weapons){
    let rand = Math.floor(Math.random()*weapons.length);
    return weapons[rand];
}

function determineOutcome(playerWeapon, computerWeapon){
if (playerWeapon.type === computerWeapon.type){
    
    return "It's a tie cause yur bad";
}
isGameOver = true
if(playerWeapon.beats === computerWeapon.type){
    
    return `you won wooooow ${playerWeapon.type} beats ${computerWeapon.type}`
}
return `L bozo your awful at this ${computerWeapon.type} beats ${playerWeapon.type}`;

}

function playerControlHandler(evente){
if (isGameOver = false){return;}
let weaponName = evente.target.innerText
let playerWeapon = weapons.find(w => w.type === weaponName )
if (!playerWeapon) {
    console.log("nuh uh")
}
    
    let computerWeapon = chooserRandomWeapon(weapons)
    let result = determineOutcome(playerWeapon, computerWeapon)
    result = gameResultHeader.innerText;
    console.log (result)
}
 function playerRestartHandler(evente){
if(evente.target.id === "btnRestart"){
    isGameOver = false
    showPlayerControls()
    gameResultHeader.innerText=""
}
 }
function showRestart(){
    gameRestartHandler.style.display = "initial";
    playerControls?.style.display = "none";
}
function showPlayerControls(){gameRestartHandler.style.display = "none";
    playerControls?.style.display = "initial";}
playerControls?.addEventListener("click", playerControlHandler);

    //man, I'm sleepy