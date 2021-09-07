canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car_width= 90;
car_height= 120;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x= 5;
car_y= 225;

function add() {
	background= new Image();
    background.onload= upload_background;
    background.src= background_image;

    car= new Image();
    car.onload= upload_car;
    car.src= greencar_image;
}

function upload_background() {
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

}

function upload_car() {
	ctx.drawImage(car, car_x, car_y, car_width, car_height);

	
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
	if (car_y >= 50) {
		car_y -= 6;
		upload_background();
		upload_car();
		}
}

function down()
{
	if (car_y <= 230) {
		car_y += 6;
		upload_background();
		upload_car();
		}
}

function left()
{
	if (car_x >= 0) {
		car_x -= 6;
		upload_background();
		upload_car();
		}
}

function right()
{
	if (car_x <= 710) {
		car_x += 6;
		upload_background();
		upload_car();
		}
}
