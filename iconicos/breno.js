// breno.js

 // breno parameters
 let brenoname = 'Breno'
 let brenoInitialEnergy = 500
 let brenoFoodEnergy = 50
 let brenoLostEnergy = 4
 let brenoMaxEnergy = 2000
 let brenoReprodProb = 0.002
 let brenoReprodNumber = 3
 let brenoVisionR = 100
 let brenoMaxSpeed = 1.5
 let brenoR = 15
 let imgBreno;
 let spriteBreno;

class Breno extends Agent {
   
    constructor() {
        super(brenoname,
            brenoInitialEnergy, 
            brenoFoodEnergy, 
            brenoLostEnergy, 
            brenoMaxEnergy, 
            brenoReprodProb, 
            brenoReprodNumber, 
            brenoVisionR, 
            brenoMaxSpeed, 
            brenoR)
       
    }

    show() {
        push() // starting a new drawing state
         translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
         fill(56, 56, 56) // setting fill color as rgb(56, 56, 56)
         strokeWeight(1) // setting stroke weight as 1
         // displaying the triangle with:
         // vertex 1: (-radius, -radius / 2)
         // vertex 2: (-radius, radius / 2)
         // vertex 3(radius, 0)
         // remember that this is displaced by pos.x and pos.y because of `translate()`
         
         text(brenoname, 0, -this.r - 8); // displaying the breno's name above the triangle
         noFill()
         noStroke()
         spriteBreno = rect(0,0,50,50)
         image(imgBreno,0,0,50,50)

         pop() // restoring the previous drawing state
    }

}