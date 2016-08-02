// touch test 
/* this sketch is to test if touching one half of the device screen will be a good way to control the movement of an object. The left half of the screen turns the left half red touching the right half turns the right half blue This feature will be used to move an object back and forth across the screen*/

/*
The issue with this is that after being touched the screen remains blue.. need to have a boolean test for touch if touching change the screen if not then blank it.
*/
var objXloc;
var moveRight;
var moveLeft;
function setup() {
	createCanvas(500, 500);
	moveRight = 1;
	moveLeft= -1;
	objXloc= width/2; // location of ObjectX
	//var hotPink = color(255,138,172);
	//var blueLake = color(139,186,230);
	//var c = color(255, 204, 0);
	// draw object at start
	noStroke();
	fill(150);
	ellipse(width/2, height - height*.25, 25, 50);
	
	 
}

function draw() {
	background(255);	
	
	
	
	
	if(touchIsDown && touchX > width/2 && touchY > height-height*.25){
		noStroke();
		fill('#3399ff')//blue
		rect(width/2,0,width/2,height);
		
		// draw object in motion
	fill(150);
	ellipse(objXloc, height - height*.25, 25, 50);
	objXloc= objXloc + moveRight;	
	}else
	
	
	if(touchIsDown && touchX<width/2 && touchY > height-height*.25){
	// draw left half of screen
	noStroke();
	fill('#ff3399');//pink
	rect(0,0,width/2, height);
	
	// draw object in motion
	fill(150);
	ellipse(objXloc, height-height*.25, 25, 50);
	objXloc= objXloc + moveLeft;	
	}else{
		noStroke();
		fill(150);
		ellipse(objXloc, height - height*.25, 25, 50);	
	}
	
	// add condition to stop movement outside of frames
	
 
}