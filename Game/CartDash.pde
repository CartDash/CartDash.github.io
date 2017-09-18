// Cart Dash
// Sept 19, 2017
// Gavin, Amy, Ben

//Booleans for screens
boolean mainScreen = true;
boolean preLevel = false;
boolean mainGame = false;
boolean faceRight = true;
boolean veggieDone = false;

boolean onPlatform = false;

boolean grapeCatch = false;
boolean tomatoCatch = false;
boolean carrotCatch = false;
boolean bananaCatch = false;

float points = 0;
//Platform p;

//Display life/timer/etc. 
int startTime = 120;  
int time;
int lifeMe = 3;
int level = 1;

//Initial positions of the cart
float imgX = 50, imgY = 700, initialY = imgY;  

//Gravity
float gravity = 0.1;
float speed = 0;

//Which info screen to show
int preLevelCount = 1;              
//All designs were created by Ben
PImage imgBackground;
PImage imgBackground1;
PImage imgBaguette;
PImage imgBanana;
PImage imgBread;
PImage imgCarrot;
PImage imgCartLeft;
PImage imgCartRight;
PImage imgCheese;
PImage imgChocolateLeft;
PImage imgChocolateRight;
PImage imgClerk;
PImage imgCookie;
PImage imgCrackers;
PImage imgEggs;
PImage imgGrapes;
PImage imgHam;
PImage imglevel_1_1;
PImage imglevel_1_2;
PImage imglevel_1_3;
PImage imglevel_1_4;
PImage imglevel_1_5;
PImage imglevel_1_6;
PImage imgMilk;
PImage imgRice;
PImage imgSteak;
PImage imgTomato;

// variable for deciding if cart is moving up or not
int up = 4;

void setup() {
  size(1050, 700);
  imgBackground1 = loadImage("background1.png");
  imgBaguette = loadImage("Baguette.png");
  imgBanana = loadImage("banana.png");
  imgBread = loadImage("Bread.png");
  imgCarrot = loadImage("Carrot.png");
  imgCartLeft = loadImage("CartLeft.png");
  imgCartRight = loadImage("CartRight.png");
  imgCheese = loadImage("Cheese.png");
  imgChocolateLeft = loadImage("ChocolateLeft.png");
  imgChocolateRight = loadImage("ChocolateRight.png");
  imgClerk = loadImage("Clerk.png");
  imgCookie = loadImage("cookie.png");
  imgCrackers = loadImage("Crackers.png");
  imgEggs = loadImage("Eggs.png");
  imgGrapes = loadImage("Grapes.png");
  imgHam = loadImage("Ham.png");
  imglevel_1_1 = loadImage("level_1_1.png");
  imglevel_1_2 = loadImage("level_1_2.png");
  imglevel_1_3 = loadImage("level_1_3.png");
  imglevel_1_4 = loadImage("level_1_4.png");
  imglevel_1_5 = loadImage("level_1_5.png");
  imglevel_1_6 = loadImage("level_1_6.png");
  imgMilk = loadImage("Milk.png");
  imgRice = loadImage("Rice.png");
  imgSteak = loadImage("Steak.png");
  imgTomato = loadImage("Tomato.png");

  mainScreen();
}

void draw() {
  if (mainScreen) {
    mainScreen();
  }
  if (preLevel) {
    preLevel();
  }
  if (mainGame) {
    mainGame();
    time = startTime - int(millis()/1000);
    if (time <= 0) {
      endGameLose();
    }
  }

  // done by emily for smoother transition jumping
  if (up < 10) {
    imgY -= 5;
    up++;
  }
  for (int i = 0; i < 22; i++) {
    fill(0);
    strokeWeight(2);
    line(i * 50, 0, i * 50, height);
  }
  for (int j = 0; j < 14; j++) {
    fill(0);
    strokeWeight(2);
    line(0, j * 50, width, j * 50);
  }
}