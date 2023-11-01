// eduardo.js

// eduardo parameters
let eduardoname = 'Eduardo'
let eduardoInitialEnergy = 200
let eduardoFoodEnergy = 12
let eduardoLostEnergy = 2
let eduardoMaxEnergy = 1400
let eduardoReprodProb = 0.004
let eduardoReprodNumber = 2
let eduardoVisionR = 60
let eduardoMaxSpeed = 1.5
let eduardoR = 20
let imgEdu;

class Eduardo extends Agent {

    constructor() {
     // change the 'eduardo' to 'eduardo' or 'wolf' according to the class

	 super(eduardoname,
        eduardoInitialEnergy, 
        eduardoFoodEnergy, 
        eduardoLostEnergy, 
        eduardoMaxEnergy, 
        eduardoReprodProb, 
        eduardoReprodNumber, 
        eduardoVisionR, 
        eduardoMaxSpeed, 
        eduardoR)
    }

    show() {
        push() // starting a new drawing state
     translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
     fill(18, 10, 143) // setting fill color as rgb(255, 255, 255)
     strokeWeight(1) // setting stroke weight as 1
    	// drawing a circle in the position (0, 0) with a the specified radius
        text(eduardoname, 0, -this.r - 5)
        noFill()
        rect(0,0,50,50)
        image(imgEdu,0,0,50,50); 

       
        
        pop() // restoring the previous drawing state

    }
   
}
