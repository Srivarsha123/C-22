const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground  = Bodies.rectangle(200,390,200,20,{isStatic:true})
  ball = Bodies.circle(200, 100, 20, {restitution:2.0})
  World.add(world,ground)
  World.add(world,ball)
  console.log(ground.position.x);
}

function draw() {
  background(0);
  Engine.update(engine) 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipse(ball.position.x, ball.position.y, 20, 20)
}

