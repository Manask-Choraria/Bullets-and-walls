//creating variables
var bullet, wall,speed,weight,thickness,damage,wallleftEdge,bulletRightEdge


function setup() {

  // changing the width and height of canvas
  createCanvas(1600,400);

  // giving random number for speed,weightand thickness variable
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  // creating bullet sprite
  bullet = createSprite(50, 200, 25, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

//creating wall sprite
  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor =  color(80,80,80);
  
}

function draw() {
  background("black");
  if(hasCollided (bullet,wall)){
    bullet.velocityX = 0;
     damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if(damage > 10){
      wall.shapeColor = color (255,0,0);
    }
    if(damage < 10 ){
      wall.shapeColor =  color (0,255,0);
    }
  

  }

  createEdgeSprites();  
  drawSprites();
}
 function hasCollided(lbullet,lwall){
     bulletRightEdge = lbullet.x + lbullet.width;
     wallleftEdge = lwall.x;

    if(bulletRightEdge>=wallleftEdge) {
      return  true;
    }
    return false
 }


