class Form {


    constructor() {

      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');

    }


    hide(){

      this.greeting.hide();
      this.input.hide();
      this.button.hide();

    }
  

    display(){

      var title = createElement('h2')
      title.html("Hurdles");
      title.position(displayWidth/2, 0);
      
      this.input.position(displayWidth/2, displayHeight/3);
      this.button.position(displayWidth/2, displayHeight/3+30);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name = this.input.value();
        player.getCount();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Heya " + player.name )
        this.greeting.position(displayWidth/2, displayHeight/3)

      });
  

    }


  }
  