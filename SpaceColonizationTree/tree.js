function Tree() {
  this.leaves = [];
  this.branches = [];
  var root = new Branch(
    null,
    createVector(width / 2, height),
    createVector(0, -1)
  );
  this.branches.push(root);
  for (var i = 0; i < 500; i++) {
    this.leaves.push(new Leaf());
  }
  this.show = function () {
    for (var i = 0; i < this.leaves.length; i++) {
      this.leaves[i].show();
    }
    for (var i = 0; i < this.branches.length; i++) {
      this.branches[i].show();
    }
  };
  var current = root;
  var found = false;
  while (!found) {
    for (var i = 0; i < this.leaves.length; i++) {
      var d = p5.Vector.dist(current.pos, this.leaves[i].pos);
      if (d < max_dist) {
        found = true;
      }
    }
    if (!found) {
      var branch = current.next();
      current = branch;
      this.branches.push(current);
    }
  }
  this.grow = function () {
    for (var i = 0; i < this.leaves.length; i++) {
      var leaf = this.leaves[i];
      var closestBranch = null;
      for (var j = 0; j < this.branches.length; j++) {
        var branch = this.branches[j];
        var dist = p5.Vector.dist(leaf.pos, branch.pos);
        if (d < min_dist) {
          leaf.reached = true;
          break;
        } else if (d > max_dist) {
          continue;
        } else if (closestBranch != null) {
          closestBranch = branch;
        }
      }
    }
  };
}
