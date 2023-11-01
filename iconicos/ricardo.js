// ricardo.js

// ricardo parameters
let ricardoname = 'Ricardo'
let ricardoInitialEnergy = 200
let ricardoFoodEnergy = 12
let ricardoLostEnergy = 2
let ricardoMaxEnergy = 1400
let ricardoReprodProb = 0.004
let ricardoReprodNumber = 2
let ricardoVisionR = 60
let ricardoMaxSpeed = 1.5
let ricardoR = 30
let imgRicardo;

class Ricardo extends Agent {

    constructor() {
     // change the 'ricardo' to 'ricardo' or 'wolf' according to the class

	 super(ricardoname,
        ricardoInitialEnergy, 
        ricardoFoodEnergy, 
        ricardoLostEnergy, 
        ricardoMaxEnergy, 
        ricardoReprodProb, 
        ricardoReprodNumber, 
        ricardoVisionR, 
        ricardoMaxSpeed, 
        ricardoR)
    }

    show() {
        push() // starting a new drawing state
  translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
  text(ricardoname, 0, -this.r - 5); 
  fill(255, 255, 255) // setting fill color as rgb(255, 255, 255)
  strokeWeight(1) // setting stroke weight as 1
  noFill()
  rect(0,0,50,50)
  image(imgRicardo,0,0,50,50); 

  
  pop() // restoring the previous drawing state

    }

}