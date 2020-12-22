class Game {
  constructor() {

  }

  static getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

 static update(state) {
    database.ref('/').update({
      gameState: state
    });
  }


  updateMax(){
    database.ref('/').update({
      maxCount: maxCount,
      maxRounds : maxRounds
    })
  }

  async start() {
    console.log(gameState)

    
      

    if (gameState === 0||gameState===1 ) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        Player.getCount();
      }


      //find out max players and rounds if not the admin player
      if(gameState!=0){
        var maxCountRef = await database.ref('maxCount').once('value');
        if(maxCountRef.exists()){
          maxCount = +maxCountRef.val();
        }

        var maxRoundsRef = await database.ref('maxRounds').once('value');
        if(maxRoundsRef.exists()){
          maxRounds =+maxRoundsRef.val();
        }

      }
    
    }

    if(player.index<=maxCount){
      form = new Form()
      form.display();
      
      }
     else {
       form.tooManyError();
     }
   
  }

  play() {
    form.hide();

    Player.getPlayerInfo();
    if (allPlayers !== undefined) {
      //var display_position = 100;
      background(rgb(255, 135, 103));
      
      var index = 0;



      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

     
        if (index === player.index) {
         
        }

      }

    }

  

    drawSprites();
  }


  wait() {
   
  }


  end(){
    form.hide();
    // background("white");
    form.showResult();
    // textSize(50);
    // text("GAME ENDED",displayWidth/2,displayHeight/2)
    //if first admin player playing 
  
    //delete player info 
    Player.deletePlayers();

    console.log("GAME ENDED")
    console.log("player" + player.index + " rank : " + player.rank)
  }



}
