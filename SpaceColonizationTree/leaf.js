function Leaf() {
  this.pos = createVector(random(width), random(height - 50));
  this.reached = false;

  this.show = function () {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 4, 4);
  };
}
