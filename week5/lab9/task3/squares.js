$(function(){
	// usual main starting point when web page loads
	
	// simple CSS class switcher
	// find all divs
	// bind to click events
	// alter the CSS of the specific clicked div element
	/*$("div").click(function(){
		// $(this) is a shortcut for the element we just selected
		// using $("div")
		if ($(this).hasClass("red")) {
			$(this).addClass("blue").removeClass("red");
		}
		else if ($(this).hasClass("blue")) {
			$(this).addClass("green").removeClass("blue");
		}
		else if ($(this).hasClass("green")) {
			$(this).addClass("red").removeClass("green");
		}
	});*/
	
	$("div").click(function(){

	  	$(this).css("position", "absolute"); 
  		$(this).animate({left:"+=360"}, 1000, function(){}); 

		if ($(this).hasClass("red")) {
			$(this).removeClass().toggleClass("blue");
		}
		else if ($(this).hasClass("blue")) {
			$(this).removeClass().toggleClass("green");
		}
		else if ($(this).hasClass("green")) {
			$(this).removeClass().toggleClass("red");
		}

	});

	//A.What is the behaviour of the script? 
		//The script is waiting a click event on the div elements, then it try to find which object has been clicked, 
		//and changes the class of this object
	//B.Which elements are selected? 
		//The div elements are selected
	//C.What does $(this) refer to? 
		//this refer to all the .html document
	//D.Find the documentation for ‘hasClass’ function using the search tool on http://api.jquery.com/
		//	http://api.jquery.com/hasClass/
	//E.Find a function in http://api.jquery.com/category/css/ that could simplify the if ... else block. 
		// toggleClass();
});