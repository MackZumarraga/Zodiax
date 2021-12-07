/* 
 //initialize game
 //use sync await?
 //use on complete and resolve?
 //use that resolve?
*/
// const Battle = require("./battle");
import Battle from "./battle"
// const Character = require("./character.js");
// import Character from "./character";

// let zodiacs = require('./zodiacs').zodiacs
// console.log(zodiacs)
// console.log(zodiacs[0])

// const gemini = {
//     "Zodiac": "Gemini",
//     "HP": 100,
//     "MP": 50,
//     "Magic": "Nether Storm",
//     "MagicDamage": 50,
//     "Vulnerability": "Pisces",
//     "Element": "Air"
//     }

// const scorpio = {
//     "Zodiac": "Scorpio",
//     "HP": 100,
//     "MP": 50,
//     "Magic": "Shadow Rage",
//     "MagicDamage": 50,
//     "Vulnerability": "Leo",
//     "Element": "Water"
//     }
// const chosen = zodiacs[Math.floor(Math.random() * 13)]
// const generated = zodiacs[Math.floor(Math.random() * 13)]

class Game {
    constructor() {
        // this.currentPlayer = chosen
        // console.log(`the current player is ${this.currentPlayer.Zodiac}`)

        // this.opponent = generated
        // console.log(`the enemy is ${this.opponent.Zodiac}`)
        // this.battle = new Battle()
        // console.log("hello this is game")
        this.init();
    }

    gameOver() {
        
    }

    startGame(character = 0) {
        this.battle = new Battle(character);

        let selector = document.querySelector(".main")
        selector.style = "display: none"
    }

    init() {
        const aries = document.getElementById('0')
        aries.addEventListener("click", () => {
            let ariesId = 0;
            this.startGame(ariesId);
        })

        const taurus = document.getElementById('1')
        taurus.addEventListener("click", () => {
            let taurusId = 1;
            this.startGame(taurusId);
        })

        const gemini = document.getElementById('2')
        gemini.addEventListener("click", () => {
            let geminiId = 2;
            this.startGame(geminiId);
        })

        const cancer = document.getElementById('3')
        cancer.addEventListener("click", () => {
            let cancerId = 3;
            this.startGame(cancerId);
        })

        const leo = document.getElementById('4')
        leo.addEventListener("click", () => {
            let leoId = 4;
            this.startGame(leoId);
        })

        const virgo = document.getElementById('5')
        virgo.addEventListener("click", () => {
            let virgoId = 5;
            this.startGame(virgoId);
        })

        const libra = document.getElementById('6')
        libra.addEventListener("click", () => {
            let libraId = 6;
            this.startGame(libraId);
        })

        const scorpio = document.getElementById('7')
        scorpio.addEventListener("click", () => {
            let scorpioId = 7;
            this.startGame(scorpioId);
        })

        const sagittarius = document.getElementById('8')
        sagittarius.addEventListener("click", () => {
            let sagittariusId = 8;
            this.startGame(sagittariusId);
        })

        const capricorn = document.getElementById('9')
        capricorn.addEventListener("click", () => {
            let capricornId = 9;
            this.startGame(capricornId);
        })
        
        const aquarius = document.getElementById('10')
        aquarius.addEventListener("click", () => {
            let aquariusId = 10;
            this.startGame(aquariusId);
        })

        const pisces = document.getElementById('11')
        pisces.addEventListener("click", () => {
            let piscesId = 11;
            this.startGame(piscesId);
        })
    }

}

// module.exports = Game;
export default Game;