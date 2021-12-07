import Battle from "./battle"


class Game {
    constructor() {
        this.init = this.init.bind(this)
 
        this.init();

    }


    startGame(character = 0) {
        this.battle = new Battle(character);

        let container = document.querySelector("container")
        let enemyContainer = document.querySelector("enemy")
        container.style = "display: block"
        enemyContainer.style = "display: block"

        let command = document.querySelector(".command")
        command.style = "display: flex"

        let selector = document.querySelector(".main")
        selector.style = "display: none"
        let won = document.querySelector(".won")
        let lost = document.querySelector(".lost")

        let playerHP = document.querySelector(".hp")
        let enemyHP = document.querySelector(".enemy_hp")
        let playerName = document.querySelector(".zodiac")
        let enemyName = document.querySelector(".enemy_zodiac")
        playerHP.style = "display: flex"
        enemyHP.style = "display: flex"
        playerName.style = "display: flex"
        enemyName.style = "display: flex"

        
        if (this.battle.gameState === 0 || this.battle.gameState === 0) {
            
            const restartWon = document.querySelector(".restart_won")
            const restartLost = document.querySelector(".restart_lost")

            restartWon.addEventListener("click", () => {
                container.style = "display: none"
                enemyContainer.style = "display: none"
                playerHP.style = "display: none"
                enemyHP.style = "display: none"
                playerName.style = "display: none"
                enemyName.style = "display: none"
                command.style = "display: none"
                won.style = "display: none"
                selector.style = "display: block"
                this.init();
            })

            restartLost.addEventListener("click", () => {
                container.style = "display: none"
                enemyContainer.style = "display: none"
                playerHP.style = "display: none"
                enemyHP.style = "display: none"
                playerName.style = "display: none"
                enemyName.style = "display: none"
                command.style = "display: none"
                lost.style = "display: none"
                selector.style = "display: block"
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