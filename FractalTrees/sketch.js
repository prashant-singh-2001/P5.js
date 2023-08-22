var angle = 0;
var slider;
function setup() {
  createCanvas(1600, 900);
  slider = createSlider(0, TWO_PI, PI / 4, 0.001);
}
function draw() {
  background(0);
  stroke(255);
  angle = slider.value();
  translate(width / 2, height);
  branch(300, 1);
}

function branch(len, level) {
  line(0, 0, 0, -len);
  strokeWeight(level * 0.5);
  translate(0, -len);
  if (len > 5) {
    push();
    rotate(angle);
    branch(len * 0.67, level + 1);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67, level + 1);
    pop();
  } else {
    push();
    noStroke();
    fill(100, 100, 0);
    rotate(angle);
    ellipse(0, 0, 10, 10);
    pop();
    push();
    noStroke();
    fill(100, 100, 0);
    rotate(-angle);
    ellipse(0, 0, 10, 10);
    pop();
  }
}
