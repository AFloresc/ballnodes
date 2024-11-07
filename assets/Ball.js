class Ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.ballcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    

    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2)
        ctx.fill()
        ctx.closePath()

    }
}