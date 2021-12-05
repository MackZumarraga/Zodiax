// import Test from "./scripts/test";
import Character from "./scripts/character";
// const Game = require("./scripts/game");
import Game from "./scripts/game";

document.addEventListener("DOMContentLoaded", () => {
    
    const gemini = {
        "Zodiac": "Gemini",
        "HP": 100,
        "MP": 50,
        "Magic": "Nether Storm",
        "MagicDamage": 50,
        "Vulnerability": "Pisces",
        "Element": "Air"
        }

    //INITIALIZE GAME//
    const game = new Game(gemini);
    game.startGame(); //supposed to start battle with chosen characters
   
    

    //GAMELOOP//

    // alert("The game has begun")
    // let currentPlayer = player
    // alert(`choose an action ${currentPlayer.zodiacName}!`)
    // while (currentPlayer.hp >= 0) {
    //     currentPlayer === player ? currentPlayer = enemy : currentPlayer = player
    // if (currentPlayer.hp <= 0) {
    //     alert(`game over!`)
    // }
    //AI//





    ////CANVAS////
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // canvas.width = 500;
    // canvas.height = 500;

    let c = canvas.getContext('2d');

    c.fillStyle = "purple"
    c.fillRect(400, 300, 50, 50);
    c.fillStyle = "green"
    c.fillRect(400, 500, 50, 50);
    // c.fillStyle = ("gold");
    console.log("reached me")
    console.log(canvas)
    console.log(c)


});



 /*DESIRED LAYOUT
 const Battle = require("./scripts/battle");
 const Animation = require("./scripts/animation");

 document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas")
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext('2d');
    const game = new Battle();
    new Animation(game, c).start();
 })
 */
