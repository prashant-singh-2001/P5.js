class Snake {
  float x;
  float y;
  float xspeed;
  float yspeed;
  int total;
  int maxT;

  Snake() {
    x = 0;
    y = 0;
    xspeed = 1;
    yspeed = 0;
    total = 0;
    maxT=total;
  }

  boolean eat(PVector pos) {
    float d = dist(x, y, pos.x, pos.y);
    if (d < 1) {
      total++;
      return true;
    } else {
      return false;
    }
  }

  void dir(float x, float y) {
    xspeed = x;
    yspeed = y;
  }

  void death() {

    if (x <=scl || y<=scl || x>=width-scl || y>=height-scl) {
      println("Heighest Score "+maxT+"\n Starting over");
      Math.max(maxT, total);
      total = 0;
    }
  }

  void update() {
    x = x + xspeed * scl;
    y = y + yspeed * scl;

    x = constrain(x, 0, width - scl);
    y = constrain(y, 0, height - scl);
  }

  void show() {
    fill(255);
    rect(x, y, scl, scl);
  }
}
