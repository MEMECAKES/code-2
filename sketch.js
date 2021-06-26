var seaImg, shipImg1, ship;
var edges, sea, spriteName;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship3.png","ship4.png");
}

function setup(){
  createCanvas(400,400);
  ship.addAnimation(shipImg1);
  edges = createEdgeSprites();

  spriteName.addImage(seaImg);
  if(sea.x < 0){
    sea.x=sea.width/2
  }
}

function draw() {
  background("blue");
 
}
