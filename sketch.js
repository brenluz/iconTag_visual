let w = 1500;
let h = 700;

let bg;

let vivian;
let laura;
let breno;
let jarbas;
let ricardo;
let thiagol;
let kami;
let francisco;
let thiagom;
let lucas;
let eduardo;
let paula;
let vitor;
let som;

function preload() {
  som = loadSound("sounds/placeholder.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight); // creating canvas with width w and height h

  vivian = new Vivian();
  laura = new Laura();
  breno = new Breno();
  jarbas = new Jarbas();
  ricardo = new Ricardo();
  thiagol = new Thiagol();
  francisco = new Francisco();
  thiagom = new Thiagom();
  kami = new Kami();
  lucas = new Lucas();
  eduardo = new Eduardo();
  gigi = new Gigi();
  vitor = new Vitor();
  paula = new Paula();
  lena = new Lena();

  iconicos = [
    breno,
    eduardo,
    francisco,
    gigi,
    jarbas,
    kami,
    laura,
    lena,
    lucas,
    ricardo,
    thiagol,
    thiagom,
    vitor,
    vivian,
  ];

  imgBreno = loadImage("images/breno.png");
  imgEdu = loadImage("images/eduardo.png");
  imgFrancisco = loadImage("images/francisco.png");
  imgGigi = loadImage("images/gigi.png");
  imgJarbas = loadImage("images/jarbas.png");
  imgKami = loadImage("images/kami.png");
  imgLaura = loadImage("images/laura.png");
  imgLena = loadImage("images/lena.png");
  imgLucas = loadImage("images/lucas.png");
  // imgPaula = loadImage('images/paula.png')
  imgRicardo = loadImage("images/ricardo.png");
  imgThiagol = loadImage("images/thiagol.png");
  imgThiagom = loadImage("images/thiagom.png");
  imgVivian = loadImage("images/vivian.png");
  imgVitor = loadImage("images/vitor.png");

  bg = loadImage("images/logot.png");
}

function draw() {
  background(255); // setting background color as rgb(200, 200, 200)
  // displacing the origin to the center of the canvas

  imageMode(CENTER);
  image(bg, windowWidth / 2, windowHeight / 2, 640, 640);
  imageMode(CORNER);

  for (i = 0; i < iconicos.length; i++) {
    mostrauser(iconicos[i]);
  }

  for (i = 0; i < iconicos.length; i++) {
    for (j = 0; j < iconicos.length; j++) {
      if (i != j) {
        colidir(iconicos[i], iconicos[j]);
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
  for (i = 0; i < iconicos.length; i++) {
    if (user != iconicos[i]) {
      colidir(user, iconicos[i]);
    }
  }
}
