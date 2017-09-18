//Shows information
void preLevel() {
  background(255);                //GET RID OF THIS AFTER SLIDES
  if (preLevelCount == 1) {
    image(imglevel_1_1, 0, 0);
  } else if (preLevelCount == 2) {
    image(imglevel_1_2, 0, 0);
  } else if (preLevelCount == 3) {
    image(imglevel_1_3, 0, 0);
  }
  else if (preLevelCount == 4) {
    image(imglevel_1_4, 0, 0);
  }
  else if (preLevelCount == 5) {
    image(imglevel_1_5, 0, 0);
  }
  else if (preLevelCount == 6) {
    image(imglevel_1_6, 0, 0);
  }
  else {
    preLevel = false;
    mainGame = true;
  }
}