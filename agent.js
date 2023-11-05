class Agent extends Vehicle {
  constructor(name, maxSpeed, imgSource, existingPosition) {
    let x, y;

    // initial position
    // x = Math.random() * (windowWidth - 1) + 1;
    // y = Math.random() * (windowHeight - 1) + 1;

    while (true) {
      x = Math.random() * (windowWidth - 1) + 1;
      y = Math.random() * (windowHeight - 1) + 1;

      if (!existingPositions.some(pos => dist(x, y, pos.x, pos.y) < 150)) {
        print("shit")
        break;
      }
    }
    super(x, y);
    
    // parameters
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.imgSource = imgSource != '' ? loadImage(imgSource) : loadImage('https://placehold.co/50X50?text=ICON');

    existingPositions.push({ x, y });
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
