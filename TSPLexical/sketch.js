var door_oe_death = [];
var doors = 10;
var deaths;
var low_Death;
var inputField;
var updateButton;
var order = [];
var totalPerms = 0;
var count = 1;
function setup() {
  createCanvas(800, 600);

  inputField = createInput();
  inputField.position(10, height + 10);

  updateButton = createButton("Update Doors");
  updateButton.position(inputField.x + inputField.width + 10, height + 10);
  updateButton.mousePressed(updateDoors);

  initializeDoors(doors);
  totalPerms = factorial(doors);
}

function draw() {
  background(0);

  for (var i = 0; i < doors; i++) {
    ellipse(door_oe_death[i].x, door_oe_death[i].y, 8, 8);
  }

  stroke(255, 10, 200);
  strokeWeight(6);
  noFill();
  beginShape();
  for (var i = 0; i < doors; i++) {
    vertex(door_oe_death[low_Death[i]].x, door_oe_death[low_Death[i]].y);
  }
  endShape();

  translate(0, height / 2);
  stroke(0, 255, 10);
  strokeWeight(0.9);
  noFill();
  beginShape();
  for (var i = 0; i < order.length; i++) {
    var n = order[i];
    vertex(door_oe_death[n].x, door_oe_death[n].y);
  }
  endShape();

  var d = calcDist(door_oe_death, order);

  if (deaths > d) {
    deaths = d;
    low_Death = order.slice();
  }

  textSize(25);
  var per = 100 * (count / totalPerms);
  text(`${nf(per, 0, 2)} completed!`, 20, height / 2 - 20);

  nextOrder();
}

function initializeDoors(numDoors) {
  doors = numDoors;
  door_oe_death = [];
  order = [];
  for (var i = 0; i < doors; i++) {
    door_oe_death[i] = createVector(random(width), random(height / 2 - 50));
    order[i] = i;
  }

  var d = calcDist(door_oe_death, order);
  deaths = d;
  low_Death = order.slice();
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDist(points, order) {
  var sum = 0;
  for (var i = 0; i < order.length - 1; i++) {
    var cA = points[order[i]];
    var cB = points[order[i + 1]];
    var d = dist(cA.x, cA.y, cB.x, cB.y);
    sum += d;
  }
  return sum;
}

function updateDoors() {
  var newDoors = parseInt(inputField.value());
  if (!isNaN(newDoors)) {
    initializeDoors(newDoors);
  }
}

function nextOrder() {
  count++;
  var li = -1;
  for (var i = order.length - 1; i >= 0; i--) {
    if (order[i] < order[i + 1]) {
      li = i;
      break;
    }
  }
  if (li === -1) {
    noLoop();
    console.log("finished!");
  }
  var lj = -1;
  for (var j = 0; j < order.length; j++) {
    if (order[j] > order[li]) {
      lj = j;
    }
  }
  swap(order, li, lj);
  var eA = order.splice(li + 1);
  eA.reverse();
  order = order.concat(eA);
}

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}
