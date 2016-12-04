// Used http://www.w3schools.com/howto/howto_js_topnav.asp as an example
function navigation() {
	var x = document.getElementById("myTopnav");
	if (x.className == "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}