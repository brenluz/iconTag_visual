// lena.js

// lena parameters
let lenaname = 'Lena'
let lenaInitialEnergy = 200
let lenaFoodEnergy = 12
let lenaLostEnergy = 2
let lenaMaxEnergy = 1400
let lenaReprodProb = 0.004
let lenaReprodNumber = 2
let lenaVisionR = 60
let lenaMaxSpeed = 1.5
let lenaR = 20
let imgLena;

class Lena extends Agent {

    constructor() {
     // change the 'lena' to 'lena' or 'wolf' according to the class

	 super(lenaname,
        lenaInitialEnergy, 
        lenaFoodEnergy, 
        lenaLostEnergy, 
        lenaMaxEnergy, 
        lenaReprodProb, 
        lenaReprodNumber, 
        lenaVisionR, 
        lenaMaxSpeed, 
        lenaR)
    }

    show() {
        push() // starting a new drawing state
     translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
     fill(18, 10, 143) // setting fill color as rgb(255, 255, 255)
     strokeWeight(1) // setting stroke weight as 1
    	// drawing a circle in the position (0, 0) with a the specified radius
        text(lenaname, 0, -this.r - 5)
        noFill()
        rect(0,0,50,50)
        image(imgLena,0,0,50,50); 

       
        
        pop() // restoring the previous drawing state

    }
   
}
