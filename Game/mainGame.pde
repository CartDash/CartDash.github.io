void mainGame() {

  //Display the background
  imgBackground1.resize(3400, 2200);
  image(imgBackground1, -1170, -70);

  //Vegetables show up only when not touched
  if (grapeCatch == false) {
    image(imgGrapes, 600, 300);
  }
  if (tomatoCatch == false) {
    image(imgTomato, 100, 500);
  }
  if (carrotCatch == false) {
    image(imgCarrot, 430, 450);
  }
  if (bananaCatch == false) {
    image(imgBanana, 320, 200);
  }

  if (grapeCatch && tomatoCatch && carrotCatch && bananaCatch) {      //Done level woo
    veggieDone = true;
    points += time * 100;
  }

  //Junk food
  image(imgCookie, 47, 415);

  //Hitbox for grapes and cart touching each other
  if (imgX > 600 && imgX < 660 &&                      //GRAPES
    imgY > 300 && imgY < 360) {
    grapeCatch = true;
    points += 1000;
    println("grapes touched");
  }
  //Hitbox for tomato and cart touching each other
  if (imgX > 600 && imgX < 660 &&                      //TOMATO
    imgY > 300 && imgY < 360) {
    tomatoCatch = true;
    points += 1000;
    println("grapes touched");
  }
  //Hitbox for carrot and cart touching each other
  if (imgX > 600 && imgX < 660 &&                      //CARROT
    imgY > 300 && imgY < 360) {
    carrotCatch = true;
    points += 1000;
    println("grapes touched");
  }
  //Hitbox for banana and cart touching each other
  if (imgX > 600 && imgX < 660 &&                      //BANANA
    imgY > 300 && imgY < 360) {
    bananaCatch = true;
    points += 1000;
    println("grapes touched");
  }

  textSize(40);
  fill(255, 0, 0);
  text("Level: " + level, 150, 688);
  text("Time: "+ time, 450, 688);
  text("Lives: " + lifeMe, 740, 688);

  if (onPlatform == false) {
    imgY += speed;                      //Add speed to location
    speed += gravity;                   //Add gravity to speed
  }
  imgY = constrain(imgY, 100, 590);

  if (faceRight) {
    image(imgCartRight, imgX, imgY);
  } else if (faceRight== false) {
    image(imgCartLeft, imgX, imgY);
  }
  Platform(120, 600, 200);          //First bottom 3 on left
  Platform(210, 565, 290);
  Platform(280, 540, 360);
  Platform(750, 570, 820);          //Right side bottom 3
  Platform(880, 555, 960);
  Platform(950, 470, 1020);

  Platform(420, 510, 880);          //Long middle
  Platform(47, 465, 350);           //long left to the right (3 total)
  Platform(447, 465, 520);
  Platform(605, 465, 805);
  Platform(150, 435, 250);         //left smalls -> right smalls, bottom upwards
  Platform(550, 425, 600);        

  Platform(430, 390, 505);  
  Platform(625, 375, 780);
  Platform(520, 330, 580);         //Small directly to left of long right 
  Platform(700, 325, 1050);          
  Platform(25, 260, 525);          //long left to right
  Platform(740, 260, 810);

  Platform(130, 200, 210);         //Top small left to right
  Platform(425, 200, 505);        
  Platform(625, 230, 700);
  Platform(855, 230, 1050);
}

//Platform method
void Platform(int x, int y, int x2) {
  char a = key;
  if (imgY + 50 <= y + 1 && imgY + 50 >= y && imgX <= x2 && imgX + 50 >= x) {
    onPlatform = true;
    if (key == CODED) {
      if (keyCode == RIGHT && key != a) {
        imgX += 20;
        imgX = constrain(imgX, 0, 1000);
        faceRight = true;
        a = key;
      }
      if (keyCode == LEFT && key != a) {
        imgX -= 20;
        imgX = constrain(imgX, 0, 1000);
        faceRight = false;
        a = key;
      }
    }
    if (key == ' ' && key != a) {
      imgY -= 5;
      speed = gravity;
      up = 0;
      imgY = constrain(imgY, 100, 590);
      a = key;
    }
  }
}

//If user loses
void endGameLose() {
  background(255);
  textSize(60);
  text("Game Over", 300, 400);
}

//If user wins
void endGameWin() {
  background(255);
  textSize(60);
  text("You win!", 300, 500);
  text("Points: " + points, 400, 400);
}