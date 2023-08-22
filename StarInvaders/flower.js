function Flower(x, y) {
  this.x = x;
  this.y = y;
  this.r = 20;
  this.xDir = 2;
  this.show = function () {
    noStroke();
    fill(255, 0, 200, 90);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };
  this.grow = function () {
    this.r -= 2;
  };
  this.diminished = function () {
    return this.r < 8;
  };
  this.move = function () {
    this.x += this.xDir;
  };
  this.shift = function () {
    this.xDir = -this.xDir;
    this.y += this.r;
  };
}
