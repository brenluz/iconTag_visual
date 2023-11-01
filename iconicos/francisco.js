
// francisco.js

// francisco parameters
let francisconame = 'Francisco'
let franciscoInitialEnergy = 200
let franciscoFoodEnergy = 12
let franciscoLostEnergy = 2
let franciscoMaxEnergy = 1400
let franciscoReprodProb = 0.004
let franciscoReprodNumber = 2
let franciscoVisionR = 60
let franciscoMaxSpeed = 1.5
let franciscoR = 20
let imgFrancisco;

class Francisco extends Agent {

    constructor() {
     // change the 'francisco' to 'francisco' or 'wolf' according to the class

	 super(francisconame,
        franciscoInitialEnergy, 
        franciscoFoodEnergy, 
        franciscoLostEnergy, 
        franciscoMaxEnergy, 
        franciscoReprodProb, 
        franciscoReprodNumber, 
        franciscoVisionR, 
        franciscoMaxSpeed, 
        franciscoR)
    }

    show() {
        push() // starting a new drawing state
     translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
    fill('BLACK') // setting fill color as rgb(255, 255, 255)
    strokeWeight(1) // setting stroke weight as 1
  	// drawing a circle in the position (0, 0) with a the specified radius
        text(francisconame, 0, -this.r - 5); // displaying the wolf's name above the triangle	// note that the circle position is (0, 0) but we have translated the cursor by pos.x and pos.y before
        noFill()
        rect(0,0,50,50)
        image(imgFrancisco,0,0,50,50); 

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