var tree;
var max_dist = 200;
var min_dist = 10;

function setup() {
  createCanvas(1600, 900);
  tree = new Tree();
}

function draw() {
  background(51);
  tree.show();
  tree.grow();
}
