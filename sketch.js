var canvas, backgroundImage;

var gameState = 0;

var playerCount = 0;


var database;

var distance = 0;

var score = 0;

var atEnd = 0;

var form, player, game;

var allPlayers;

var reset;



function setup(){

  canvas = createCanvas(displayWidth,displayHeight);

  database = firebase.database();

  game = new Game();

  game.getState();

  game.start();

  reset = createButton('Reset');

  reset.position(displayWidth-30,30);

}


function draw(){

  player.getCount();

  player.getRunnersAtEnd();

  reset.mousePressed(()=>{

    game.update(0);

    player.updateCount(0);

    player.index = null;

  })

  if(playerCount === 4){

    game.update(1);

  }

  if(gameState === 1){

    clear();

    game.play();

    text("THE BLACK LINE INDICATES THE HURDLE. THE RED LINE INDICATES THE LIMIT FROM WHERE YOU CAN JUMP. PRESS THE MOUSE TO JUMP. YOUR SCORE WONT INCREASE IF YOU JUMP",100,100);

    console.log(player.rank);

  }

  for(var i = displayWidth; i<displayWidth*2; i = i+300){

    strokeWeight(2);

    stroke(0);

    line(i,0,i,displayHeight);

    stroke("red");

    line(i-5,0,i-5,displayHeight);

  }

  for(var i = 1 ; i<5 ; i++){

    stroke(0);

    strokeWeight(2);

    line(0,i*200,displayWidth*2+50,i*200);

  }

  textSize(20);

  strokeWeight(5);

  text("FINITO",displayWidth*3+80,displayHeight/2);

  line(displayWidth*2+50,0,displayWidth*2+50,displayHeight);
}
