

class Ground
{
    constructor(x,y,w,h)
    {
        var ballOptions={
            
            
            isStatic:true
          }
          this.body=Bodies.rectangle(x,y,w,h,ballOptions);
          World.add(world,this.body);
          this.w=w 
          this.h=h
          
    }

    display()
    {
   push()  
   //translate(this.body.position.x,this.body.position.y)
   //rotate(this.body.angle)
rectMode(CENTER)
  rect (this.body.position.x,this.body.position.y,this.w,this.h)  
  pop() 
    }
}