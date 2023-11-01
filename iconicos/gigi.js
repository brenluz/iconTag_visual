// gigi.js

 // gigi parameters
 let giginame = 'Giovanna'
 let gigiInitialEnergy = 500
 let gigiFoodEnergy = 50
 let gigiLostEnergy = 4
 let gigiMaxEnergy = 2000
 let gigiReprodProb = 0.002
 let gigiReprodNumber = 3
 let gigiVisionR = 100
 let gigiMaxSpeed = 1.5
 let gigiR = 20
 let imgGigi;

class Gigi extends Agent {
   
    constructor() {
        super(giginame,
            gigiInitialEnergy, 
            gigiFoodEnergy, 
            gigiLostEnergy, 
            gigiMaxEnergy, 
            gigiReprodProb, 
            gigiReprodNumber, 
            gigiVisionR, 
            gigiMaxSpeed, 
            gigiR)
       
    }

    show() {
        push() // starting a new drawing state
         translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y
         fill(34, 150, 34) // setting fill color as rgb(56, 56, 56)
         strokeWeight(1) // setting stroke weight as 1
         // displaying the triangle with:
         // vertex 1: (-radius, -radius / 2)
         // vertex 2: (-radius, radius / 2)
         // vertex 3(radius, 0)
         // remember that this is displaced by pos.x and pos.y because of `translate()`

         
         fill(0,0,0)

         text(giginame, 0, -this.r - 5); // displaying the gigi's name above the triangle

         noFill()
         rect(0,0,50,50)
         image(imgGigi,0,0,50,50)
         
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
    endShape()
}