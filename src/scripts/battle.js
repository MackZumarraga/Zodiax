import Character from "./character";


let zodiacs = require('./zodiacs').zodiacs


class Battle {
    constructor(character) {
        this.gameState = 0;
        if (this.gameState === 0) {
            const main = document.querySelector(".main")
            main.addEventListener("click", () =>{
                main.style = "display: none"
                this.gameState += 1
            })
        }

        // const aries = document.getElementById("0")
        // let selectedZodiac;

        // aries.addEventListener("click", () => {
        //     selectedZodiac = 0
        // })
        

        // const player = zodiacs[selectedZodiac]
        const player = zodiacs[character]
        const generated = zodiacs[Math.floor(Math.random() * 13)]
        console.log("hello this is battle")


        this.player = new Character(player)
        this.opponent = new Character(generated)
        this.ZodiacHPTag = null;
        this.OpponentHPTag = null;

        console.log(this.player)
        console.log(this.opponent)
        console.log(`this is ${this.player.name}`)
        console.log(`this is ${this.opponent.name}`)
        console.log(`the hp of current player is ${this.player.hp}`)
        console.log(`the hp after attacked is ${this.player.hp - 33}`)
        
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
        this.ZodiacHPTag = document.querySelector(".hp")
        this.ZodiacHPTag.innerHTML = this.player.hp

        const opponentName = document.querySelector(".enemy_zodiac")
        opponentName.innerHTML = this.opponent.name
        this.OpponentHPTag = document.querySelector(".enemy_hp")
        this.OpponentHPTag.innerHTML = this.opponent.hp
    }

    aiResponseAttack = () => {
        this.opponent.attacked();
        this.OpponentHPTag.innerHTML = this.opponent.hp
        let waiting = document.createElement("div");
        waiting.innerHTML = " Waiting..."
        const zodiactag = document.querySelector(".zodiac")
        zodiactag.append(waiting)
        setTimeout(() => {
            if (this.opponent.hp < 30) {
                this.player.magicked();
                this.ZodiacHPTag.innerHTML = this.player.hp
                waiting.style = "display: none"
            } else {
                this.player.attacked();
                this.ZodiacHPTag.innerHTML = this.player.hp
                waiting.style = "display: none"
            }
            console.log(`the current state is ${this.gameState}`)

            if (this.player.hp === 0) {
                this.gameOver();
                console.log(`state after game over is ${this.gameState}`)
            } else if (this.opponent.hp === 0) {
                this.gameWon();
                console.log(`state after game won is ${this.gameState}`)
            }
    
            console.log(`state outside ${this.gameState}`)
            
        }, 1000);


    }


    aiResponseMagick = () => {
        this.opponent.magicked();
        this.OpponentHPTag.innerHTML = this.opponent.hp
        let waiting = document.createElement("div");
        waiting.innerHTML = " Waiting..."
        const zodiactag = document.querySelector(".zodiac")
        zodiactag.append(waiting)
        setTimeout(() => {
            if (this.opponent.hp < 30) {
                this.player.magicked();
                this.ZodiacHPTag.innerHTML = this.player.hp
                waiting.style = "display: none"
            } else {
                this.player.attacked();
                this.ZodiacHPTag.innerHTML = this.player.hp
                waiting.style = "display: none"
            }

            console.log(`the current state is ${this.gameState}`)

            if (this.player.hp === 0) {
                this.gameOver();
                console.log(`state after game over is ${this.gameState}`)
            } else if (this.opponent.hp === 0) {
                this.gameWon();
                console.log(`state after game won is ${this.gameState}`)
            }
    
            console.log(`state outside ${this.gameState}`)

        }, 1000);


    }

    aiResponseHeal = () => {
        this.player.healed();
        this.ZodiacHPTag.innerHTML = this.player.hp
        let waiting = document.createElement("div");
        waiting.innerHTML = " Waiting..."
        const zodiactag = document.querySelector(".zodiac")
        zodiactag.append(waiting)
        setTimeout(() => {
            if (this.opponent.hp < 20) {
                this.player.magicked();
                this.ZodiacHPTag.innerHTML = this.player.hp
                waiting.style = "display: none"
            } else {
                this.player.attacked();
                this.ZodiacHPTag.innerHTML = this.player.hp
                waiting.style = "display: none"
            }


            console.log(`the current state is ${this.gameState}`)

            if (this.player.hp === 0) {
                this.gameOver();
                console.log(`state after game over is ${this.gameState}`)
            } else if (this.opponent.hp === 0) {
                this.gameWon();
                console.log(`state after game won is ${this.gameState}`)
            }
    
            console.log(`state outside ${this.gameState}`)
        }, 1000);

    }


    gameOver() {
        this.gameState += 1;
        const lost = document.querySelector(".lost")
        lost.style = "display: block"
    }

    gameWon() {
        this.gameState = 0;
        const won = document.querySelector(".won")
        won.style = "display: block"
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

    


//     createArena() {
//         //pseudo code that creates the battle arena
//         //displays parties
//     }

//     inject() {
//         //inject the dom created to some container
//     }


//
// }   

// export default Battle;
// module.exports = Battle;