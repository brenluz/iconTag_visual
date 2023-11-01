// laura.js

// laura parameters
let lauraname = 'Laura'
let lauraInitialEnergy = 200
let lauraFoodEnergy = 12
let lauraLostEnergy = 2
let lauraMaxEnergy = 1400
let lauraReprodProb = 0.004
let lauraReprodNumber = 2
let lauraVisionR = 60
let lauraMaxSpeed = 1.5
let lauraR = 12
let imgLaura;

class Laura extends Agent {

    constructor() {
     // change the 'sheep' to 'sheep' or 'wolf' according to the class

	 super(lauraname,
        lauraInitialEnergy, 
        lauraFoodEnergy, 
        lauraLostEnergy, 
        lauraMaxEnergy, 
        lauraReprodProb, 
        lauraReprodNumber, 
        lauraVisionR, 
        lauraMaxSpeed, 
        lauraR)
    }

    show() {
        push() // starting a new drawing state
  translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
  fill(0, 0, 255) // setting fill color as rgb(255, 255, 255)
  strokeWeight(1) // setting stroke weight as 1
  // drawing a circle in the position (0, 0) with a the specified radius
  text(lauraname, 0, -this.r - 5); // displaying the wolf's name above the triangle	// note that the circle position is (0, 0) but we have translated the cursor by pos.x and pos.y before
	noFill()
  rect(0,0,50,50)
  image(imgLaura,0,0,50,50)
  pop() // restoring the previous drawing state

    }

}

function drawHexagon(centerX, centerY, radius, numSides){

    // p5 already has some functionality for drawing more complex shapes
    // beginShape tells p5 that we'll be positioning some vertices in a bit
    beginShape()
  
    // This is where the heavy lifting happens
    // Make equiangular steps around the circle depending on the number of sides
    for(let a = 0; a < TAU; a+=TAU/numSides){
  
      // calculate the cartesian coordinates for a given angle and radius
      // and centered at the centerX and centerY coordinates
      var x = centerX + radius * cos(a)
      var y = centerY + radius * sin(a)
  
      // creating the vertex
      vertex(x, y)
    }
  
    // telling p5 that we are done positioning our vertices
    // and can now draw it to the canvas
    endShape(CLOSE)
  }