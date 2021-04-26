class Form {

    constructor() {
      this.button =createButton('play');
      this.title = createElement('h2');
      this.greet=createElement('h2');
      this.input=createInput("name");
    }
    hide(){
      
      this.button.hide();

      
      this.title.hide();
    }
  
    display(){
      this.title.html("King hunting");
      this.title.position(displayWidth/2 - 200, 100);
      this.title.style('color','red');
      this.title.style('font-size','70px');
  
      this.input.position(displayWidth/2-100,displayHeight/2-100);
      this.button.position(displayWidth/2 -100, displayHeight/2);
      this.button.style('width','200px');
      this.button.style('height','50px');
      this.button.style('background','green');
      
     this.button.mousePressed(()=>{
       this.title.hide();
       this.button.hide();
       this.input.hide();
       this.greet.html("LET START");
       this.greet.position(200,200);
     
       
     })
      
  
    }
  }
  