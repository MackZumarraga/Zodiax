import Battle from "./battle"


class Game {
    constructor() {
 
        this.init();

    }


    startGame(character = 0) {
        this.battle = new Battle(character);

        let selector = document.querySelector(".main")
        selector.style = "display: none"

        
        if (this.battle.gameState === 0 || this.battle.gameState === 0) {
            console.log("game over or won")
            const restartWon = document.querySelector("won")
            const restartLost = document.querySelector("lost")

            restartWon.addEventListener("click", () => {
                this.init();
            })

            restartLost.addEventListener("click", () => {
                this.init();
            })
        }
        
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