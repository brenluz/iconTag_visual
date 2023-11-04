class Agent extends Vehicle {
  constructor(
    name,
    initialEnergy,
    foodEnergy,
    lostEnergy,
    maxEnergy,
    reprodProb,
    reprodNumber,
    visionR,
    maxSpeed,
    r,
    img
  ) {
    // constructor code here

    // initial position
    let x = Math.random() * (width - 1) + 1;
    let y = Math.random() * (height - 1) + 1;
    super(x, y);
    // parameters
    this.name = name;
    this.energy = initialEnergy;
    this.foodEnergy = foodEnergy;
    this.lostEnergy = lostEnergy;
    this.maxEnergy = maxEnergy;
    this.reprodProb = reprodProb;
    this.reprodNumber = reprodNumber;
    this.visionR = visionR;
    this.maxSpeed = maxSpeed;
    this.r = r;
    if (img != null) {
      this.img = loadImage(img);
    }
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
     
     text(this.name, 0, -this.r - 8); // displaying the breno's name above the triangle
     noFill()
     noStroke()
     rect(0,0,50,50)
     if (this.img != null) {
       image(this.img,0,0,50,50)
     }

     pop() // restoring the previous drawing state
}
}
