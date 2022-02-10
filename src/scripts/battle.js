import Character from "./character";


let zodiacs = require('./zodiacs').zodiacs


class Battle {
    constructor(character) {
        this.gameState = 0;
        if (this.gameState === 0) {
            const modal = document.querySelector(".modal")
            modal.addEventListener("click", () =>{
                modal.style = "display: none"
                this.gameState += 1
            })
        }

        this.character = character

        let player = zodiacs[character]
        let generated = zodiacs[Math.floor(Math.random() * 12)]
        // console.log("hello this is battle")


        this.player = new Character(player)
        this.opponent = new Character(generated)
        // this.player.hp = 100
        // this.opponent.hp = 100
        this.ZodiacHPTag = null;
        this.ZodiacMPTag = null;
        this.OpponentHPTag = null;

        // console.log(this.player)
        // console.log(this.opponent)
        // console.log(`player is ${this.player.name}`)
        // console.log(`opponent is ${this.opponent.name}`)
        // console.log(`the hp of ${this.player.name} is ${this.player.hp}`)
        // console.log(`the hp of ${this.opponent.name} is ${this.player.hp}`)
        
        
        this.init()
    }

    
    init() {
        const attack = document.querySelector(".attack")
        const magick = document.querySelector(".magic")  
        const heal = document.querySelector(".heal")

        attack.addEventListener("click", this.aiResponseAttack)
        magick.addEventListener("click", this.aiResponseMagick)
        heal.addEventListener("click", this.aiResponseHeal)

        const zodiacName = document.querySelector(".zodiac")
        zodiacName.innerHTML = this.player.name
        this.ZodiacHPTag = document.querySelector(".hp-gauge-bar")
        this.ZodiacHPTag.innerHTML = this.player.hp
        this.ZodiacMPTag = document.querySelector(".mp-gauge-bar")
        this.ZodiacMPTag.innerHTML = this.player.mp

        const opponentName = document.querySelector(".enemy_zodiac")
        opponentName.innerHTML = this.opponent.name
        this.OpponentHPTag = document.querySelector(".enemy_hp")
        this.OpponentHPTag.innerHTML = this.opponent.hp
    }

    resetBattle = (zodiacId = this.character) => {
        this.character = zodiacId
        this.player = new Character(zodiacs[this.character])
        // this.player = new Character(zodiacs[this.character])
        this.opponent = new Character(zodiacs[Math.floor(Math.random() * 12)])
        

        /*start battle rendering*/
        let container = document.querySelector(".command-panel")
        let enemyContainer = document.querySelector(".enemy")
        container.style = "display: block"
        enemyContainer.style = "display: block"

        let command = document.querySelector(".command")
        command.style = "display: flex"

        let selector = document.querySelector(".modal")
        selector.style = "display: none"
        let won = document.querySelector(".won")
        let lost = document.querySelector(".lost")

        let playerHP = document.querySelector(".hp-gauge-bar")
        let enemyHP = document.querySelector(".enemy_hp")
        let playerName = document.querySelector(".zodiac")
        let enemyName = document.querySelector(".enemy_zodiac")
        playerHP.style = "display: flex"
        enemyHP.style = "display: flex"
        playerName.style = "display: flex"
        enemyName.style = "display: flex"

        /*start battle rendering - ending */

        this.init();
    }

    aiResponseAttack = () => {
        this.opponent.attacked();
        this.OpponentHPTag.innerHTML = this.opponent.hp
        // let waiting = document.createElement("div");
        // waiting.innerHTML = " Waiting..."
        const zodiactag = document.querySelector(".zodiac")
        // zodiactag.append(waiting)
        // setTimeout(() => {
            
            if (this.opponent.hp < 30) {
                this.player.magicked();
                this.ZodiacHPTag.innerHTML = this.player.hp
                // waiting.style = "display: none"
            } else {
                this.player.attacked();
                this.ZodiacHPTag.innerHTML = this.player.hp
                // waiting.style = "display: none"
            }
            // console.log(`the current state is ${this.gameState}`)
            
            if (this.player.hp === 0) {
                this.gameOver();
                // console.log(`state after game over is ${this.gameState}`)
            } else if (this.opponent.hp === 0) {
                this.gameWon();
                // console.log(`state after game won is ${this.gameState}`)
            }
    
            // console.log(`state outside ${this.gameState}`)
            
        // }, 5000);


    }


    aiResponseMagick = () => {
        
        // console.log(this.opponent.hp, this.player.hp)
        this.opponent.magicked();
        this.OpponentHPTag.innerHTML = this.opponent.hp
        // let waiting = document.createElement("div");
        // waiting.innerHTML = " Waiting..."
        const zodiactag = document.querySelector(".zodiac")
        // zodiactag.append(waiting)
        // setTimeout(() => {
            if (this.opponent.hp < 30) {
                this.player.magicked();
                this.ZodiacHPTag.innerHTML = this.player.hp
                // waiting.style = "display: none"
            } else {
                this.player.attacked();
                this.ZodiacHPTag.innerHTML = this.player.hp
                // waiting.style = "display: none"
            }

            // console.log(`the current state is ${this.gameState}`)

            if (this.player.hp === 0) {
                this.gameOver();
                // console.log(`state after game over is ${this.gameState}`)
            } else if (this.opponent.hp === 0) {
                this.gameWon();
                // console.log(`state after game won is ${this.gameState}`)
            }
    
            // console.log(`state outside ${this.gameState}`)

        // }, 1000);


    }

    aiResponseHeal = () => {
        
        this.player.healed();
        
        this.ZodiacHPTag.innerHTML = this.player.hp
        // let waiting = document.createElement("div");
        // waiting.innerHTML = " Waiting..."
        const zodiactag = document.querySelector(".zodiac")
        // zodiactag.append(waiting)
        // setTimeout(() => {
            if (this.opponent.hp < 20) {
                this.player.magicked();
                this.ZodiacHPTag.innerHTML = this.player.hp
                // waiting.style = "display: none"
            } else {
                this.player.attacked();
                this.ZodiacHPTag.innerHTML = this.player.hp
                // waiting.style = "display: none"
            }

            
            // console.log(`the current state is ${this.gameState}`)

            if (this.player.hp === 0) {
                this.gameOver();
                // console.log(`state after game over is ${this.gameState}`)
            } else if (this.opponent.hp === 0) {
                this.gameWon();
                // console.log(`state after game won is ${this.gameState}`)
            }
    
            // console.log(`state outside ${this.gameState}`)
        // }, 1000);

    }


    gameOver() {
        this.gameState += 1;
        const lost = document.querySelector(".lost")
        
        lost.style = "display: block"

        return true;
    }

    gameWon() {
        this.gameState += 1;
        const won = document.querySelector(".won")
        won.style = "display: block"

       return true;
    }
    // whoIsCurrentPlayer() {
    //     let current = this.currentPlayer
    //     if (current === this.currentPlayer) {
    //         current = this.opponent
    //     } else {
    //         current = this.currentPlayer
    //     }
    // }
    


}

export default Battle;

    


