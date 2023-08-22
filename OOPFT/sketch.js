var tree = [];
var leaves = [];
var count = 0;
var leaveCount;
function setup() {
  createCanvas(1800, 1000);
  var root = new Branch(
    createVector(width / 2, height),
    createVector(width / 2, height - 300)
  );
  tree[0] = root;
  leaveCount = floor(random(1, 6));
}
function draw() {
  background(0);
  for (let index = 0; index < tree.length; index++) {
    tree[index].show();
    // tree[index].jitter();
  }
  for (let index = 0; index < leaves.length; index++) {
    fill(100, 255, 100, 100);
    noStroke();
    ellipse(leaves[index].x, leaves[index].y, 8, 16);
  }
}
function mousePressed() {
  if (count < 10) {
    for (var i = tree.length - 1; i > -1; i--) {
      if (tree[i].finished) continue;
      tree.push(tree[i].branchL(floor(noise(0, 1) * 70)));
      tree.push(tree[i].branchR(floor(noise(0, 1) * 70)));
      tree[i].finished = true;
    }
    count++;
  } else if (count === 10) {
    for (let index = 0; index < tree.length; index++) {
      if (!tree[index].finished) {
        var leaf = tree[index].end.copy();
        leaves.push(leaf);
      }
    }
    count++;
  }
}
