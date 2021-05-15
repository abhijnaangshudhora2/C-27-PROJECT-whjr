var roof,rope1,rope2,rope3,rope4,rope5,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
     
	engine= Engine.create();
	world=engine.world;

	roof = new roof(350,100,300,30);
	World.add(world,roof);

	
	bobObject1 = new Bob (250,300);
	World.add(world,bobObject1);
	bobObject2 = new Bob (300,300);
	World.add(world,bobObject2);
    bobObject3 = new Bob (350,300);
	World.add(world,bobObject3);
	bobObject4 = new Bob (400,300);
	World.add(world,bobObject4);
	bobObject5 = new Bob (450,300);
	World.add(world,bobObject5);

    rope1 = new rope1(bobObject1.body,roof.body,-100,0);
	World.add(world,rope1);
	rope2 = new rope1(bobObject2.body,roof.body,-50,0);
	World.add(world,rope2);
	rope3 = new rope3(bobObject3.body,roof.body,0,0);
	World.add(world,rope3);
	rope4 = new rope4(bobObject4.body,roof.body,+50,0);
	World.add(world,rope4);
    rope5 = new rope5(bobObject5.body,roof.body,+100,0);
	World.add(world,rope5);
	

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);

  roof.display();
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
}

function keyPressed (){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-70,y:0});
}
}