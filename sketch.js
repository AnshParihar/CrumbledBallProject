
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width/2,height,width,20)
	//Create the Bodies Here.
	bottomRectangle = new Box(width/2,height-45,200,20)
	leftRectangle = new Box(width/2-95,height-90,20,100)
	rightRectangle = new Box(width/2+95,height-90,20,100)
	ball = new Ball(50,50,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bottomRectangle.display()
  leftRectangle.display()
  rightRectangle.display()
  ball.display()
  ground.display()
  
  drawSprites();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		console.log("UP_ARROW.isPressed")
		Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y:-0.5})
		console.log(ball.body.force)
	}
}



