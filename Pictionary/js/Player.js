class Player {
  constructor(){
    this.index = 0;
    this.score = 0;
    this.name = null;
    this.rank=0;
    this.type="guesser"
  }

 static  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  static updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      name:this.name,
      score:this.score,
      rank:this.rank,
      type:this.type
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  


}
