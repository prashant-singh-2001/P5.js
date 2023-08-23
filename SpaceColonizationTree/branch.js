function Branch(parent, pos, dir) {
  this.pos = pos;
  this.parent = parent;
  this.dir = dir;
  this.show = function () {
    if (parent != null) {
      stroke(255);
      line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
    }
  };
  this.next = function () {
    var nextBranch = new Branch(
      this,
      p5.Vector.add(this.pos, this.dir),
      this.dir.copy()
    );
    return nextBranch;
  };
}
