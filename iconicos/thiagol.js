// thiagol.js

// thiagol parameters
let thiagolname = 'Thiago Leal'
let thiagolInitialEnergy = 200
let thiagolFoodEnergy = 12
let thiagolLostEnergy = 2
let thiagolMaxEnergy = 1400
let thiagolReprodProb = 0.004
let thiagolReprodNumber = 2
let thiagolVisionR = 60
let thiagolMaxSpeed = 1.5
let thiagolR = 15
let imgThiagol;

class Thiagol extends Agent {

    constructor() {
     // change the 'thiagol' to 'thiagol' or 'wolf' according to the class

	 super(thiagolname,
        thiagolInitialEnergy, 
        thiagolFoodEnergy, 
        thiagolLostEnergy, 
        thiagolMaxEnergy, 
        thiagolReprodProb, 
        thiagolReprodNumber, 
        thiagolVisionR, 
        thiagolMaxSpeed, 
        thiagolR)
    }

    show() {
        push() // starting a new drawing state
  translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
  fill(255, 153, 20) // setting fill color as rgb(255, 255, 255)
  strokeWeight(1) // setting stroke weight as 1
  	// drawing a circle in the position (0, 0) with a the specified radius
  text(thiagolname, 0, -this.r - 5); // displaying the wolf's name above the triangle	// note that the circle position is (0, 0) but we have translated the cursor by pos.x and pos.y before
  noFill()
  rect(0,0,50,50)
  image(imgThiagol,0,0,50,50)
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