var vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  var li = -1;
  for (var i = vals.length - 1; i >= 0; i--) {
    if (vals[i] < vals[i + 1]) {
      li = i;
      break;
    }
  }
  if (li === -1) {
    noLoop();
    console.log("finished!");
  }
  var lj = -1;
  for (var j = 0; j < vals.length; j++) {
    if (vals[j] > vals[li]) {
      lj = j;
    }
  }
  swap(vals, li, lj);
  var eA = vals.splice(li + 1);
  eA.reverse();
  vals = vals.concat(eA);

  textSize(64);
  var s = "";
  for (var i = 0; i < vals.length; i++) {
    s += vals[i];
  }
  fill(255);
  text(s, 20, height / 2);
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}
