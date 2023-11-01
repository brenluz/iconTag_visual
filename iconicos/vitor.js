// vitor.js

// vitor parameters
let vitorname = 'Vitor'
let vitorInitialEnergy = 200
let vitorFoodEnergy = 12
let vitorLostEnergy = 2
let vitorMaxEnergy = 1400
let vitorReprodProb = 0.004
let vitorReprodNumber = 2
let vitorVisionR = 60
let vitorMaxSpeed = 1.5
let vitorR = 20
let imgVitor;

class Vitor extends Agent {

    constructor() {
     // change the 'vitor' to 'vitor' or 'wolf' according to the class

	 super(vitorname,
        vitorInitialEnergy, 
        vitorFoodEnergy, 
        vitorLostEnergy, 
        vitorMaxEnergy, 
        vitorReprodProb, 
        vitorReprodNumber, 
        vitorVisionR, 
        vitorMaxSpeed, 
        vitorR)
    }

    show() {
        push() // starting a new drawing state
     translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
    fill('black') // setting fill color as rgb(255, 255, 255)
    strokeWeight(1) // setting stroke weight as 1
  	// drawing a circle in the position (0, 0) with a the specified radius
        text(vitorname, 0, -this.r - 5); // displaying the wolf's name above the triangle	// note that the circle position is (0, 0) but we have translated the cursor by pos.x and pos.y before
        noFill()
        rect(0,0,50,50)
        image(imgVitor,0,0,50,50)
        // polygon(0,0,this.r,7)// thus the circle will be displayed in position (0 + pos.x, 0 + pos.y) = (pos.x, pos.y)
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