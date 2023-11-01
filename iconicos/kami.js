// kami.js

 // kami parameters
 let kaminame = 'Kami'
 let kamiInitialEnergy = 500
 let kamiFoodEnergy = 50
 let kamiLostEnergy = 4
 let kamiMaxEnergy = 2000
 let kamiReprodProb = 0.002
 let kamiReprodNumber = 3
 let kamiVisionR = 100
 let kamiMaxSpeed = 1.5
 let kamiR = 20
  let imgKami;

class Kami extends Agent {
   
    constructor() {
        super(kaminame,
            kamiInitialEnergy, 
            kamiFoodEnergy, 
            kamiLostEnergy, 
            kamiMaxEnergy, 
            kamiReprodProb, 
            kamiReprodNumber, 
            kamiVisionR, 
            kamiMaxSpeed, 
            kamiR)
       
    }

    show() {
        push() // starting a new drawing state
         translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
         fill(0, 255, 0) // setting fill color as rgb(56, 56, 56)
         strokeWeight(1) // setting stroke weight as 1
         // displaying the triangle with:
         // vertex 1: (-radius, -radius / 2)
         // vertex 2: (-radius, radius / 2)
         // vertex 3(radius, 0)
         // remember that this is displaced by pos.x and pos.y because of `translate()`
         fill(0,0,0)
         text(kaminame, 0, -this.r - 5); // displaying the kami's name above the triangle

         noFill()
         rect(0,0,50,50)
         image(imgKami,0,0,50,50); 
 
         
         pop() // restoring the previous drawing state
    }

}

function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }