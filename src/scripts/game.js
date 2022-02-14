import Battle from "./battle"


class Game {
    constructor(ctx) {
        this.battle = null;
        this.init = this.init.bind(this)
        this.turnsCounter = 0;
        this.init();
        this.animation = 0
        this.ctx = ctx;
        this.round = 10;
        this.roundContainer = document.querySelector(".round-number")

    }


    startGame(character = 0) {
        this.battle = new Battle(character, this.ctx, this.round);
        this.animation += 1

        //round
        this.roundContainer.innerHTML = this.round


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
        let fin = document.querySelector(".finished-container")

        let playerHP = document.querySelector(".hp-gauge-bar")
        let enemyHP = document.querySelector(".enemy_hp")
        let playerName = document.querySelector(".zodiac")
        let enemyName = document.querySelector(".enemy_zodiac")
        playerHP.style = "display: flex"
        enemyHP.style = "display: flex"
        playerName.style = "display: flex"
        enemyName.style = "display: flex"
        debugger
        
            
        const restartWon = document.querySelector(".restart_won")
        const restartLost = document.querySelector(".restart_lost")
        const restartFinished = document.querySelector(".restart-game")
        const round = document.querySelector(".round")

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

            //round
            this.round += 1
            
            this.roundContainer.innerHTML = this.round

            this.turnsCounter += 1
            debugger
            this.animation = 1

            this.battle.resetBattle();
            
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

            //round
            this.round = 1
            this.roundContainer.innerHTML = this.round
            
            this.turnsCounter = 1
            
            this.animation = 0

            this.init();

  

        })


        restartFinished.addEventListener("click", () => {
            container.style = "display: none"
            enemyContainer.style = "display: none"
            playerHP.style = "display: none"
            enemyHP.style = "display: none"
            playerName.style = "display: none"
            enemyName.style = "display: none"
            command.style = "display: none"
            fin.style = "display: none"
            selector.style = "display: block"

            //round
            this.round = 1
            this.roundContainer.innerHTML = this.round
            
            this.turnsCounter = 1
            
            this.animation = 0

            this.init();

  

        })
      
        
    }

    init() {
        const aries = document.getElementById('0')
        aries.addEventListener("click", () => {
            let ariesId = 0;
            
            if (this.turnsCounter === 0) {
                this.startGame(ariesId, this.ctx);
                this.animation = 1
            } else {
                console.log(`this is battle ${this.turnsCounter + 1}`)
                this.battle.resetBattle(ariesId);

                this.animation = 1
            }
        })

        const taurus = document.getElementById('1')
        taurus.addEventListener("click", () => {
            let taurusId = 1;
            if (this.turnsCounter === 0) {
                this.startGame(taurusId);
            } else {
                // console.log(`this is battle ${this.turnsCounter + 1}`)
                this.battle.resetBattle(taurusId);

                this.animation = 1
            }
        })

        const gemini = document.getElementById('2')
        gemini.addEventListener("click", () => {
            let geminiId = 2;
            if (this.turnsCounter === 0) {
                this.startGame(geminiId);
            } else {
                // console.log(`this is battle ${this.turnsCounter + 1}`)
                this.battle.resetBattle(geminiId);

                this.animation = 1
            }
        })

        const cancer = document.getElementById('3')
        cancer.addEventListener("click", () => {
            let cancerId = 3;
            if (this.turnsCounter === 0) {
                this.startGame(cancerId);
            } else {
                // console.log(`this is battle ${this.turnsCounter + 1}`)
                this.battle.resetBattle(cancerId);

                this.animation = 1
            }
        })

        const leo = document.getElementById('4')
        leo.addEventListener("click", () => {
            let leoId = 4;
            if (this.turnsCounter === 0) {
                this.startGame(leoId);
            } else {
                // console.log(`this is battle ${this.turnsCounter + 1}`)
                this.battle.resetBattle(leoId);

                this.animation = 1
            }
        })

        const virgo = document.getElementById('5')
        virgo.addEventListener("click", () => {
            let virgoId = 5;
            if (this.turnsCounter === 0) {
                this.startGame(virgoId);
            } else {
                // console.log(`this is battle ${this.turnsCounter + 1}`)
                this.battle.resetBattle(virgoId);

                this.animation = 1
            }
        })

        const libra = document.getElementById('6')
        libra.addEventListener("click", () => {
            let libraId = 6;
            if (this.turnsCounter === 0) {
                this.startGame(libraId);
            } else {
                // console.log(`this is battle ${this.turnsCounter + 1}`)
                this.battle.resetBattle(libraId);

                this.animation = 1
            }
        })

        const scorpio = document.getElementById('7')
        scorpio.addEventListener("click", () => {
            let scorpioId = 7;
            if (this.turnsCounter === 0) {
                this.startGame(scorpioId);
            } else {
                // console.log(`this is battle ${this.turnsCounter + 1}`)
                this.battle.resetBattle(scorpioId);

                this.animation = 1
            }
        })

        const sagittarius = document.getElementById('8')
        sagittarius.addEventListener("click", () => {
            let sagittariusId = 8;
            if (this.turnsCounter === 0) {
                this.startGame(sagittariusId);
            } else {
                // console.log(`this is battle ${this.turnsCounter + 1}`)
                this.battle.resetBattle(sagittariusId);

                this.animation = 1
            }
        })

        const capricorn = document.getElementById('9')
        capricorn.addEventListener("click", () => {
            let capricornId = 9;
            if (this.turnsCounter === 0) {
                this.startGame(capricornId);
            } else {
                // console.log(`this is battle ${this.turnsCounter + 1}`)
                this.battle.resetBattle(capricornId);

                this.animation = 1
            }
        })
        
        const aquarius = document.getElementById('10')
        aquarius.addEventListener("click", () => {
            let aquariusId = 10;
            if (this.turnsCounter === 0) {
                this.startGame(aquariusId);
            } else {
                // console.log(`this is battle ${this.turnsCounter + 1}`)
                this.battle.resetBattle(aquariusId);

                this.animation = 1
            }
        })

        const pisces = document.getElementById('11')
        pisces.addEventListener("click", () => {
            let piscesId = 11;
            if (this.turnsCounter === 0) {
                this.startGame(piscesId);
            } else {
                // console.log(`this is battle ${this.turnsCounter + 1}`)
                this.battle.resetBattle(piscesId);

                this.animation = 1
            }
        })
    }

}
    

// module.exports = Game;
export default Game;