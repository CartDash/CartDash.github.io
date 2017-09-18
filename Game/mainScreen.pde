//First screen upon loading the game
void mainScreen() {
  if (mainScreen) {
    background(255);
    fill(255);
    rect(200, 290, 200, 200);                  //Play box
    rect(650, 290, 200, 200);                  //Information box
    textSize(25);
    fill(0);
    text("Play", 275, 395);
    text("Information", 685, 395);
    textSize(100);
    text("CART DASH", 260, 150);
  } else {
    preLevel();
  }
}