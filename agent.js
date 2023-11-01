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
    r
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
  }
}
