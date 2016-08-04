function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
}

function draw() {
  noStroke();
  fill(255, 100, 100, 80);
  ellipse(mouseX, mouseY, 10, 10);
  
}