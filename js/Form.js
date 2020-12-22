class Form {

  constructor() {
    //this.input = createInput("Name");
    this.input = createInput("").attribute("placeholder", "Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.tooMany = createElement('h2')
    this.rounds=createInput("").attribute("placeholder", "enter number of rounds");
    this.number=createInput("").attribute("placeholder", "Enter number of players");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.rounds.hide();
    this.number.hide();
    
  }

  display(){
    this.title.html("Pictionary");
    this.title.position(displayWidth/2 - 50, 0);
    console.log(gameState)
    if(gameState===0){
this.rounds.position(displayWidth/2-40,displayHeight/2-60)
this.number.position(displayWidth/2-40,displayHeight/2-40)
    }

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

   
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.rounds.hide();
    this.number.hide();
      player.name = this.input.value();
      
      if(gameState===0){
        maxCount=+this.number.value();
        maxRounds=+this.rounds.value();
        game.updateMax();

        
      }
      playerCount+=1;
      player.index = playerCount;
      player.rank=0;
      player.score=0;
      player.type="artist"
      if(playerCount===1) {
        Game.update(1)
      }
      if(playerCount>1){
      
        player.type="guesser"
      
      }
      player.update();
      Player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.position (displayWidth-80,30);
    this.reset.mousePressed(()=>{
        Player.updateCount(0);
        Game.update(0)
        maxCount=0;
        maxRounds=0;
        game.updateMax();
        Player.deletePlayers();

        

    })
  }
  
  showResult(){
    this.reachedPos.position(displayWidth/2 - 40 , 80);
    this.reachedPos.html("Game Over! Your position : " + player.rank)
  }
  tooManyError(){
    this.tooMany.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.tooMany.html('game room full please try again later ');
    this.reset.position (displayWidth-80,30);
    this.reset.mousePressed(()=>{
        Player.updateCount(0);
        Game.update(0)
  })

  }
}
