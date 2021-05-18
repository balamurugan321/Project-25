
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, paper,ground;
var world;
var bg;

function preload(){
	bg = loadImage("bg.jpg");
}
function setup() {
	createCanvas(1350, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper=new Paper(200,400,70);
	ground=new Ground(width/2,600,width,5);
	dustbin=new Dustbin(1200,590);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(bg);
 
  paper.display();
  ground.display();
  dustbin.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:285,y:-285})
	}

	if (keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-0})
	}

	if (keyCode === LEFT_ARROW){
			Matter.Body.applyForce(paper.body,paper.body.position,{x:-30,y:-0})
	}
	}