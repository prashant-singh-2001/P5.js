function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;
  this.show = function () {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  };
  this.jitter = function () {
    this.end.x += random(-1, 1);
    this.end.y += random(-1, 1);
  };
  this.branchR = function (angle) {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(angle);
    dir.mult(0.7);
    var right = new Branch(this.end, p5.Vector.add(this.end, dir));
    return right;
  };
  this.branchL = function (angle) {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.mult(0.7);
    dir.rotate(-angle);
    var left = new Branch(this.end, p5.Vector.add(this.end, dir));
    return left;
  };
}
