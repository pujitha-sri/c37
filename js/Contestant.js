class Contestant {
  constructor(){
    this.input = createInput("").attribute("placeHolder","Enter Your Name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png","game title");
    this.greeting = createElement("h2");
  }

   setElementsPosisition(){
     this.titleImg.position(120,70);
     this.input.position(width/2-110,height/2-80);
     this.playButton.position(width/2-90,height/2-20);
     this.greeting.position(width/2-300,height/2-100);
   }
   setElementsStyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
   }
   hide(){
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
   }
   handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.playButton.hide();
      this.input.hide();
      var message =`Hello & {this.input.value()} </br> wait for anthor player`
      this.greeting.html(message)
      player.name=this.input.value
    });
    display()
    
    

   }

}

  

  

