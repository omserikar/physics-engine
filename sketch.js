const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,200,20,options);
  World.add(world, ground);

  var options1 = {
    isStatic:false,
    restitution:2
  }
  ball=Bodies.circle(200,100,20,options1)
  World.add(world,ball)




  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background("black");
  Engine.update(engine);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 200,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);




}