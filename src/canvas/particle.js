class Particle {
    constructor(x, y, radius, color, ctx) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.ctx = ctx
    }

    draw() {
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
}

export default Particle;