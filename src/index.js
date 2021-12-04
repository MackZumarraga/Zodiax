// import Test from "./scripts/test";
import Character from "./scripts/character";

document.addEventListener("DOMContentLoaded", () => {
    // const h1 = document.querySelector("h1")
    // const test = new Test(h1)
    const scorpio = {
        "Zodiac": "Scorpio",
        "HP": 100,
        "MP": 50,
        "Magic": "Shadow Rage",
        "MagicDamage": 50,
        "Vulnerability": "Leo",
        "Element": "Water"
      }

    const gemini = {
        "Zodiac": "Gemini",
        "HP": 100,
        "MP": 50,
        "Magic": "Nether Storm",
        "MagicDamage": 50,
        "Vulnerability": "Pisces",
        "Element": "Air"
      }

    //PLAYER  
    // const attack = document.querySelector(".enemy_attack")
    // const magic = document.querySelector(".magic")
    // const heal = document.querySelector(".heal")
    const attack = document.querySelector(".attack")
    const magick = document.querySelector(".magic")  
    const heal = document.querySelector(".heal")

    const hp = document.querySelector(".hp")
    const zodiactag = document.querySelector(".zodiac")
    const player = new Character(gemini, attack, magick, heal, hp, zodiactag)
    
    //ENEMY
    // const e_attack = document.querySelector(".attack")
    // const e_magic = document.querySelector(".enemy_magic")
    // const e_heal = document.querySelector(".enemy_heal")
    const e_attack = document.querySelector(".enemy_attack")
    const e_magick = document.querySelector(".enemy_magic")
    const e_heal = document.querySelector(".enemy_heal")

    const e_hp = document.querySelector(".enemy_hp")
    const e_zodiactag = document.querySelector(".enemy_zodiac")
    const enemy = new Character(scorpio, e_attack, e_magick, e_heal, e_hp, e_zodiactag)
    
 
    //EVENT LISTENERS
    attack.addEventListener("click", enemy.attacked)
    magick.addEventListener("click", enemy.magicked)
    heal.addEventListener("click", player.healed)

    e_attack.addEventListener("click", player.attacked)
    e_magick.addEventListener("click", player.magicked)
    e_heal.addEventListener("click", enemy.healed)

    //MAGIC (player to enemy)
    // const hitenemy = document.querySelector(".hitenemy")
    // hitenemy.addEventListener("click", enemy.attacked)
    
    
 




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
