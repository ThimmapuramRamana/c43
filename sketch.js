var mario,marioimg,goomba,goombaimg,goombagroup,bg,bgimg,ground;


function preload(){
  marioimg = loadImage("sprites/mario1.gif");
  bgimg = loadImage("sprites/kingdom.jpg");
}


function setup() {
  createCanvas(1500,700);

  bg = createSprite(750,350,1500,700);
  bg.addImage(bgimg);
  bg.scale=8;

 mario = createSprite(100, 600, 50, 50);
  mario.addImage(marioimg);

 ground = createSprite(750,690,1500,10);

 
  
}

function draw() {
  background(25,55,100);
  
 bg.velocityX= -6;

 if(bg.x<0){
   bg.x=bg.width/2;


 }
  
  drawSprites();
}