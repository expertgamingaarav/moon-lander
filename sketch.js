let ground;
var fuel=100
 var thrust
let lander;
var lander_img;
var bg_img;
var rightImage
var leftImage
var vy = 0;
var g = 0.05;
var vx = 0;


function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  thrust = loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png");
  rightImage=loadAnimation("right_thruster_1.png","right_thruster_2.png");
  leftImage=loadAnimation("left_thruster_1.png","left_thruster_2.png");

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)
  lander.addAnimation('thrusting',thrust);
  lander.addAnimation('left',leftImage);
  lander.addAnimation('right',rightImage);
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  text("horizontal Velocity:"+round(vx,),800,50);
  text("fuel:"+fuel,800,25);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;
  lander.position.x+=vx;

  drawSprites();
}
function keyPressed()
{
  if(keyCode==UP_ARROW && fuel>0)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
  if(keyCode==LEFT_ARROW && fuel>0)
  {
    left_thrust();
    lander.changeAnimation('left');
    
    
  }
  if(keyCode==RIGHT_ARROW && fuel>0)
  {
    right_thrust();
    lander.changeAnimation('right');
    
    
  }
}

function upward_thrust()
{
  vy = -1;
  fuel -= 1
}
function left_thrust()
{
  vx -=0.2;
  fuel -= 1
}
function right_thrust()
{
  vx +=0.2;
  fuel -= 1
}


