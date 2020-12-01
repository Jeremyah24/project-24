
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var ball
var box1,box2,box3
var dustbin
function preload()
{
dustbin=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground= new Ground(400,600,800,10)
ball= new Ball(100,550,20)
box1= new Box(290,500,10,80)
box2= new Box(375,550,150,10)
box3= new Box(460,500,10,80)
	Engine.run(engine);
  
}




function draw() 
{


  rectMode(CENTER);
  background("lightblue");
  ground.display()
  ball.display()
  box1.display()
  box2.display()
  box3.display()
  imageMode (CENTER)
  image(dustbin,375,550,200,150)
  drawSprites();
 
}
function keyPressed()
{
 if(keyCode==UP_ARROW) 
 {
  Matter.Body.applyForce(ball.body,ball.body.position,{x:0.03,y:-0.04})
 }
}


