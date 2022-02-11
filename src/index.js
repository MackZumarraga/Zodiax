// import Test from "./scripts/test";
// import Character from "./scripts/character";
// const Game = require("./scripts/game");
import Game from "./scripts/game";
import GameView from "./scripts/gameView";

document.addEventListener("DOMContentLoaded", () => {
    // disappear = () => {
    //     menu.style = "display: none"
    // }

    // const menu = document.querySelector(".menu")
    // menu.addEventListener("click", this.disappear)


    

    ////CANVAS////
    const canvas = document.querySelector("canvas");

    canvas.width = innerWidth;
    canvas.height = innerHeight; 

    addEventListener('resize', () => { //---->buggy when implemented
        canvas.width = innerWidth;
        canvas.height = innerHeight;   
    })
    
    let ctx = canvas.getContext('2d');
    

    //INITIALIZE GAME//
    const game = new Game(ctx);
    const view = new GameView(game, canvas, ctx);
    // view.initParticles();
    view.animate();

    /*DESIRED LAYOUT
    const Battle = require("./scripts/battle");
    const Animation = require("./scripts/animation");

    document.addEventListener("DOMContentLoaded", () => {
        const canvas = document.querySelector("canvas")
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const c = canvas.getContext('2d');
        const game = new Battle();
        new Animation(game, c).start();
    })
    */



  



    //Canvas-Players (for player and enemy)//
    // class Player {
    //     constructor(x, y, radius, color) {
    //         this.x = x
    //         this.y = y
    //         this.radius = radius
    //         this.color = color
    //     }

    //     draw() {
    //         ctx.beginPath()
    //         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    //         ctx.fillStyle = this.color
    //         ctx.fill()
    //     }
        
    // }

    // const player = new Player(x, y, 60, 'green')
    // player.draw();
    // console.log(player)

    // const enemy = new Player(x, (y / 2), 60, 'orange')
    // enemy.draw();
    // console.log(enemy)



    // //Canvas-Magic Effects//
    // class Particle {
    //     constructor(x, y, radius, color, velocity) {
    //         this.x = x
    //         this.y = y
    //         this.radius = radius
    //         this.color = color
    //         this.velocity = velocity
    //     }

    //     draw() {
    //         ctx.beginPath()
    //         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    //         ctx.fillStyle = this.color
    //         ctx.fill()
    //         // ctx.closePath()
    //     }

    //     update() {
    //         this.draw();
    //         this.x = this.x - this.velocity.x
    //         this.y = this.y - this.velocity.y
    //     }
    // }

    // //Canvas-Elements//
    // const x = canvas.width / 2
    // const y = canvas.height / 1.5





    // // const particle = new Particle(
    // //     player.x,
    // //     player.y,
    // //     5,
    // //     'black',
    // //     {
    // //         x: 1,
    // //         y: 1
    // //     }
    // // )

    // // const particle2 = new Particle(
    // //     player.x,
    // //     player.y,
    // //     2,
    // //     'gold',
    // //     {
    // //         x: 1,
    // //         y: 1
    // //     }
    // // )


    // const particles = []


    // //Canvas-Animation//
    // function animate() {
    //     requestAnimationFrame(animate)
    //     ctx.clearRect(0, 0, canvas.width, canvas.height)
    //     player.draw();
    //     enemy.draw();
    //     particles.forEach(particle => {
    //         particle.update();
    //     });
    //     // particle.draw();
    //     // particle.update();
    //     // ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     // particle.draw();
    // }

    // addEventListener('click', () => {
    //     // const particle = new Particle(
    //     //     player.x,
    //     //     player.y,
    //     //     5,
    //     //     'black',
    //     //     {
    //     //         x: 1,
    //     //         y: 1
    //     //     }
    //     // )

    //     // particle.draw();
    //     // particle.update();
    //     particles.push(
    //         new Particle(
    //             player.x,
    //             player.y,
    //             50,
    //             'black',
    //             {
    //                 x: 1,
    //                 y: 5
    //             }
    //         )
    //     )
        
    // })

    // animate();


    //CANVAS BACKGROUND//

    // Background Particle
    // class Particle {
    //     constructor(x, y, radius, color) {
    //         this.x = x
    //         this.y = y
    //         this.radius = radius
    //         this.color = color
    //     }

    //     draw() {
    //         ctx.beginPath()
    //         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    //         ctx.shadowColor = this.color
    //         ctx.shadowBlur = 10
    //         ctx.fillStyle = this.color
    //         ctx.fill()
    //         ctx.closePath()
    //     }

    //     update() {
    //         this.draw();
    //     }
    // }

    // let particles;
    // let colors = ['#FFFFFF', '#98FB98', '#FFEFD5', '#48D1CC']

    // function init() {
    //     particles = []

    //     for (let i = 0; i < 200; i++) {
    //         const canvasWidth = canvas.width + 300
    //         const canvasHeight = canvas.height + 300
    //         const x = Math.random() * canvasWidth - canvasWidth/2
    //         const y = Math.random() * canvasHeight - canvasHeight/2
    //         const radius = Math.random() * 2
    //         const color = colors[Math.floor(Math.random() * colors.length)]

    //         particles.push(new Particle(x, y, radius, color))
    //     }

    //     console.log(particles)
    // }

    //   //Canvas-Elements//
    // const x = canvas.width / 2
    // const y = canvas.height / 1.5
    // const player = new Player(x, y, 60, 'green')
    // const enemy = new Player(x, (y / 2), 60, 'orange')
    // const random = new Player((x/2), (y /2), 60, 'blue')

    
    // //Background Animate//
    // let radians = 0;
    // function animate() {
    //     requestAnimationFrame(animate)
    //     ctx.fillStyle = 'rgba(10, 10, 10, 1)'
    //     ctx.fillRect(0, 0, canvas.width, canvas.height)

    //     ctx.save()
    //     ctx.translate(canvas.width / 2, canvas.height / 2)
    //     ctx.rotate(radians)

    //     particles.forEach(particle => {
    //         particle.update();
    //     })

    //     ctx.restore()

    //     radians += 0.001

    //     if (game.animation === 1) {
    //         enemy.draw();
    //         player.draw();
            
    //     } else if (game.animation === 2) {
    //         random.draw();
    //     }
    //     // enemy.draw();
    //     // player.draw();
    //     // random.draw();
    // }

    

    // init();
    // animate();



});




