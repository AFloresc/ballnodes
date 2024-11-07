const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerWidth

// Ona mall
//let ball = new Ball(canvas.width / 2, canvas.height / 2)

// Multiple balls
let balls = []
for (let i =0; i < 5; i++){
    balls.push(new Ball(canvas.width / 2, canvas.height / 2))
}


function anim (){
    
    //One ball
    //ball.draw()
    //ball.move()

    //Multiple balls
    balls.forEach(ball =>{
        ctx.clearRect(0, 0, canvas.height, canvas.width)
        ball.draw()
        ball.move()
        
        
       
        
    })
    
    requestAnimationFrame(anim)


}


anim()