function setup() {
	createCanvas(900, 900);
	background('#ccff99');
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
	ellipse(mouseX, mouseY, 5, 5);
  }
  
  
}