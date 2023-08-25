let slider1;
let slider2;
let slider3;
let slider4;
var n1 = 1;
var n2 = 1;
var n3 = 1;
var m = 5;
var a = 1;
var b = 1;
function setup() {
  createCanvas(1000, 1000);
  slider1 = createSlider(1, 100, 5, 1);
  slider2 = createSlider(1, 100, 5, 0.1);
  slider3 = createSlider(1, 100, 5, 0.1);
  slider4 = createSlider(1, 100, 5, 0.1);
}

function superShape(theta) {
  var r = 1;
  var p1 = pow(abs((1 / a) * cos((theta * m) / 4)), n2);
  var p2 = pow(abs((1 / b) * sin((theta * m) / 4)), n3);
  var p3 = pow(p1 + p2, 1 / n1);
  if (p3 === 0) return 0;
  return 1 / p3;
}

function draw() {
  m = slider1.value();
  n1 = slider2.value();
  n2 = slider3.value();
  n3 = slider4.value();
  background(51);
  translate(width / 2, height / 2);
  stroke(255);
  noFill();

  var scale = 200;
  var total = 1000;
  var increament = TWO_PI / total;
  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += increament) {
    var r = superShape(angle);
    var x = scale * r * cos(angle);
    var y = scale * r * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);
}
