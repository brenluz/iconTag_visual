// vivian.js

// vivian parameters
let vivianname = 'Vivian'
let vivianInitialEnergy = 200
let vivianFoodEnergy = 12
let vivianLostEnergy = 2
let vivianMaxEnergy = 1400
let vivianReprodProb = 0.004
let vivianReprodNumber = 2
let vivianVisionR = 60
let vivianMaxSpeed = 1.5
let vivianR = 20
let imgVivian;

class Vivian extends Agent {

    constructor() {
     // change the 'vivian' to 'vivian' or 'wolf' according to the class

	   super( vivianname,
      vivianInitialEnergy, 
        vivianFoodEnergy, 
        vivianLostEnergy, 
        vivianMaxEnergy, 
        vivianReprodProb, 
        vivianReprodNumber, 
        vivianVisionR, 
        vivianMaxSpeed, 
        vivianR)
    }

    show() {
      
      push() // starting a new drawing state
     translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
     fill('black') // setting fill color as rgb(255, 255, 255)
     strokeWeight(1) // setting stroke weight as 1
       // drawing a circle in the position (0, 0) with a the specified radius
        text(vivianname, 0, -this.r - 5);
         // displaying the wolf's name above the triangle	// note that the circle position is (0, 0) but we have translated the cursor by pos.x and pos.y before
         noFill()
         rect(0,0,50,50)
         image(imgVivian,0,0,50,50)

      // thus the circle will be displayed in position (0 + pos.x, 0 + pos.y) = (pos.x, pos.y)
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