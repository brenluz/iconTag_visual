let w = 1500;
let h = 700;

let bg;

let iconicos = {};
let iconico = [];

let som; // Resposta sonora WIP

function preload() {
  som = loadSound("sounds/discord.mp3"); // Resposta sonora WIP
  iconicos  = loadJSON("iconicos.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight); // creating canvas with width w and height h

  bg = loadImage("images/logot.png"); // loading the background image
  loadUsers(); // loading the iconicos from the json file
}

function draw() {
  background(255);

  imageMode(CENTER);
  image(bg, windowWidth / 2, windowHeight / 2, 640, 640);
  imageMode(CORNER);

  for (i = 0; i < iconico.length; i++) {
    mostraUser(iconico[i]);
    // console.log(iconico[i].name);
  }

  for (i = 0; i < iconico.length; i++) {
    for (j = 0; j < iconico.length; j++) {
      if (i != j) {
        colidir(iconico[i], iconico[j]);
      }
    }
  }

  // userCollision(iconico[0])
  // usercollision(eduardo)
  // userCollision(francisco)
  // userCollision(gigi)
  // userCollision(jarbas)
  // userCollision(kami)
  // userCollision(laura)
  // userCollision(lucas)
  // userCollision(paula)
  // userCollision(ricardo)
  // userCollision(thiagol)
  // userCollision(thiagom)
  // userCollision(vitor)
  // userCollision(vivian)
}

// função que carrega os iconicos do json
function loadUsers() {
  loopLength = iconicos.user.length;
  for (let i = 0; i < loopLength; i++) {
    console.log(iconicos.user[i].img);
    iconico.push(new Agent(
      iconicos.user[i].name,
      iconicos.user[i].initialEnergy,
      iconicos.user[i].foodEnergy,
      iconicos.user[i].lostEnergy,
      iconicos.user[i].maxEnergy,
      iconicos.user[i].reprodProb,
      iconicos.user[i].reprodNumber,
      iconicos.user[i].visionR,
      iconicos.user[i].maxSpeed,
      iconicos.user[i].r,
      iconicos.user[i].img
    ))
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  som.play(); // Resposta sonora 
}
// função que mostra os usuarios
function mostraUser(user) {
  user.wander();
  user.update();
  user.show();
  user.edges();
}

// função que faz a colisão 
function colidir(user1, user2) {
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
    user1.vel.x = -user1.vel.x;
    user1.vel.y = -user1.vel.y;
    user1.pos.x = user1.pos.x + user1.vel.x;
    user1.pos.y = user1.pos.y + user1.vel.y;
    som.play(); 
  }
}

// função que aplica a colisão a um usuario
function userCollision(user) {
  for (i = 0; i < iconico.length; i++) {
    if (user != iconico[i]) {
      colidir(user, iconico[i]);
    }
  }
}
