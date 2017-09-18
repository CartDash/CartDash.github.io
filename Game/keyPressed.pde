void keyPressed() {
  if (onPlatform || onPlatform == false) {
    onPlatform = false;
    if (key == CODED) {
      if (keyCode == RIGHT) {
        imgX += 20;
        imgX = constrain(imgX, 0, 1000);
        faceRight = true;
      }
      if (keyCode == LEFT) {
        imgX -= 20;
        imgX = constrain(imgX, 0, 1000);
        faceRight = false;
      }
    }
    if (key == ' ') {
      imgY -= 5;
      speed = gravity;
      up = 0;
      imgY = constrain(imgY, 100, 590);
    }
  }
}