class Player {
    // constructor(x, y, radius, color, ctx) {
    //     this.x = x
    //     this.y = y
    //     this.radius = radius
    //     this.color = color
    //     this.ctx = ctx
    // }
    constructor(currentPath, x, y, xsize, ysize, ctx) {
        this.x = x
        this.y = y
        this.xsize = xsize
        this.ysize = ysize
        this.ctx = ctx
        this.draw = this.draw.bind(this)
        this.zodiacImg = new Image();
        // this.zodiacImgSrc = 'https://cdn.crello.com/api/media/medium/8959251/stock-photo-diamond-aries?token='
        this.zodiacImgSrc = currentPath
        // console.log(`current from player is ${this.zodiacImgSrc}`)
    }

    draw = (path = this.zodiacImgSrc) => {
        // this.ctx.beginPath()
        // this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        // this.ctx.fillStyle = this.color
        // this.ctx.fill()

        // let zodiacImg = new Image();

        // this.zodiacImg.onload = () => {
        //     this.ctx.drawImage(
        //         this.zodiacImg,
        //         this.x, this.y,
        //         this.xsize, this.ysize
        //         );
        // }

            
        this.ctx.drawImage(
            this.zodiacImg,
            this.x, this.y,
            this.xsize, this.ysize
            );

        this.zodiacImg.src = path

    }

    update(path) {
        this.draw(path);
    }
    
}

export default Player;