var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var carsReached=0;


var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}


function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  console.log("disp ht "+displayHeight)
}


function draw(){

  if(playerCount===4 && gameState ===0){
    game.update(1);
  }
  if(gameState === 1 && player.rank===0){
    clear();
    game.play();
  }
  if(gameState ===1 && player.rank>0){
     game.wait();
    
     
  }
  if(gameState===2){
    //clear();
    game.wait();
    game.end();
  }
  if(playerCount>4){
    form.tooManyError();
  }
}


// function windowResized() {
//   resizeCanvas(windowWidth-50 , windowHeight-50);
// }
