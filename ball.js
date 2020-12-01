class Ball
{
    constructor(x,y,r)
    {
        var ballOptions={
            restitution:1,
            friction:1
          }
          this.body=Bodies.circle(x,y,r,ballOptions);
          World.add(world,this.body);
          this.image=loadImage("paper.png")
          this.w=r
          
          
    }

    display()
    {
   push()  
   translate(this.body.position.x,this.body.position.y)
   rotate(this.body.angle)
imageMode(CENTER)
 // ellipse (0,0,this.w) 
  image (this.image,0,0,30,30) 
  pop() 
    }
}