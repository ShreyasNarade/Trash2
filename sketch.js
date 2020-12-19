
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var bin1,bin2,bin3;
var dustbinImg;

function preload()
{
	dustbinImg = loadImage("bin.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,12000,30);
	paper = new Paper(150,320,33);
	bin1 = new Bin(1000,680,280,20);
	bin2 = new Bin(875,560,20,250);
	bin3 = new Bin(1125,560,20,250);



	Engine.run(engine);
  
}


function draw() {
  background("lightgray");
  Engine.update(engine);
  paper.scale = 0.5;

  ground.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  imageMode(CENTER);
  image(dustbinImg,1000,550,300,280);

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:255,y:-255})
	}
}



