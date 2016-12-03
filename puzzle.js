var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var puzzleImage = "squidward.jpg";
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
        drawCircle(260,158,560,158,25,'white');

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
    if(toFind==0){
        	var element1 = document.getElementById('toFind');

        	element1.textContent = "YOU WIN!!!";
            changePuzzle();
    }
	var str = "x, y: " + pos.x + ", " + pos.y;
	displayResult(str);
	var str = "x, y: " + pos.x + ", " + pos.y;
	displayResult(str);
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
        puzzleImage="pig.jpg"
    }
    else if(puzzleImage=="pig.jpg"){
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