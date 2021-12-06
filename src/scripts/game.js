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
        this.currentPlayer = gemini
        console.log(`the current player is ${this.currentPlayer.Zodiac}`)

        this.opponent = scorpio
        console.log(`the enemy is ${this.opponent.Zodiac}`)
    }

    startGame(currentPlayer, opponent) {
        //starts battle and calls gameLoop
        alert('this game has begun')

     
        //PLAYER      
        const attack = document.querySelector(".attack")
        const magick = document.querySelector(".magic")  
        const heal = document.querySelector(".heal")

        const hp = document.querySelector(".hp")
        const zodiactag = document.querySelector(".zodiac")
        const player = new Character(gemini, attack, magick, heal, hp, zodiactag)
        this.player = player;
        //ENEMY -- delete once AI is done
        const eAttack = document.querySelector(".enemy_attack")
        const eMagick = document.querySelector(".enemy_magic")
        const eHeal = document.querySelector(".enemy_heal")

        const eHp = document.querySelector(".enemy_hp")
        const eZodiacTag = document.querySelector(".enemy_zodiac")
        const enemy = new Character(scorpio, eAttack, eMagick, eHeal, eHp, eZodiacTag)
        this.enemy = enemy;


        this.gameLoop(player, enemy);
    }

    gameLoop(player, enemy) {
        //selectAction is called and current player makes the move
        //action is executed
        //calls gameOver on battle instance
        //if not over, switchTurn which resets current player and recall start, otherwise end game       

 
        // player.attacktag.addEventListener("click", enemy.attacked)
        player.attacktag.addEventListener("click", this.aiResponseAttack)
        player.magictag.addEventListener("click", this.aiResponseMagick)
        player.healtag.addEventListener("click", this.aiResponseHeal)

        // player.attacktag.addEventListener("click", this.enemyAttacks(player, enemy))
        // endTurn.addEventListener("click", this.switchTurn())

        enemy.attacktag.addEventListener("click", player.attacked)
        enemy.magictag.addEventListener("click", player.magicked)
        enemy.healtag.addEventListener("click", enemy.healed)

    }


    aiResponseAttack = () => {
        this.enemy.attacked();
        let waiting = document.createElement("div");
        waiting.innerHTML = " Waiting..."
        const zodiactag = document.querySelector(".zodiac")
        zodiactag.append(waiting)
        setTimeout(() => {
            if (this.enemy.hp < 30) {
                this.player.magicked();
                waiting.style = "display: none"
            } else {
                this.player.attacked();
                waiting.style = "display: none"
            }
        }, 2000);

        if (this.player.hp === 0 || this.enemy.hp === 0) {
            this.stopGame();
        }
    }

    aiResponseMagick = () => {
        this.enemy.magicked();
        let waiting = document.createElement("div");
        waiting.innerHTML = " Waiting..."
        const zodiactag = document.querySelector(".zodiac")
        zodiactag.append(waiting)
        setTimeout(() => {
            if (this.enemy.hp < 30) {
                this.player.magicked();
                waiting.style = "display: none"
            } else {
                this.player.attacked();
                waiting.style = "display: none"
            }
        }, 2000);
    }

    aiResponseHeal = () => {
        this.player.healed();
        let waiting = document.createElement("div");
        waiting.innerHTML = " Waiting..."
        const zodiactag = document.querySelector(".zodiac")
        zodiactag.append(waiting)
        setTimeout(() => {
            if (this.enemy.hp < 20) {
                this.player.magicked();
                waiting.style = "display: none"
            } else {
                this.player.attacked();
                waiting.style = "display: none"
            }
        }, 2000);
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



    switchTurn() {
        //switches current player after each execution of action
        // currentPlayer = Battle.player ? Battle.enemy : Battle.player;
        //needs a catalyst action which will acknowledge which action you want to use and who to use it on
        console.log('the current players turn is over')
    }


    stopGame() {
        //called when it's game over
        alert('This game has been stopped')
        
    }

    //////TESTING////

    // showPlayerButtons() {
    //     attack.disabled = false;
    //     magick.disabled = false;
    //     heal.disabled = false;

    // }

    // fight() {
    //     this.enemyAttacks();
    //     this.hpChange();
    //     this.gameOver();
    // }

    // enemyAttacks() {
    //     console.log(`${enemy.zodiacName} is now attacking you`)
    //     setTimeout(() => {player.magicked()}, 5000);
    // }

    // hpChange() {
    //     player.hptag.innerHTML = `HP: ${player.hp}`
    //     enemy.hptag.innerHTML = `HP: ${enemy.hp}`
    // }

    // gameOver(player) {
    //     console.log("player", player)

    //     if (player.hp <= 0) {
    //         alert('Game Over')
    //         return true
    //     } else {
    //         return false
    //     }
    //     // alert('reached game over')
    // }

}

// module.exports = Game;
export default Game;