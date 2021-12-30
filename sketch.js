var Santiago;
var herrero, llavero;
var gata;
var Eduardo;
var distance;

function setup() {
  createCanvas(5000,5000);
 Santiago=createSprite(200, 200, 25, 25);
 herrero=createSprite(200, 200, 25, 25);
 llavero=createSprite(200, 200, 25, 25);
 gata=createSprite(300, 300, 15, 10);
}

function draw() {
  background(48,22,8); 
  
  if(keyDown("W")){
    Santiago.y=Santiago.y-10;
  }

  if(keyDown("S")){
    Santiago.y=Santiago.y+10;
  }

  if(keyDown("A")){
    Santiago.x=Santiago.x-10;
  }

  if(keyDown("D")){
    Santiago.x=Santiago.x+10;
  }

  for(var i=0; i=300; i=i+1){
    distance=distance+1;
  }

  if(Santiago.distance >300){
    Eduardo=createSprite(Santiago.x+35, Santiago.y, 25, 25);
  }

  drawSprites();
}