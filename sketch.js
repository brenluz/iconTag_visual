let w = 1500;
let h = 700;

let bg;

let iconicos = {};
let iconico = [];

let som;

function preload() {
  som = loadSound("sounds/placeholder.mp3");
  iconicos  = loadJSON("iconicos/iconicos.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight); // creating canvas with width w and height h

  bg = loadImage("images/logot.png");
  loadIconicos();
}

function loadIconicos() {
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

function draw() {
  background(255);

  imageMode(CENTER);
  image(bg, windowWidth / 2, windowHeight / 2, 640, 640);
  imageMode(CORNER);

  for (i = 0; i < iconico.length; i++) {
    mostrauser(iconico[i]);
    console.log(iconico[i].name);
  }

  for (i = 0; i < iconico.length; i++) {
    for (j = 0; j < iconico.length; j++) {
      if (i != j) {
        colidir(iconico[i], iconico[j]);
      }
    }
  }
  // usercollision(breno)
  // usercollision(eduardo)
  // usercollision(francisco)
  // usercollision(gigi)
  // usercollision(jarbas)
  // usercollision(kami)
  // usercollision(laura)
  // usercollision(lucas)
  // usercollision(paula)
  // usercollision(ricardo)
  // usercollision(thiagol)
  // usercollision(thiagom)
  // usercollision(vitor)
  // usercollision(vivian)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mostrauser(user) {
  user.wander();
  user.update();
  user.show();
  user.edges();
}

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
  }
}

function usercollision(user) {
  for (i = 0; i < iconico.length; i++) {
    if (user != iconico[i]) {
      colidir(user, iconico[i]);
    }
  }
}
