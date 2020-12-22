var canvas, backgroundImage;

var gameState ;
var playerCount;
var allPlayers;
var maxCount;
var maxRounds;
var database;



var form, player, game;



function preload(){
 
}


function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  maxCount = 0;
  maxRounds = 0;
  game = new Game();
 

  Game.getState();

  game.start();
  maxRounds  = 0;

}


function draw(){
  
  if(playerCount===maxCount && gameState===1){
    Game.update(2);
  }
  if(gameState === 2){
    clear();
    game.play();
  }

  if(gameState===3){
    //clear();
    //game.wait();
    game.end();
  }
  if(playerCount>maxCount){
    form.tooManyError();
  }
}


// function windowResized() {
//   resizeCanvas(windowWidth-50 , windowHeight-50);
// }
