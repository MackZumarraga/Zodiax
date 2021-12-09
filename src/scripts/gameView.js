import Particle from "../canvas/particle";
import Player from "../canvas/player";

class GameView {
    constructor(game, canvas, ctx) {
        this.ctx = ctx
        this.game = game
        this.canvas = canvas

        //PARTICLES
        this.radians = 0
        this.particles = []

        //PLAYERS
        this.xplayer = this.canvas.width / 4
        this.yplayer = this.canvas.height / 2.5

        this.xenemy = this.canvas.width / 1.60
        this.yenemy = this.canvas.height / 2.5

        this.xsize = 500
        this.ysize = 500

        this.player = new Player(this.xplayer, this.yplayer, this.xsize, this.ysize, this.ctx)
        this.enemy = new Player(this.xenemy, this.yenemy, this.xsize, this.ysize, this.ctx)

        this.animate = this.animate.bind(this)
    }

    animate = () => {
        requestAnimationFrame(this.animate)
        
  
        //STARRY BACKGROUND
        this.ctx.fillStyle = 'rgba(10, 10, 10, 1)'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.save()
        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2)
        this.ctx.rotate(this.radians)

        this.particles.forEach(particle => {
            particle.update();
        })

        this.ctx.restore()

        this.radians += 0.001


        
        //PLAYER AND ENEMY
        if (this.game.animation === 1) {

        // const player = new Player(this.x, this.y, 60, 'green', this.ctx)
        // const enemy = new Player(this.x, (this.y / 2), 60, 'orange', this.ctx)
        
        // const player = new Player(this.x, this.y, this.xsize, this.ysize, this.ctx)
        // const enemy = new Player(this.x, (this.y / 2), this.xsize, this.ysize, this.ctx)
            // debugger
            console.log(this.player)
            this.player.draw();
            this.enemy.draw();            
        } 

       
        
        //ACTION EFFECTS


        //COMMAND PANEL

    }

    
    
    initParticles = () => {
        let colors = ['#FFFFFF', '#98FB98', '#FFEFD5', '#48D1CC']


        for (let i = 0; i < 200; i++) {
            const canvasWidth = this.canvas.width + 300
            const canvasHeight = this.canvas.height + 300
            const x = Math.random() * canvasWidth - canvasWidth/2
            const y = Math.random() * canvasHeight - canvasHeight/2
            const radius = Math.random() * 2
            const color = colors[Math.floor(Math.random() * colors.length)]

            this.particles.push(new Particle(x, y, radius, color, this.ctx))
        }

        console.log(this.particles)
    }

}



export default GameView;