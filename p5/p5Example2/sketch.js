// touch test 
/* this sketch is to test if touching one half of the device screen will be a good way to control the movement of an object. The left half of the screen turns the left half red touching the right half turns the right half blue This feature will be used to move an object back and forth across the screen*/


function setup() {
	createCanvas(500, 500);
	var hotPink = color(255,138,172);
	var blueLake = color(139,186,230);
	var c = color(255, 204, 0); 
}

function draw() {
	background(255);	
	
	if(touchX > width/2 && touchY > height-height*.25){
		noStroke();
		fill('#3399ff')//blue
		rect(width/2,0,width/2,height);	
	}
	
	
	if(touchX<width/2 && touchY > height-height*.25){
	// draw left half of screen
	noStroke();
	fill('#ff3399');//pink
	rect(0,0,width/2, height);
	}
	
 
}