// WINDOW SIZE
let w = 1500;
let h = 700;

let bg;

// DATA VARIABLES
let data = {};
let iconico = [];

let closest = null;

let som; 

function preload() {
  //som = loadSound("source/sounds/discord.mp3"); // Resposta sonora WIP
  data = loadJSON("data.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage("source/images/logo_transparent.png");
  loadUsers();

  rectMode(CORNER);
  ellipseMode(CENTER);
}

function draw() {
  background(255);

  imageMode(CENTER);
  image(bg, windowWidth / 2, windowHeight / 2, 640, 640);
  imageMode(CORNER);

  for (i = 0; i < iconico.length; i++) {
    mostraUser(iconico[i]);
  }

  for (i = 0; i < iconico.length; i++) {
    for (j = 0; j < iconico.length; j++) {
      if (i != j) {
        colide(iconico[i], iconico[j]);
      }
    }
  }

}
// LOAD USERS FUNCTION
function loadUsers() {
  for (let i = 0; i < data.iconicos.length; i++) {
    iconico.push(new Agent(
      data.iconicos[i].name,
      data.iconicos[i].maxSpeed,
      data.iconicos[i].imgSource
    ))
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// SHOW THE USERS ON SCREEN
function mostraUser(user) {
  user.wander()
  user.update(); 
  user.show(); 
  user.edges();
}

// COLLIDE FUNCTION
function colide(user1, user2) {
   if (
    collideRectRect(
      user1.pos.x,
      user1.pos.y,
      50,
      50,
      user2.pos.x,
      user2.pos.y,
      50,
      50
    )
  ) {
      user1.vel.x *= Math.floor(Math.random() * (-1) - 1);
      user1.vel.y *= Math.floor(Math.random() * (-1) - 1);
    
      // som.play()
   }
}