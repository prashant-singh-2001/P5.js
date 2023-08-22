var grid;
var next;
var da = 1;
var db = 0.5;
var feed = 0.055;
var k = 0.062;
function setup() {
  createCanvas(400, 400);
  // frameRate(120);
  pixelDensity(1);
  grid = [];
  next = [];
  for (var x = 0; x < width; x++) {
    grid[x] = [];
    next[x] = [];
    for (var y = 0; y < height; y++) {
      grid[x][y] = {
        a: 1,
        b: 0,
      };
      next[x][y] = {
        a: 1,
        b: 0,
      };
    }
  }
  for (var x = 50; x < 55; x++) {
    for (var y = 50; y < 55; y++) {
      grid[x][y].b = 1;
    }
  }
  for (var x = 350; x < 355; x++) {
    for (var y = 50; y < 55; y++) {
      grid[x][y].b = 1;
    }
  }
  for (var x = 50; x < 55; x++) {
    for (var y = 350; y < 355; y++) {
      grid[x][y].b = 1;
    }
  }
  for (var x = 350; x < 355; x++) {
    for (var y = 350; y < 355; y++) {
      grid[x][y].b = 1;
    }
  }
}
function draw() {
  background(0);
  for (var x = 1; x < width - 1; x++) {
    for (var y = 1; y < height - 1; y++) {
      var a = grid[x][y].a;
      var b = grid[x][y].b;
      next[x][y].a = a + da * laplaceA(x, y) - a * b * b + feed * (1 - a);
      next[x][y].b = b + db * laplaceB(x, y) + a * b * b - (k + feed) * b;
    }
  }

  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var c = color(0, 100, 200);
      var pix = (x + y * width) * 4;
      pixels[pix + 0] = floor(next[x][y].a * 255);
      pixels[pix + 1] = floor(next[x][y].b * 255);
      pixels[pix + 2] =
        (floor(next[x][y].a * 255) + floor(next[x][y].b * 255)) % 256;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
  swap();
}

function laplaceA(x, y) {
  var sum = 0;
  sum += grid[x][y].a * -1;
  sum += grid[x - 1][y].a * 0.2;
  sum += grid[x][y - 1].a * 0.2;
  sum += grid[x + 1][y].a * 0.2;
  sum += grid[x][y + 1].a * 0.2;
  sum += grid[x + 1][y + 1].a * 0.05;
  sum += grid[x + 1][y - 1].a * 0.05;
  sum += grid[x - 1][y - 1].a * 0.05;
  sum += grid[x - 1][y + 1].a * 0.05;
  return sum;
}
function laplaceB(x, y) {
  var sum = 0;
  sum += grid[x][y].b * -1;
  sum += grid[x - 1][y].b * 0.2;
  sum += grid[x][y - 1].b * 0.2;
  sum += grid[x + 1][y].b * 0.2;
  sum += grid[x][y + 1].b * 0.2;
  sum += grid[x + 1][y + 1].b * 0.05;
  sum += grid[x + 1][y - 1].b * 0.05;
  sum += grid[x - 1][y - 1].b * 0.05;
  sum += grid[x - 1][y + 1].b * 0.05;
  return sum;
}

function swap() {
  var temp = grid;
  grid = next;
  next = temp;
}
