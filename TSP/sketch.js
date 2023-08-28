var door_oe_death = [];
var doors = 6;
var deaths;
var low_Death;
function setup() {
  createCanvas(800, 600);
  for (var i = 0; i < doors; i++) {
    door_oe_death[i] = createVector(random(width), random(height));
  }
  var d = calcDist(door_oe_death);
  deaths = d;
  low_Death = door_oe_death.slice();
}
function draw() {
  background(0);
  for (var i = 0; i < doors; i++) {
    ellipse(door_oe_death[i].x, door_oe_death[i].y, 8, 8);
  }
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < doors; i++) {
    vertex(door_oe_death[i].x, door_oe_death[i].y);
  }
  endShape();
  stroke(255, 10, 200);
  strokeWeight(4);
  noFill();
  beginShape();
  for (var i = 0; i < doors; i++) {
    vertex(low_Death[i].x, low_Death[i].y);
  }
  endShape();
  var i = floor(random(door_oe_death.length));
  var j = floor(random(door_oe_death.length));
  swap(door_oe_death, i, j);
  var d = calcDist(door_oe_death);
  if (deaths > d) {
    deaths = d;
    low_Death = door_oe_death.slice();
    console.log(deaths);
  }
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDist(points) {
  var sum = 0;
  for (var i = 0; i < points.length - 1; i++) {
    var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }
  return sum;
}
