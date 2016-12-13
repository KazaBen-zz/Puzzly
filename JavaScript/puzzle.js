var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var differenceFound = [false, false, false, false, false]; // Using boolean array to have store information if the difference was found
var puzzleImage = "./Pictures/spongebob.jpg"; // Choosing first puzzle

// Declaring variables how many differences left to find and how many found
var toFind = 5;
var found = 0;

// Draw image function
function draw(context, puzzleImage) {
	var img = new Image();
	img.onload = function() {
		context.drawImage(img, 0, 0, 600, 300);
	}
	img.src = puzzleImage;
}

// Getting mouse coordinates
function getMouseXY(e) {
	var boundingRect = canvas.getBoundingClientRect();
	var offsetX = boundingRect.left;
	var offsetY = boundingRect.top;
	var w = (boundingRect.width - canvas.width) / 2;
	var h = (boundingRect.height - canvas.height) / 2;
	offsetX += w;
	offsetY += h;
	var mx = Math.round(e.clientX - offsetX);
	var my = Math.round(e.clientY - offsetY);
	return {
		x: mx,
		y: my
	};
}

// When found a difference between pictures count how many found and how many left to find and make changes on the paragraphs
function foundADifference() {
	toFind--;
	found++;
	var element1 = document.getElementById('toFind');
	element1.textContent = toFind;
	var element2 = document.getElementById('found');
	element2.textContent = found;
}

// Function to draw circles around the differences in both pictures
function drawCircle(x, y, x2, y2, radius, style) {

	context.beginPath();
	context.strokeStyle = style;
	context.lineWidth = 5;

	context.arc(x, y, radius, 0, Math.PI * 2, false);
	context.stroke();

	context.beginPath(); // Beggining path again to not have 2 circles connected
	context.arc(x2, y2, radius, 0, Math.PI * 2, false);
	context.stroke();
}

