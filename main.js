//Create a reference for canvas
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d"); 

//Give specific height and width to the car image
car_img_width=75;
car_img_heught=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car_x=5;
car_y=225;

function add() {
//upload car, and background images on the canvas.
background_imgTag= new Image();
background_imgTag.onload= uploadBackground;
background_imgTag.src= background_image;

greencar_imgTag= new Image();
greencar_imgTag= uploadgreencar;
greencar_imgTag= greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	greencar_y=greencar_y-10;
	console.log("when up arrow key is pressed x ="+ greencar_x + "y=" + greencar_y );
	upload_background()
	upload_greencar()
}

function down()
{
	//Define function to move the car downward
	if(rover_y<=500){
        greencar_y=greencar_y+10;
        console.log("when down arrow key is pressed x ="+ greencar_x + "y=" + greencar_y );
        upload_background()
        upload_greencar()
    }
}

function left()
{
	//Define function to move the car left side
	if(greencar_x>=0){
        greencar_x=greencar_x-10;
        console.log("when left arrow key is pressed x ="+ greencar_x + "y=" + greencar_y );
        upload_background()
        upload_greencar()
    }
}

function right()
{
	//Define function to move the car right side
	if(greencar_x<=700){
        greencar_x=greencar_x+10;
        console.log("when right arrow key is pressed x ="+ greencar_x + "y=" + greencar_y );
        upload_background()
        upload_greencar()
    }
}
