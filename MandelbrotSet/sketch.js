// var minval = -0.5;
// var maxval = -0.5;
var minSlide;
var maxSlide;
function setup() {
  createCanvas(240, 240);
  pixelDensity(1);
  minSlide = createSlider(-3, 0, -2.5, 0.1);
  maxSlide = createSlider(0, 3, 2.5, 0.1);
}
function draw() {
  var maxiter = 100;
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var a = map(x, 0, width, minSlide.value(), maxSlide.value());
      var b = map(y, 0, height, minSlide.value(), maxSlide.value());
      var n = 0;
      var ca = a;
      var cb = b;
      while (n < maxiter) {
        var aa = a * a - b * b;
        var bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;
        if (abs(a + b) > 16) {
          break;
        }
        n++;
      }
      var bright;
      // bright = 200;
      // bright = map(floor((n * 16) % 255), 0, maxiter, 0, 255);
      bright = map(n, 0, maxiter, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);
      if (n === maxiter) {
        bright = 0;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}
