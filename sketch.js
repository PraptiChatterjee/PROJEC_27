
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(250,300);
	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2, 0);

	bobObject2 = new Bob(300,300);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2, 0);

	bobObject3 = new Bob(350,300);
	rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*2, 0);

	bobObject4 = new Bob(400,300);
	rope4 = new Rope(bobObject4.body,roof.body,-bobDiameter*2, 0);

	bobObject5 = new Bob(450,300);
	rope5 = new Rope(bobObject5.body,roof.body,-bobDiameter*2, 0);

	roof = new Roof(width/2, 100, 300, 30);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
  background("lightPink");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bobObject1.body.position,{x:-730,y:0});
	}
}
