
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var S;
var roof;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,700,20);

	bobObject1 = new Bob(600,500,50);
	bobObject2 = new Bob(500,500,50);
	bobObject3 = new Bob(400,500,50);
	bobObject4 = new Bob(300,500,50);
	bobObject5 = new Bob(200,500,50);

	rope1 = new Rope(bobObject1.body,roof.body,200,10);
	rope2 = new Rope(bobObject2.body,roof.body,100,10);
	rope3 = new Rope(bobObject3.body,roof.body,   0,10);
	rope4 = new Rope(bobObject4.body,roof.body,-100,10);
	rope5 = new Rope(bobObject5.body,roof.body,-200,10);






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

 
  roof. display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() 
{ 
  if (keyCode === UP_ARROW) 
  { 
    Matter.Body.applyForce(bobObject5.body,bobObject5.body.position, {x:-1300,y:-1045}); 
    Matter.Body.setStatic(bobObject5,false);
  } 
}
