// jarbas.js

 // jarbas parameters
 let jarbasname = 'Jarbas'
 let jarbasInitialEnergy = 500
 let jarbasFoodEnergy = 50
 let jarbasLostEnergy = 4
 let jarbasMaxEnergy = 2000
 let jarbasReprodProb = 0.002
 let jarbasReprodNumber = 3
 let jarbasVisionR = 100
 let jarbasMaxSpeed = 3
 let jarbasR = 31
 let imgJarbas;

class Jarbas extends Agent {
   
    constructor() {
        super(jarbasname,
            jarbasInitialEnergy, 
            jarbasFoodEnergy, 
            jarbasLostEnergy, 
            jarbasMaxEnergy, 
            jarbasReprodProb, 
            jarbasReprodNumber, 
            jarbasVisionR, 
            jarbasMaxSpeed, 
            jarbasR)
       
    }

    show() {
        push() // starting a new drawing state
         translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
         fill(0, 0, 0) // setting fill color as rgb(56, 56, 56)
         strokeWeight(1) // setting stroke weight as 1
         // displaying the triangle with:
         // vertex 1: (-radius, -radius / 2)
         // vertex 2: (-radius, radius / 2)
         // vertex 3(radius, 0)
         // remember that this is displaced by pos.x and pos.y because of `translate()`
         
         text(jarbasname, 0, -this.r - 5); // displaying the jarbas's name above the triangle
         noFill()
         rect(0,0,50,50)
         image(imgJarbas,0,0,50,50); 

         pop() // restoring the previous drawing state
    }

}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
}