var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var puzzleImage = "spongebob.jpg";
draw(context,puzzleImage);

canvas.addEventListener('click', doSomething);

function draw(context,puzzleImage) {
	var img = new Image();
	img.onload = function() {
		context.drawImage(img, 0, 0, 600, 300);
	}
	img.src = puzzleImage;
}

function getMouseXY(e) {
	var canvas = document.getElementById('canvas');
	var boundingRect = canvas.getBoundingClientRect();
	var offsetX = boundingRect.left;
	var offsetY = boundingRect.top;
	var w = (boundingRect.width - canvas.width) / 2;
	var h = (boundingRect.height - canvas.height) / 2;
	offsetX += w;
	offsetY += h;
	// use clientX and clientY as getBoundingClientRect is used above
	var mx = Math.round(e.clientX - offsetX);
	var my = Math.round(e.clientY - offsetY);
	return {
		x: mx,
		y: my
	}; // return as an object
}

var differenceFound = [false,false,false,false,false];
var toFind = 5;
var found = 0;

function doSomething(evt) {
	var pos = getMouseXY(evt);
	console.log("click: " + pos.x + ", " + pos.y);
	if (pos.x >= 230 && pos.y >= 140 && pos.x <= 290 && pos.y <= 180 && differenceFound[0] == false && puzzleImage=="spongebob.jpg") {
		console.log("click: " + pos.x + ", " + pos.y + "On the plate")
		differenceFound[0] = true;
		foundADifference();
        drawCircle(260,161,560,161,25,'white');

	}
	if (pos.x >= 230 && pos.y >= 70 && pos.x <= 260 && pos.y <= 100 && differenceFound[1] == false && puzzleImage=="spongebob.jpg") {
		console.log("click: " + pos.x + ", " + pos.y + "On the ketchup")
		differenceFound[1] = true;
		foundADifference();
        drawCircle(245,90,545,90,20,'green');

	}
    	if (pos.x >= 160 && pos.y >= 120 && pos.x <= 190 && pos.y <= 150 && differenceFound[2] == false && puzzleImage=="spongebob.jpg") {
		console.log("click: " + pos.x + ", " + pos.y + "On the hat")
		differenceFound[2] = true;
		foundADifference();
        drawCircle(174,135,474,135,15,'black');


	}
    	if (pos.x >= 260 && pos.y >= 15 && pos.x <= 290 && pos.y <= 45 && differenceFound[3] == false && puzzleImage=="spongebob.jpg") {
		console.log("click: " + pos.x + ", " + pos.y + "On the bubble")
		differenceFound[3] = true;
		foundADifference();
        drawCircle(271,24,571,24,20,'blue');

	}
    	if (pos.x >= 0 && pos.y >= 0 && pos.x <= 30 && pos.y <= 30 && differenceFound[4] == false && puzzleImage=="spongebob.jpg") {
		console.log("click: " + pos.x + ", " + pos.y + "On the window")
		differenceFound[4] = true;
		foundADifference();
        drawCircle(20,14,325,14,20,'yellow');

	}
        if (pos.x >= 0 && pos.y >= 215 && pos.x <= 30 && pos.y <= 245 && differenceFound[0] == false && puzzleImage=="squidward.jpg") {
		console.log("click: " + pos.x + ", " + pos.y + "On the leaf")
		differenceFound[0] = true;
		foundADifference();
        drawCircle(15,231,320,231,20,'yellow');

	}
        if (pos.x >= 0 && pos.y >= 0 && pos.x <= 10 && pos.y <= 30 && differenceFound[1] == false && puzzleImage=="squidward.jpg") {
		console.log("click: " + pos.x + ", " + pos.y + "On the leaf")
		differenceFound[1] = true;
		foundADifference();
        drawCircle(5,10,320,15,20,'white');

	}
        if (pos.x >= 180 && pos.y >= 30 && pos.x <= 210 && pos.y <= 60 && differenceFound[2] == false && puzzleImage=="squidward.jpg") {
		console.log("click: " + pos.x + ", " + pos.y + "On the leaf")
		differenceFound[2] = true;
		foundADifference();
        drawCircle(194,43,494,43,20,'red');

	}
        if (pos.x >= 100 && pos.y >= 245 && pos.x <= 130 && pos.y <= 275 && differenceFound[3] == false && puzzleImage=="squidward.jpg") {
		console.log("click: " + pos.x + ", " + pos.y + "On the leaf")
		differenceFound[3] = true;
		foundADifference();
        drawCircle(117,257,420,257,15,'brown');

	}
        if (pos.x >= 80 && pos.y >= 135 && pos.x <= 110 && pos.y <= 165 && differenceFound[4] == false && puzzleImage=="squidward.jpg") {
		console.log("click: " + pos.x + ", " + pos.y + "On the leaf")
		differenceFound[4] = true;
		foundADifference();
        drawCircle(95,150,395,150,20,'black');

	}
        if (pos.x >= 85 && pos.y >= 200 && pos.x <= 105 && pos.y <= 230 && differenceFound[0] == false && puzzleImage=="panda.png") {
		console.log("click: " + pos.x + ", " + pos.y + "On the leaf")
		differenceFound[0] = true;
		foundADifference();
        drawCircle(91,207,391,207,20,'yellow');

	}
        if (pos.x >= 115 && pos.y >= 200 && pos.x <= 145 && pos.y <= 230 && differenceFound[1] == false && puzzleImage=="panda.png") {
		console.log("click: " + pos.x + ", " + pos.y + "On the leaf")
		differenceFound[1] = true;
		foundADifference();
        drawCircle(145,215,445,215,20,'green');

	}
        if (pos.x >= 200 && pos.y >= 35 && pos.x <= 230 && pos.y <= 65 && differenceFound[2] == false && puzzleImage=="panda.png") {
		console.log("click: " + pos.x + ", " + pos.y + "On the leaf")
		differenceFound[2] = true;
		foundADifference();
        drawCircle(218,49,518,49,20,'red');

	}
        if (pos.x >= 145 && pos.y >= 125 && pos.x <= 175 && pos.y <= 155 && differenceFound[3] == false && puzzleImage=="panda.png") {
		console.log("click: " + pos.x + ", " + pos.y + "On the leaf")
		differenceFound[3] = true;
		foundADifference();
        drawCircle(163,140,464,140,24,'blue');

	}
        if (pos.x >= 150 && pos.y >= 160 && pos.x <= 180 && pos.y <= 190 && differenceFound[4] == false && puzzleImage=="panda.png") {
		console.log("click: " + pos.x + ", " + pos.y + "On the leaf")
		differenceFound[4] = true;
		foundADifference();
        drawCircle(167,173,467,173,20,'brown');

	}
    if(toFind==0){
        	var element1 = document.getElementById('toFind');
            init();
    TextSmallToBig();

        //	element1.textContent = "YOU WIN!!!";
          //  changePuzzle();
    }
	var str = "x, y: " + pos.x + ", " + pos.y;
	var str = "x, y: " + pos.x + ", " + pos.y;
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
function drawCircle(x,y,x2,y2,radius,style) {
    
    context.beginPath();
    context.strokeStyle = style;
    context.lineWidth = 5;

      context.arc(x, y, radius, 0, Math.PI*2,false);
          context.stroke();
          context.beginPath();

        context.arc(x2, y2, radius, 0, Math.PI*2,false);
          context.stroke();


      context.lineWidth = 5;
      // line color
      context.strokeStyle = style;
      context.stroke();
}
function changePuzzle(){
    if (puzzleImage=="spongebob.jpg"){
        puzzleImage ="squidward.jpg"
    }
    else if(puzzleImage=="squidward.jpg"){
        puzzleImage="panda.png"
    }
    else if(puzzleImage=="panda.png"){
        puzzleImage="spongebob.jpg"
    }
    draw(context,puzzleImage);
    toFind=5;
    found=0;
	var element1 = document.getElementById('toFind');
	element1.textContent = toFind;
	var element2 = document.getElementById('found');
	element2.textContent = found;
    for(var i=0;i<differenceFound.length;i++){
        differenceFound[i]=false;
    }

}
 var step = 10, steps = 50;
              delay = 20;
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
            if (step < steps)
                var t = setTimeout("TextSmallToBig()", 20);
        }