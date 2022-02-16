class Player {
    constructor(currentPath, x, y, xsize, ysize, ctx) {
        this.x = x
        this.y = y
        this.xsize = xsize
        this.ysize = ysize
        this.ctx = ctx
        this.draw = this.draw.bind(this)
        this.zodiacImg = new Image();
        this.zodiacImgSrc = currentPath
    }

    draw = (path = this.zodiacImgSrc) => {
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