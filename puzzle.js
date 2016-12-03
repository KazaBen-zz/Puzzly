var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
draw(context);
canvas.addEventListener('click', doSomething);

function draw(context) {
	var img = new Image();
	img.onload = function() {
		context.drawImage(img, 0, 0, 300, 300);
	}
	img.src = "spongebob1.jpg";
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

var spongebob1 = false;
var spongebob2 = false;
var spongebob3 = false;
var spongebob4 = false;
var spongebob5 = false;
var toFind = 5;
var found = 0;

function doSomething(evt) {
	var pos = getMouseXY(evt);
	console.log("click: " + pos.x + ", " + pos.y);
	if (pos.x >= 230 && pos.y >= 140 && pos.x <= 290 && pos.y <= 180 && spongebob1 == false) {
		console.log("click: " + pos.x + ", " + pos.y + "On the plate")
		spongebob1 = true;
		foundADifference();
        drawCircle(260,158,25,'white');

	}
	if (pos.x >= 230 && pos.y >= 70 && pos.x <= 260 && pos.y <= 100 && spongebob2 == false) {
		console.log("click: " + pos.x + ", " + pos.y + "On the ketchup")
		spongebob2 = true;
		foundADifference();
        drawCircle(245,90,20,'green');

	}
    	if (pos.x >= 160 && pos.y >= 120 && pos.x <= 190 && pos.y <= 150 && spongebob3 == false) {
		console.log("click: " + pos.x + ", " + pos.y + "On the hat")
		spongebob3 = true;
		foundADifference();
        drawCircle(174,135,15,'black');


	}
    	if (pos.x >= 260 && pos.y >= 15 && pos.x <= 290 && pos.y <= 45 && spongebob4 == false) {
		console.log("click: " + pos.x + ", " + pos.y + "On the bubble")
		spongebob4 = true;
		foundADifference();
        drawCircle(271,24,20,'blue');

	}
    	if (pos.x >= 0 && pos.y >= 0 && pos.x <= 30 && pos.y <= 30 && spongebob5 == false) {
		console.log("click: " + pos.x + ", " + pos.y + "On the window")
		spongebob5 = true;
		foundADifference();
        drawCircle(20,14,40,'yellow');

	}
    if(toFind==0){
        	var element1 = document.getElementById('toFind');

        	element1.textContent = "YOU WIN!!!";

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
function drawCircle(x,y,radius,style) {
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI*2,false);
      context.lineWidth = 5;

      // line color
      context.strokeStyle = style;
      context.stroke();
}
