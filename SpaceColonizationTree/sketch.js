var tree;
var max_dist = 10;
var min_dist = 10;
function setup() {
  createCanvas(800, 800);
  tree = new Tree();
}
function draw() {
  background(51);
  tree.show();
}
