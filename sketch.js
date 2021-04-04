const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var back,score=0;
var dus,dust;
function preload(){

  // loading image for background
  back = loadImage("back.jpg");
  dust = loadImage("dust.png");

}

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  //making ground
  var opt = {
    isStatic: true
  }
  ground = Bodies.rectangle(600, 595, 1200, 80, opt);
  World.add(world, ground);

  waste1 = new Waste(400,500,30);
  waste2 = new Waste(420,500,30);
  waste3 = new Waste(430,500,30);
  broom = new Broom(600, 400);
  rope = new Sling(broom.body,{x:600,y:60});
}

function draw() {
  background(back);
  Engine.update(engine);

  // making a rectangle at ground's place
  rectMode(CENTER);
  fill("white");
  rect(ground.position.x, ground.position.y,1200, 80);

  waste1.display();
  waste2.display();
  waste3.display();
  broom.display();
  rope.display();

  if (score >= 4){
    textSize(100);
    fill("red");
    text ("You Won ", 300, 100);
  }

  if(waste1.body.position.x < 200 && waste2.body.position.x < 200 && waste3.body.position.x < 200 /*&& waste4.body.position.x < 200*/){
    score = score+1;
  }
  textSize(30);
  fill("blue");
  text("To win, move all the waste into dustbin with help of broom", 100,200);

  dus = createSprite(100,440,0,0);
  dus.addImage(dust);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(broom.body,{x: mouseX, y: mouseY});
}