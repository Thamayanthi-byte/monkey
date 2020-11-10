
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var forestImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backgroundImage=loadImage("forest image.jpg");
}



function setup() {
  createCanvas(600,400);
  
  background=createSprite(0,300,400,400);
  background.addImage(backgroundImage);
  background.scale=4.5;
  
  ground=createSprite(300,390,600,20);
  ground.visible=false;
  
  monkey=createSprite(30,350,20,20);
  monkey.addAnimation("monk",monkey_running);
  monkey.scale=0.1;
  
  bananaGroup=new Group();
   obstacleGroup=new Group();
}

function draw() {

  if(keyDown("space")&&monkey.y>200){
    monkey.velocityY=-10;
    
  }
  //gravity
  monkey.velocityY=monkey.velocityY+1;
  
  
  
 background.velocityX=-3; 
  //to create an infinte scrolling background
  if(background.x<0){
    background.x=background.width/2
  }
  
  spawnbanana();
  spawnobstacle();
  
  if(monkey.isTouching(bananaGroup)){
    score=score+1;
    bananaGroup.destroyEach();
  }
  if(monkey.isTouching(obstacleGroup)){
    score=score-1;
    obstacleGroup.destroyEach();  
  }
  monkey.collide(ground);
  drawSprites();
  fill("white");
  text("score: "+score,400,30);
  
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);  
}



function spawnbanana(){
  if(frameCount%80===0){
     banana=createSprite(600,Math.round(random(100,300)),20,20);
    banana.addImage(bananaImage);
    banana.velocityX=-3;
    banana.scale=0.1;
    bananaGroup.add(banana); 
    banana.lifetime=250;
      
     }
}
function spawnobstacle(){
   if(frameCount%200===0){
     obstacle=createSprite(600,360,20,20);
     obstacle.addImage(obstaceImage);
     obstacle.velocityX=-3;
     obstacle.scale=0.1;
     obstacleGroup.add(obstacle);
     obstacle.lifetime=300;
     
     
      
     
   }
 
  
  
}

