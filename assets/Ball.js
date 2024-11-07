class Ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.ballcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.dirX = (Math.random() * 2) -1;
        this.dirY = (Math.random() * 2) -1;
        this.speed = 5;
    }

    

    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2)
        ctx.fill()
        ctx.closePath()

    }

    move(){
        this.x += this.dirX * this.speed
        this.y += this.dirY * this.speed
    }

    clear(){
        var prevCoords = {};
        prevCoords.x = Math.floor(this.x - this.speed);
        prevCoords.y = Math.floor(this.y - this.speed);
        // lineWidth:fix
        canvas.ctx.clearRect(prevCoords.x, prevCoords.y, this.width+1, this.height+1);
        };
}