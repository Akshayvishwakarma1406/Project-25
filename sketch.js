
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var line1,ground;
var DustBinImg,PaperImg;

// function preload(){
// 	DustBinImg=loadImage("dustbin(2).png")
// 	PaperImg=loadImage("paper.png")
// }

function setup() {
	createCanvas(1500, 500);

	GroundSprite = createSprite(width/2,450,width,20);
	GroundSprite.shapeColor = color("red");

	GroundSprite = createSprite(width,450,10,1000);
	GroundSprite.shapeColor = color("blue");	

	ground = Bodies.rectangle(width, 450, 10, 1000  );
	 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,450,width,20);
	groundV = new Ground(width, 450, 10, 1000);
	line1 = new Line(1300,365);
	// line2 = createSprite(1236,360,10,140);
	// line2.shapeColor = color(0,255,0);
	// World.add(world,line2);
	line2 = new Line(1365,365,10,145);
	line3 = new Line(1236,360,10,140);
	balls = new Ball(100,300,50,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(2);
  ground.display();
  groundV.display();
//   line2.display();
  balls.display();
  line3.display();
  line1.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(balls.body,balls.body.position,{x:100,y:-95});
	   
	 }
	}
   