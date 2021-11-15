var canvas;
var backgroundImage, bgImg, animal1_img, animal2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, animal1, animal2,bush, grass;
var animals = [];
var bushImage, grassImage;
//BP
function preload() {
  backgroundImage = loadImage("./assets/background.jpg");
  animal1_img = loadImage("../assets/animal1.png");
  animal2_img = loadImage("../assets/animal2.png");
  track = loadImage("../assets/track.png");
  bushImage = loadImage("./assets/bush.png");
 grassImage = loadImage("./assets/grass.png");
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  gameOver = createSprite(400,100)
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(550,140)
  restart.addImage(restartImg)

  gameOver.scale = 0.5
  restart.scale = 0.1

  gameOver.visible = false
  restart.visible = false
}

//BP
function draw() {
  background(backgroundImage);
  score.text()
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
  textSize(20);
  stroke(3);
  fill("black");
  text("Score: "+ score,camera.postion.x,50);

  if(score >5){
    kangaroo.visible = false
    textSize(30);
    stroke(3);
    fill("black");
    text("Congragulations!! You win the game!!",70,200)
    gameState = WIN
  }
   else if  (gameState === WIN) {
    jungle.velocityX = 0
    kanagroo.velocityY = 0
    obstaclesGroup.setVelocityXEach(0);
    shrubsGroup.setVelocityXeach(0);

    kanagroo.changeAnimation("collided",kanagroo_collided);
 

    obstaclesGroup.setlifetimeEach(-1);
    shrubsGroup.setLifetimeEach(-1);

    
  drawSprites();
   }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  
  




}
