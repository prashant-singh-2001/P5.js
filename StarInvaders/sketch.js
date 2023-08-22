var ship;
var flowers = [];
var drops = [];
function setup() {
  createCanvas(1200, 1000);
  ship = new Ship();
  // drop = new Drop(width / 2, height);
  for (var i = 0; i < 10; i++) {
    flowers[i] = new Flower(i * 80 + 60, 60);
  }
  ship.setDir(0);
}
function draw() {
  background(51);
  ship.show();
  ship.move();
  var edge = false;
  for (var i = 0; i < flowers.length; i++) {
    if (flowers[i].diminished()) continue;
    flowers[i].show();
    flowers[i].move();
    if (flowers[i].x > width || flowers[i].x < 0) edge = true;
  }
  if (edge) {
    for (var i = 0; i < flowers.length; i++) {
      flowers[i].shift();
    }
  }
  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < flowers.length; j++) {
      if (drops[i].hits(flowers[j])) {
        flowers[j].grow();
        drops[i].evaporate();
      }
    }
  }
  for (var i = drops.length - 1; i > -1; i--) {
    if (drops[i].getDel()) {
      drops.splice(i, 1);
    }
  }
}
function keyReleased() {
  if (keyCode === RIGHT_ARROW) ship.setDir(0);
  if (keyCode === LEFT_ARROW) ship.setDir(0);
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) ship.setDir(1);
  if (keyCode === LEFT_ARROW) ship.setDir(-1);
  if (key === " ") {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
  }
}
