var axiom = "F";
var rules = [];
var len = 100;
rules[0] = { a: "F", b: "FF+[+F-F-F]-[-F+F+F]" };
var angle;

var sentence = axiom;
function setup() {
  createCanvas(800, 800);
  background(0);
  createP(axiom);
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
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle);
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
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
  createP(sentence);
  turtle();
}
