class Game {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
      console.log('Game state changed... to ', gameState, 'rank is ',player.rank);
    })

  }

 static update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0||gameState===1 ) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
    
    }

    if(playerCount<=4){
      form = new Form()
      form.display();
      car1 = createSprite(100, 200);
      car1.addImage("car1", car1_img);
      car2 = createSprite(300, 200);
      car2.addImage("car2", car2_img);
      car3 = createSprite(500, 200);
      car3.addImage("car3", car3_img);
      car4 = createSprite(700, 200);
      car4.addImage("car4", car4_img);
      cars = [car1, car2, car3, car4];
      }
      //else too Many error will be called
   
  }

  play() {
    form.hide();

    Player.getPlayerInfo();
    Player.getCarsReached();
    if (allPlayers !== undefined) {
      //var display_position = 100;
      background(rgb(255, 135, 103));
      image(track, 0, -displayHeight*5 , displayWidth, displayHeight * 6);
      //index of the array
      var index = 0;


      //x and y position of the cars
      var x = 175;
      var y;

      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance - 500;
        cars[index - 1].x = x;
        cars[index - 1].y = y;

        if (index === player.index) {
          // cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y;
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60)
        }

        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 20
      player.update();
    }

    if (player.distance > displayHeight *5 - 360) {
      carsReached++;
      Player.updateCarsReached(carsReached)
      player.rank = carsReached;
     // internalState=1;
      player.update();
     // gameState = 2;
      if(player.rank===4)
      {
        gameState=2
        game.update(gameState)
      }
      console.log("reached " + player.rank)   

    }

    drawSprites();
  }


  wait() {
    console.log("player"+ player.index+" "+player.rank)
    form.hide();
    form.showResult();
    Player.getPlayerInfo();
    Player.getCarsReached();
    if (allPlayers !== undefined) {
      //var display_position = 100;
      background(rgb(255, 135, 103));
      image(track, 0, -displayHeight * 5, displayWidth, displayHeight * 6);
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y;

      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance - 500;
        cars[index - 1].x = x;
        cars[index - 1].y = y;

        if (index === player.index) {
          // cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y;
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60)
        }

        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }
    
    drawSprites();
  }


  end(){
    form.hide();
    // background("white");
    form.showResult();
    // textSize(50);
    // text("GAME ENDED",displayWidth/2,displayHeight/2)
    console.log("GAME ENDED")
    console.log("player" + player.index + " rank : " + player.rank)
  }



}
