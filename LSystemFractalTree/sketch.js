var axiom = "F";
var rules = [];
var len = 300;
rules[0] = { a: "F", b: "FF+[+F-F-F]-[-F+F+F]" };
var angle;
var x = 1;
var sentence = axiom;
function setup() {
  createCanvas(1000, 1000);
  background(0);
  turtle();
  var button = createButton("generate");
  button.mousePressed(generate);
  angle = radians(25);
}
// function draw() {}
function turtle() {
  background(0);
  resetMatrix();
  stroke(255);
  translate(width / 2, height);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    if (current == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "+") {
      rotate(x * angle);
    } else if (current == "-") {
      rotate(-x * angle);
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
    // x *= -1;
  }
}

function generate() {
  len *= 0.5;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  turtle();
}
