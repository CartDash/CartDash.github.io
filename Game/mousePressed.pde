void mousePressed() {
  if (mainScreen) {
    if (mouseX >= 200 && mouseX <= 400&&
      mouseY>= 290 && mouseY <= 490) {
      mainScreen = false;
      preLevel = true;
    }
  }
  if (preLevel) {
    if (preLevelCount == 5) {                  //BONUS QUESTION STAGE
      if (mouseX >= 690 && mouseX <= 820 &&    //ANSWER YES
        mouseY >= 460 && mouseY <= 530) {
        lifeMe ++;
        preLevelCount ++;
      }
      if (mouseX >= 875 && mouseX <= 980 &&    //ANSWER NO
        mouseY >= 460 && mouseY <= 530) {
        preLevelCount ++;
      }
    }
    if (preLevelCount > 1 && preLevelCount != 5 && preLevelCount != 6) {
      if (mouseX >= 130 && mouseX <= 385 &&
        mouseY >= 620 && mouseY <= 700) {
        preLevelCount --;
      }
    }
    if (mouseX >= 750 && mouseX <= 1000 &&
      mouseY >= 620 && mouseY <= 700 && preLevelCount !=5) {
      preLevelCount ++;
    }
  }
}