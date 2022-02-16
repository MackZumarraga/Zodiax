import Game from "./scripts/game";
import GameView from "./scripts/gameView";

document.addEventListener("DOMContentLoaded", () => {

    ////CANVAS////
    const canvas = document.querySelector("canvas");

    canvas.width = innerWidth;
    canvas.height = innerHeight; 

    addEventListener('resize', () => { 
        canvas.width = innerWidth;
        canvas.height = innerHeight;   
    })
    
    let ctx = canvas.getContext('2d');
    

    //INITIALIZE GAME//
    const game = new Game(ctx);
    const view = new GameView(game, canvas, ctx);
    view.initParticles();
    view.animate();

    
    //start music and modal
    const musicTag = document.getElementById("music");
    const startModal = document.querySelector(".start-game");
    const modalPage = document.querySelector(".start-modal");
    const musicControl = document.querySelector(".music")

    startModal.addEventListener("click", () => {
        musicTag.play();
        modalPage.style = "visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;"
    })

    musicControl.addEventListener("click", () => {
        if (musicControl.innerHTML === "music: ON") {
            musicTag.pause();
            musicControl.innerHTML = "music: OFF"
        } else {
            musicTag.play();
            musicControl.innerHTML = "music: ON"
        };
    })


});