// Function to check if the pressed place is in the difference area
function checkDifference(evt) {
	var pos = getMouseXY(evt); // Getting mouse click position
	/* Checking if the clicked area is where the difference is, checking if that difference is not found, checking if it is the right image*/
	if ((pos.x >= 230 && pos.y >= 140 && pos.x <= 290 && pos.y <= 180  && differenceFound[0] == false && puzzleImage == "./Pictures/spongebob.jpg")||(pos.x >= 530 && pos.y >= 140 && pos.x <= 590 && pos.y <= 180 && differenceFound[0] == false && puzzleImage == "./Pictures/spongebob.jpg")) {
		differenceFound[0] = true; // Difference was found so making it true
		foundADifference(); // Calling function foundADifference
		drawCircle(260, 161, 560, 161, 25, 'white'); // Drawing circle around the place where the function was found
	}

	// Same structure for the following if statements as in line 45
	if ((pos.x >= 230 && pos.y >= 70 && pos.x <= 260 && pos.y <= 100 && puzzleImage == "./Pictures/spongebob.jpg" && differenceFound[1] == false) ||(pos.x>=530 && pos.y >= 70 && pos.x <= 560 && pos.y <= 100 && differenceFound[1] == false && puzzleImage == "./Pictures/spongebob.jpg")) {
		differenceFound[1] = true;
		foundADifference();
		drawCircle(245, 90, 545, 90, 20, 'green');
	}
	if ((pos.x >= 160 && pos.y >= 120 && pos.x <= 190 && pos.y <= 150 && puzzleImage == "./Pictures/spongebob.jpg" && differenceFound[2] == false)||(pos.x >= 460 && pos.y >= 120 && pos.x <= 490 && pos.y <= 150) && differenceFound[2] == false && puzzleImage == "./Pictures/spongebob.jpg") {
		differenceFound[2] = true;
		foundADifference();
		drawCircle(174, 135, 474, 135, 15, 'black');
	}
	if ((pos.x >= 260 && pos.y >= 15 && pos.x <= 290 && pos.y <= 45 && puzzleImage == "./Pictures/spongebob.jpg" && differenceFound[3] == false)||((pos.x >= 560 && pos.y >= 15 && pos.x <= 590 && pos.y <= 45)) && differenceFound[3] == false && puzzleImage == "./Pictures/spongebob.jpg") {
		differenceFound[3] = true;
		foundADifference();
		drawCircle(271, 24, 571, 24, 20, 'blue');
	}
	if ((pos.x >= 0 && pos.y >= 0 && pos.x <= 30 && pos.y <= 30 && puzzleImage == "./Pictures/spongebob.jpg" && differenceFound[4] == false)||(pos.x >= 300 && pos.y >= 0 && pos.x <= 330 && pos.y <= 30) && differenceFound[4] == false && puzzleImage == "./Pictures/spongebob.jpg") {
		differenceFound[4] = true;
		foundADifference();
		drawCircle(20, 14, 325, 14, 20, 'yellow');
	}
	if ((pos.x >= 0 && pos.y >= 215 && pos.x <= 30 && pos.y <= 245 && puzzleImage == "./Pictures/squidward.jpg" && differenceFound[0] == false)||(pos.x >= 300 && pos.y >= 215 && pos.x <= 330 && pos.y <= 245) && differenceFound[0] == false && puzzleImage == "./Pictures/squidward.jpg") {
		differenceFound[0] = true;
		foundADifference();
		drawCircle(15, 231, 320, 231, 20, 'yellow');
	}
	if ((pos.x >= 0 && pos.y >= 0 && pos.x <= 10 && pos.y <= 30 && puzzleImage == "./Pictures/squidward.jpg" && differenceFound[1] == false)||(pos.x >= 300 && pos.y >= 0 && pos.x <= 310 && pos.y <= 30) && differenceFound[1] == false && puzzleImage == "./Pictures/squidward.jpg") {
		differenceFound[1] = true;
		foundADifference();
		drawCircle(5, 10, 320, 15, 20, 'white');
	}
	if ((pos.x >= 180 && pos.y >= 30 && pos.x <= 210 && pos.y <= 60 && puzzleImage == "./Pictures/squidward.jpg" && differenceFound[2] == false)||(pos.x >= 480 && pos.y >= 30 && pos.x <= 510 && pos.y <= 60) && differenceFound[2] == false && puzzleImage == "./Pictures/squidward.jpg") {
		differenceFound[2] = true;
		foundADifference();
		drawCircle(194, 43, 494, 43, 20, 'red');
	}
	if ((pos.x >= 100 && pos.y >= 245 && pos.x <= 130 && pos.y <= 275 && puzzleImage == "./Pictures/squidward.jpg" && differenceFound[3] == false)||(pos.x >= 400 && pos.y >= 245 && pos.x <= 430 && pos.y <= 275) && differenceFound[3] == false && puzzleImage == "./Pictures/squidward.jpg") {
		differenceFound[3] = true;
		foundADifference();
		drawCircle(117, 257, 420, 257, 15, 'brown');
	}
	if ((pos.x >= 80 && pos.y >= 135 && pos.x <= 110 && pos.y <= 165 && puzzleImage == "./Pictures/squidward.jpg" && differenceFound[4] == false)||(pos.x >= 30 && pos.y >= 135 && pos.x <= 410 && pos.y <= 165) && differenceFound[4] == false && puzzleImage == "./Pictures/squidward.jpg") {
		differenceFound[4] = true;
		foundADifference();
		drawCircle(95, 150, 395, 150, 20, 'black');
	}
	if ((pos.x >= 85 && pos.y >= 200 && pos.x <= 105 && pos.y <= 230 && puzzleImage == "./Pictures/panda.png" && differenceFound[0] == false)||(pos.x >= 385 && pos.y >= 200 && pos.x <= 405 && pos.y <= 230) && differenceFound[0] == false && puzzleImage == "./Pictures/panda.png") {
		differenceFound[0] = true;
		foundADifference();
		drawCircle(91, 207, 391, 207, 20, 'yellow');
	}
	if ((pos.x >= 115 && pos.y >= 200 && pos.x <= 145 && pos.y <= 230 && puzzleImage == "./Pictures/panda.png" && differenceFound[1] == false)||pos.x >= 415 && pos.y >= 200 && pos.x <= 445 && pos.y <= 230 && differenceFound[1] == false && puzzleImage == "./Pictures/panda.png") {
		differenceFound[1] = true;
		foundADifference();
		drawCircle(145, 215, 445, 215, 20, 'green');
	}
	if ((pos.x >= 200 && pos.y >= 35 && pos.x <= 230 && pos.y <= 65 && puzzleImage == "./Pictures/panda.png" && differenceFound[2] == false)||(pos.x >= 500 && pos.y >= 35 && pos.x <= 530 && pos.y <= 65) && differenceFound[2] == false && puzzleImage == "./Pictures/panda.png") {
		differenceFound[2] = true;
		foundADifference();
		drawCircle(218, 49, 518, 49, 20, 'red');
	}
	if ((pos.x >= 145 && pos.y >= 125 && pos.x <= 175 && pos.y <= 155 && puzzleImage == "./Pictures/panda.png" && differenceFound[3] == false)||(pos.x >= 445 && pos.y >= 125 && pos.x <= 475 && pos.y <= 155) && differenceFound[3] == false && puzzleImage == "./Pictures/panda.png") {
		differenceFound[3] = true;
		foundADifference();
		drawCircle(163, 140, 464, 140, 24, 'blue');
	}
	if ((pos.x >= 150 && pos.y >= 160 && pos.x <= 180 && pos.y <= 190 && puzzleImage == "./Pictures/panda.png" && differenceFound[4] == false)||(pos.x >= 450 && pos.y >= 160 && pos.x <= 480 && pos.y <= 190) && differenceFound[4] == false && puzzleImage == "./Pictures/panda.png") {
		differenceFound[4] = true;
		foundADifference();
		drawCircle(167, 173, 467, 173, 20, 'brown');
	}

	// If all differences were found displaying text and calling winning animation functions
	if (toFind == 0) {
		var element1 = document.getElementById('toFind');
		init();
		TextSmallToBig();
		element1.textContent = "YOU WIN!!!";
	}
}



