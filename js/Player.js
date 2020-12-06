class Player {

    constructor(){

        this.index = null;

      this.distance = 0;

      this.name = null;

      this.score = 0;

      this.rank = 0;

    }




      getCount(){

        var playerCountRef = database.ref('playerCount');

      playerCountRef.on("value",function(data){

        playerCount = data.val();

    })

    }




    updateCount(count){

        database.ref('/').update({

        playerCount: count

    });

    }




    update(){

        var playerIndex = "players/player" + this.index;

      database.ref(playerIndex).set({

        name:this.name,

        distance:this.distance,

        score: this.score,

        rank: this.rank

    });

    
    }

    
    static getPlayerInfo(){

        
        var playerInfoRef = database.ref('players');

      playerInfoRef.on("value",(data)=>{

        allPlayers = data.val();

    })

    }

    getRunnersAtEnd(){

        var ref = database.ref('atEnd');

      ref.on('value',(data)=>{

        this.rank = data.val();

    });

      
   }


   updateRunnersAtEnd(rank){
  
  
    database.ref('/').update({
   
   
        atEnd: rank
   
   
    })
 

}
 

}
  