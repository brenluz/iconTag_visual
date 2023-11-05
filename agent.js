class Agent extends Vehicle {
  constructor(name, maxSpeed, imgSource) {

    // initial position
    let x = Math.random() * (windowWidth - 1) + 1;
    let y = Math.random() * (windowHeight - 1) + 1;
    super(x, y);
    
    // parameters
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.imgSource = imgSource != '' ? loadImage(imgSource) : loadImage('https://placehold.co/50X50?text=ICON');
  
    this.mask = createGraphics(50, 50);
    this.mask.ellipse(0, 0, 50, 50); // Draw a circle in the mask
    this.imgSource.mask(this.mask); // Apply the mask to the image
  }

  show() {
    push()
    
    translate(this.pos.x, this.pos.y) 
    
    fill(56, 56, 56)
    strokeWeight(1) 
    rect(0,0,50,50)

    imageMode(CORNERS)
    image(this.imgSource, 0, 0, 50, 50) 

    text(this.name, 0, 65); 
    noFill()

    pop()
}
}
