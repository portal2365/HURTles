class Game {
    constructor(){}
    

    getState(){

        var gameStateRef = database.ref('gameState');

      gameStateRef.on("value",function(data){

        gameState = data.val();

        })
     

    }

    

    
    update(state){

        database.ref('/').update({

        gameState: state
      });

    }

    

    
    async start(){

        if(gameState === 0){

        player = new Player();

        var playerCountRef = await database.ref('playerCount').once("value");

        if(playerCountRef.exists()){

            playerCount = playerCountRef.val();

          player.getCount();

        }

        form = new Form();

        form.display();

    }

    }

    play(){

        form.hide();

       background("brown");

       Player.getPlayerInfo();

       player.getRunnersAtEnd();

       if(allPlayers !== undefined){

        var display_position = 30;

         for(var plr in allPlayers){

            if(plr == "player"+player.index){

            fill("red");

             camera.position.x = allPlayers[plr].distance;

             camera.position.y = displayHeight/2;

            }

           else

           fill("black");

             display_position+=200;

           text(allPlayers[plr].name,allPlayers[plr].distance-50,display_position);

           text("SCORE: "+allPlayers[plr].score,allPlayers[plr].distance+50,display_position);

           text("SCORE: "+allPlayers[plr].score,displayWidth*2+70,display_position);

           circle(allPlayers[plr].distance,display_position,20,20);

           
           

           if(allPlayers[plr].distance<displayWidth+5&&allPlayers[plr].distance>displayWidth-5){
            player.score-=500;

        }

          
          

          if(allPlayers[plr].distance<displayWidth+305&&allPlayers[plr].distance>displayWidth+295){
          player.score-=500;

        }

        
        

        if(allPlayers[plr].distance<displayWidth+605&&allPlayers[plr].distance>displayWidth+595){

            player.score-=500;

        }

        if(allPlayers[plr].distance<displayWidth+905&&allPlayers[plr].distance>displayWidth+895){

            player.score-=500;

        }

        if(allPlayers[plr].distance<displayWidth+1205&&allPlayers[plr].distance>displayWidth+1195){

            player.score-=500;

        }

        if(allPlayers[plr].distance<displayWidth+1505&&allPlayers[plr].distance>displayWidth+1495){

            player.score-=500;

        }

        if(allPlayers[plr].distance<displayWidth+1805&&allPlayers[plr].distance>displayWidth+1795){

            player.score-=500;

        }

    }

       if(keyIsDown(UP_ARROW)&&player.index!==null&&player.distance<displayWidth*2+50){

        player.distance+=10;

          player.update();

          player.score+=1;

        }

       if(mouseIsPressed&&player.index!==null&&player.distance<displayWidth*2+50){

        player.distance+=16;

         player.update();   
     }
    }
  }
  }
  