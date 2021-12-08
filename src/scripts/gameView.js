class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
    }

    //Canvas-Players (for player and enemy)//
    

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
    
    start = () => {

        //CREATE STARRY BACKGROUND
        let particles;
        let colors = ['#FFFFFF', '#98FB98', '#FFEFD5', '#48D1CC']

        function init() {
            particles = []
    
            for (let i = 0; i < 200; i++) {
                const canvasWidth = canvas.width + 300
                const canvasHeight = canvas.height + 300
                const x = Math.random() * canvasWidth - canvasWidth/2
                const y = Math.random() * canvasHeight - canvasHeight/2
                const radius = Math.random() * 2
                const color = colors[Math.floor(Math.random() * colors.length)]
    
                particles.push(new Particle(x, y, radius, color))
            }
    
            console.log(particles)

            let radians = 0;
    function animate() {
        requestAnimationFrame(animate)
        ctx.fillStyle = 'rgba(10, 10, 10, 1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.save()
        ctx.translate(canvas.width / 2, canvas.height / 2)
        ctx.rotate(radians)

        particles.forEach(particle => {
            particle.update();
        })

        ctx.restore()

        radians += 0.001

        // enemy.draw();
        // player.draw();
    }

    

    init();
    animate();
        }
    }
    

    
    addCharacters = () => {
        const x = canvas.width / 2
        const y = canvas.height / 1.5
        const player = new Player(x, y, 60, 'green')
        const enemy = new Player(x, (y / 2), 60, 'orange')
    }
  
    


    //Background Animate//
    
}



export default GameView;