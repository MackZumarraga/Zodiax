class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
    }

    start = () => {
        console.log('hi')
        console.log(`the game state is ${this.game.battle.gameState}`)
        if (this.game.battle.gameState === 0) {
            // const scroll = document.querySelector(".scroll")
            // scroll.addEventListener("click", () =>{
            //     scroll.style = "display: none"
            // })

            this.animateMenu();
            this.game.battle.gameState += 1
            this.start();
        } else if (this.game.battle.gameState === 1) {
            this.animateGame();
        } else if (this.game.battle.gameState === 2) {
            this.animateGameOver();
            this.game.start();
        }
        
    }

    animateMenu = () => {
        console.log("animate menu")
    }

    animateGame = () => {
        console.log("animate game")
    }

    animateGameOver = () => {
        console.log("animate game over")
    }
}



export default GameView;