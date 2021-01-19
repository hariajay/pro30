class Block1{
    constructor(x,y,width,height){
        var option = {
            isStatic:false,
            friction:0.05,
            density:0.75
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width 
        this.height = height
        this.trans = 255
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        rectMode(CENTER)
        translate(pos.x,pos.y)
        rotate(angle)
        fill("red")
        rect(0,0,this.width,this.height)
        pop()
        if(this.body.speed<5){
            this.body.display
        }
        else {
            push()
            this.trans = this.trans-5
            tint(255,this.trans)
            pop()
           
        }
     }
}