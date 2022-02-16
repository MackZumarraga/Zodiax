class Particle {
    constructor(x, y, radius, color, ctx) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.ctx = ctx

        this.attackDraw = this.attackDraw.bind(this);
        this.attackAIDraw = this.attackAIDraw.bind(this);
        this.healAnimation = this.healAnimation.bind(this);
    }

    draw() {
        debugger
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.shadowColor = this.color
        this.ctx.shadowBlur = 10
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.closePath()
    }

    update() {
        this.draw();
    }


    attackDraw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.shadowColor = this.color
        this.ctx.shadowBlur = 10
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.closePath()
        this.x += 50;

        if (this.x >= window.innerWidth * .64) {
            this.ctx = null;
            return;
        } else {
            requestAnimationFrame(this.attackDraw);
        }
    }

    attackAIDraw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.shadowColor = this.color
        this.ctx.shadowBlur = 10
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.x -= 50;
        this.ctx.closePath()
        this.ctx.fillStyle = "rgba(34,45,23,0.4)";

        if (this.x <= window.innerWidth * .35) {
            this.ctx = null;
            return;
        } else {
            requestAnimationFrame(this.attackAIDraw);
        }
        
    }

    healAnimation() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.shadowColor = '#DFFF00'
        this.ctx.shadowBlur = 10
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.closePath()
        this.radius += 2
        if (this.radius >= 100) {
            this.ctx = null;
            return;
        } else {
            requestAnimationFrame(this.healAnimation);
        };
    }
}

export default Particle;