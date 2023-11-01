// thiagom.js

 // thiagom parameters
 let thiagomname = 'Thiago Moreira'
 let thiagomInitialEnergy = 500
 let thiagomFoodEnergy = 50
 let thiagomLostEnergy = 4
 let thiagomMaxEnergy = 2000
 let thiagomReprodProb = 0.002
 let thiagomReprodNumber = 3
 let thiagomVisionR = 100
 let thiagomMaxSpeed = 1.5
 let thiagomR = 20
  let imgThiagom;

class Thiagom extends Agent {
   
    constructor() {
        super(thiagomname,
            thiagomInitialEnergy, 
            thiagomFoodEnergy, 
            thiagomLostEnergy, 
            thiagomMaxEnergy, 
            thiagomReprodProb, 
            thiagomReprodNumber, 
            thiagomVisionR, 
            thiagomMaxSpeed, 
            thiagomR)
       
    }

    show() {
        push() // starting a new drawing state
         translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
         fill(255, 0, 255) // setting fill color as rgb(56, 56, 56)
         strokeWeight(1) // setting stroke weight as 1
         // displaying the triangle with:
         // vertex 1: (-radius, -radius / 2)
         // vertex 2: (-radius, radius / 2)
         // vertex 3(radius, 0)
         // remember that this is displaced by pos.x and pos.y because of `translate()`
         //polygon(0, 0, this.r, 20);
         fill(0,0,0)
         text(thiagomname, 0, -this.r - 5); // displaying the thiagom's name above the triangle
         noFill()
         rect(0,0,50,50)
         image(imgThiagom,0,0,50,50)
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