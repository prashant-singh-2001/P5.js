var src;

function setup() {
  noCanvas();
  src = join(src, " ");
  var seed = select("#seed");
  var submit = select("#submit");
  submit.mousePressed(() => {
    createP(seed.value());
  });
}
