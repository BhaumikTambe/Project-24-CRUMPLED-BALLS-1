
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var lSide,rSide,bSide;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,500,13);

	ground = new Ground(400,620,800,20);

    bSide = new Bin(610,600,155,20);
	lSide = new Bin(540,560,20,100);
	rSide = new Bin(680,560,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  ground.display();
  bSide.display();
  lSide.display();
  rSide.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-20});
	}
}



