import Particle from "../canvas/particle";
import Player from "../canvas/player";

let zodiacs = require('./zodiacs').zodiacs
let zodiacsArr = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]

class GameView {
    constructor(game, canvas, ctx) {
        this.ctx = ctx
        this.game = game
        this.canvas = canvas
        

        //PARTICLES
        this.radians = 0
        this.particles = []

        // PLAYERS
        this.xplayer = this.canvas.width * 0.10
        this.yplayer = this.canvas.height * 0.15

        this.xenemy = this.canvas.width * 0.64
        this.yenemy = this.canvas.height * 0.15

        this.xsize = 500
        this.ysize = 500
       
        this.playerPath = null;
        this.enemyPath = null;
        
        this.player = new Player(this.playerPath, this.xplayer, this.yplayer, this.xsize, this.ysize, this.ctx)
        this.enemy = new Player(this.enemyPath, this.xenemy, this.yenemy, this.xsize, this.ysize, this.ctx)
        
        // console.log(`player from gameView ${this.player}`)
        // console.log(`enemy from gameView ${this.enemy}`)

        

        //FUNCTIONS

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

        // // const player = new Player(this.x, this.y, 60, 'green', this.ctx)
        // // const enemy = new Player(this.x, (this.y / 2), 60, 'orange', this.ctx)
        
        // const player = new Player(this.x, this.y, this.xsize, this.ysize, this.ctx)
        // const enemy = new Player(this.x, (this.y / 2), this.xsize, this.ysize, this.ctx)
            // debugger

            this.player = new Player(this.game.battle.player, this.xplayer, this.yplayer, this.xsize, this.ysize, this.ctx)
            this.enemy = new Player(this.game.battle.opponent, this.xenemy, this.yenemy, this.xsize, this.ysize, this.ctx)
            
            let playerPath = this.game.battle.player.zodiacPath
            let enemyPath = this.game.battle.opponent.zodiacPath

            let drawPlayer;
            let drawEnemy;

            drawPlayer = new Player(playerPath, this.xplayer, this.yplayer, this.xsize, this.ysize, this.ctx)
            drawEnemy = new Player(enemyPath, this.xenemy, this.yenemy, this.xsize, this.ysize, this.ctx)
            
            this.player = drawPlayer
            this.enemy = drawEnemy

            // console.log(drawPlayer)
            // console.log(drawEnemy)
            this.player.update(playerPath);
            this.enemy.update(enemyPath);
            
            this.player.draw();
            this.enemy.draw();
        } 

       
        
        //ACTION EFFECTS
        // debugger
        if (this.game.battle === null) {
            return;
        }
        
        if (!this.game.battle.anim) {
            return;
        }


        if (this.game.battle.battleState === 1) {
            const attackAnimation = new Particle(window.innerWidth * 0.35, window.innerHeight * 0.30, 2, '#98FB98', this.ctx)
            // attackAnimation.draw();
            // attackAnimation.update();
            attackAnimation.attackDraw();
        };

        if (this.game.battle.battleState === 2) {
            const attackAIAnimation = new Particle(window.innerWidth * 0.64, window.innerHeight * 0.30, 2, '#48D1CC', this.ctx)
            // attackAnimation.draw();
            // attackAnimation.update();
            attackAIAnimation.attackAIDraw();
        }

        if (this.game.battle.battleState === 3) {
            const magicAnimation = new Particle(window.innerWidth * 0.35, window.innerHeight * 0.30, 20, '#98FB98', this.ctx)
            // attackAnimation.draw();
            // attackAnimation.update();
            magicAnimation.attackDraw();
        }

        if (this.game.battle.battleState === 4) {
            const magicAIAnimation = new Particle(window.innerWidth * 0.64, window.innerHeight * 0.30, 20, '#48D1CC', this.ctx)
            // attackAnimation.draw();
            // attackAnimation.update();
            magicAIAnimation.attackAIDraw();
        }

        if (this.game.battle.battleState === 5) {
            const healAnimation = new Particle(window.innerWidth * 0.25, window.innerHeight * 0.37, 20, '#00FF00', this.ctx)
            // attackAnimation.draw();
            // attackAnimation.update();
            healAnimation.healAnimation();
        }

        if (this.game.battle.battleState === 6) {
            const healAnimation = new Particle(window.innerWidth * 0.64, window.innerHeight * 0.30, 20, '#00FF00', this.ctx)
            // attackAnimation.draw();
            // attackAnimation.update();
            healAnimation.healAnimation();
        }
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

        // console.log(this.particles)
    }

 



}



export default GameView;