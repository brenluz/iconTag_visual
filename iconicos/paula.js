// paula.js

// paula parameters
let paulaname = 'Paula'
let paulaInitialEnergy = 200
let paulaFoodEnergy = 12
let paulaLostEnergy = 2
let paulaMaxEnergy = 1400
let paulaReprodProb = 0.004
let paulaReprodNumber = 2
let paulaVisionR = 60
let paulaMaxSpeed = 1.5
let paulaR = 20
let imgPaula;

class Paula extends Agent {

    constructor() {
     // change the 'paula' to 'paula' or 'wolf' according to the class

	 super(paulaname,
        paulaInitialEnergy, 
        paulaFoodEnergy, 
        paulaLostEnergy, 
        paulaMaxEnergy, 
        paulaReprodProb, 
        paulaReprodNumber, 
        paulaVisionR, 
        paulaMaxSpeed, 
        paulaR)
    }

    show() {
        push() // starting a new drawing state
     translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
    fill(222, 92, 222) // setting fill color as rgb(255, 255, 255)
    strokeWeight(1) // setting stroke weight as 1
  	// drawing a circle in the position (0, 0) with a the specified radius
        text(paulaname, 0, -this.r - 5); // displaying the wolf's name above the triangle	// note that the circle position is (0, 0) but we have translated the cursor by pos.x and pos.y before
        polygon(0,0,this.r,7)// thus the circle will be displayed in position (0 + pos.x, 0 + pos.y) = (pos.x, pos.y)
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