// Function to change the puzzle
function changePuzzle() {

	//Changing puzzles in a sequence
	if (puzzleImage == "./Pictures/spongebob.jpg") {
		puzzleImage = "./Pictures/squidward.jpg"
	} else if (puzzleImage == "./Pictures/squidward.jpg") {
		puzzleImage = "./Pictures/panda.png"
	} else if (puzzleImage == "./Pictures/panda.png") {
		puzzleImage = "./Pictures/spongebob.jpg"
	}

	draw(context, puzzleImage); // Drawing the puzzle

	//Resetting toFind and found variables
	toFind = 5;
	found = 0;

	// Resetting paragraphs
	var element1 = document.getElementById('toFind');
	element1.textContent = toFind;
	var element2 = document.getElementById('found');
	element2.textContent = found;

	// Resetting found differences
	for (var i = 0; i < differenceFound.length; i++) {
		differenceFound[i] = false;
	}
	step = 10; //resetting steps for win animation
}

// Declaring variables we will use in win animation
var step = 10
var steps = 50;
var delay = 20;
// Initiating win animation
function init() {
	context.fillStyle = "blue";
	context.textAlign = "center";
	context.textBaseline = "middle";
	TextSmallToBig();
}
// Winning animation text enlarning
function TextSmallToBig() {
	step++;
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.save();
	context.translate(canvas.width / 2, canvas.height / 2);
	context.font = step + "pt Helvetica";
	context.fillText("You win!!!!", 0, 0);
	context.restore();
	if (step < steps) var t = setTimeout("TextSmallToBig()", 20);
}
// main program
draw(context, puzzleImage); // Drawing puzzle 

canvas.addEventListener('click', checkDifference); // When clicked on canvas calling checkDifference function