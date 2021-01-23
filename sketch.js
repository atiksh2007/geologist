
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var hammer;
var rubber;
var ground;
var stone;
var iron
var s;
var s2;
var s3;
var s4;
var s5;
var s6;
var s7;
var s8;
var s9;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

hammer=new Hammer(200,200,200,50)
rubber=new Rub(600,200);
ground=new Ground(750,700)
stone=new Stone(300,500);
iron=new Iron(310,0);
s=new Sand(400,10,10);
s2=new Sand(500,10,10)
s3=new Sand(600,200,10)
s4=new Sand(400,500,10);
s5=new Sand(400,500,10);
s6=new Sand(400,500,10);
s7=new Sand(400,500,10);
s8=new Sand(400,500,10);
s9=new Sand(400,500,10);
	Engine.run(engine);
  
}


function draw() {


  background("lightblue");
  Engine.update(engine);
  
  

  ground.display();
  hammer.display();
  rubber.display();
 
  stone.display();
iron.display();
  s.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
    drawSprites();
 
}



