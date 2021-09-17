var movingRect, fixedRect, gameObj1, gameObj2, gameObj3, gameObj4;

function setup() {

  createCanvas(1200,800);
  movingRect=createSprite(200, 600, 100, 80);
  movingRect.shapeColor="green" 

  fixedRect=createSprite(400, 200, 30, 120);
  fixedRect.shapeColor="green"

  gameObj1 = createSprite(100, 100, 50 ,50);
  gameObj1.shapeColor = "green";

  gameObj2 = createSprite(200, 100, 50, 50);
  gameObj2.shapeColor = "green";

  gameObj3 = createSprite(300, 100, 50, 50);
  gameObj3.shapeColor = "green";

  gameObj4 = createSprite(400, 100, 50, 50);
  gameObj4.shapeColor = "green";

  movingRect.velocityY = -5;
  gameObj2.velocityY = +5;

}

function draw() {
  
  background(0,0,0);

  //if(keyDown(left_Arrow)) {
    //movingRect.velocityX = movingRect.velocityX-3
  //}

  //if(keyDown(Up_Arrow)) {
    //mivingRect.velocityY = movingRect.velocityY-2
  //}

  

  if(isTouching(movingRect, gameObj1)) {
    movingRect.shapeColor="red";
    gameObj1.shapeColor="red";
  }else {
    movingRect.shapeColor = "green";
    gameObj1.shapeColor = "green";
  }

  bounceOff(movingRect, gameObj2);

  drawSprites();
}


