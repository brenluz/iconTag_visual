// lucas.js

// lucas parameters
let lucasname = 'Lucas'
let lucasInitialEnergy = 200
let lucasFoodEnergy = 12
let lucasLostEnergy = 2
let lucasMaxEnergy = 1400
let lucasReprodProb = 0.004
let lucasReprodNumber = 2
let lucasVisionR = 60
let lucasMaxSpeed = 1.5
let lucasR = 50
let imgLucas;




class Lucas extends Agent {

    constructor() {
     // change the 'lucas' to 'lucas' or 'wolf' according to the class

	 super(lucasname,
        lucasInitialEnergy, 
        lucasFoodEnergy, 
        lucasLostEnergy, 
        lucasMaxEnergy, 
        lucasReprodProb, 
        lucasReprodNumber, 
        lucasVisionR, 
        lucasMaxSpeed, 
        lucasR)
    }

    show() {
      push() // starting a new drawing state
      translate(this.pos.x, this.pos.y) // displacing the cursor by pos.x and pos.y

      /*texture(imglucas)
      lucasBox = createGraphics(100,100)

      fill(255,255,255)
      lucasBox.text(lucasname, 0, -this.r + 20 ); // displaying the wolf's name above the triangle	// note that the circle position is (0, 0) but we have translated the cursor by pos.x and pos.y before
      */
     text(lucasname, 0, -this.r +15  ); 
     noFill()
     rect(0,0,50,50)
      image(imgLucas,0,0,50,50)
      pop() // restoring the previous drawing state
    }
  
}

function polygon( x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }