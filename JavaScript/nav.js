function navigation() {
	var x = document.getElementById("myTopnav"); /*Getting navigation element */
	
	/* If classname =="topnav" making it "responsive" needed for CSS */
	if (x.className == "topnav") {
		x.className = "responsive";
	}
	/* If the className=="responsive" means button was clicked before and is in "responsive" state and CSS to make it dropdown is being executed and the button is clicked again so we are resetting className to "topnav" to turn off drop down display*/
	else if(x.className == "responsive"){
		x.className = "topnav";
	}
}