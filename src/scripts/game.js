/* 
 //initialize game
 //use sync await?
 //use on complete and resolve?
 //use that resolve?
*/
// const Battle = require("./battle");
import Battle from "./battle"
// const Character = require("./character.js");
import Character from "./character";

const gemini = {
    "Zodiac": "Gemini",
    "HP": 100,
    "MP": 50,
    "Magic": "Nether Storm",
    "MagicDamage": 50,
    "Vulnerability": "Pisces",
    "Element": "Air"
    }

const scorpio = {
    "Zodiac": "Scorpio",
    "HP": 100,
    "MP": 50,
    "Magic": "Shadow Rage",
    "MagicDamage": 50,
    "Vulnerability": "Leo",
    "Element": "Water"
    }

class Game {
    constructor() {
        // //sets up the game
        // this.battle = new Battle(gemini)
        this.currentPlayer = gemini
        console.log(`the current player is ${this.currentPlayer.Zodiac}`)

        this.opponent = scorpio
        console.log(`the enemy is ${this.opponent.Zodiac}`)
        // this.gameLoop = this.gameLoop
    }

    startGame(currentPlayer, opponent) {
        //starts battle and calls gameLoop
        alert('this game has begun')

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
        const endTurn = document.querySelector(".end_turn")
        
        const attack = document.querySelector(".attack")
        const magick = document.querySelector(".magic")  
        const heal = document.querySelector(".heal")

        const hp = document.querySelector(".hp")
        const zodiactag = document.querySelector(".zodiac")
        const player = new Character(gemini, attack, magick, heal, hp, zodiactag)
        
        //ENEMY
        const eAttack = document.querySelector(".enemy_attack")
        const eMagick = document.querySelector(".enemy_magic")
        const eHeal = document.querySelector(".enemy_heal")

        const eHp = document.querySelector(".enemy_hp")
        const eZodiacTag = document.querySelector(".enemy_zodiac")
        const enemy = new Character(scorpio, eAttack, eMagick, eHeal, eHp, eZodiacTag)
        
    
        // //EVENT LISTENERS
        // attack.addEventListener("click", enemy.attacked)
        // magick.addEventListener("click", enemy.magicked)
        // heal.addEventListener("click", player.healed)

        // eAttack.addEventListener("click", player.attacked)
        // eMagick.addEventListener("click", player.magicked)
        // eHeal.addEventListener("click", enemy.healed)

        this.gameLoop(player, enemy, endTurn);
    }

    gameLoop(player, enemy, endTurn) {
        //selectAction is called and current player makes the move
        //action is executed
        //calls gameOver on battle instance
        //if not over, switchTurn which resets current player and recall start, otherwise end game       

 
        player.attacktag.addEventListener("click", enemy.attacked)
        player.magictag.addEventListener("click", enemy.magicked)
        player.healtag.addEventListener("click", player.healed)

        player.attacktag.addEventListener("click", this.enemyAttacks(player, enemy))
        endTurn.addEventListener("click", this.switchTurn())

        enemy.attacktag.addEventListener("click", player.attacked)
        enemy.magictag.addEventListener("click", player.magicked)
        enemy.healtag.addEventListener("click", enemy.healed)

    }

    selectAction(player, enemy) {
        //prompts character to select an action
        //where queryselectors and event listeners may live?
        alert(`please select an action`)
        // //EVENT LISTENERS
        // player.attacktag.addEventListener("click", enemy.attacked)
        // player.magictag.addEventListener("click", enemy.magicked)
        // player.healtag.addEventListener("click", player.healed)

        // enemy.attacktag.addEventListener("click", player.attacked)
        // enemy.magictag.addEventListener("click", player.magicked)
        // enemy.healtag.addEventListener("click", enemy.healed)

        // player.hp = 0;
        

    }

    enemyAttacks(player, enemy) {
        setTimeout(() => {alert(`${enemy.zodiacName} is now attacking you`)}, 5000);
        setTimeout(() => {player.magicked()});
    }


    switchTurn() {
        //switches current player after each execution of action
        // currentPlayer = Battle.player ? Battle.enemy : Battle.player;
        //needs a catalyst action which will acknowledge which action you want to use and who to use it on
        console.log('the current players turn is over')
    }

    gameOver(player) {
        console.log("player", player)

        if (player.hp <= 0) {
            alert('Game Over')
            return true
        } else {
            return false
        }
        // alert('reached game over')
    }

    stopGame() {
        //called when it's game over
        alert('This game has been stopped')
    }
}

// module.exports = Game;
export default Game;