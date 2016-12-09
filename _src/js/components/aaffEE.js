// all component files should contain one main function named after the file name for easy access
// all files should expose an init function, and scroll, resize, or load function if needed.

//  **************************
//  **
//  **  COMPONENT MEOW TOGGLE
//  **
//  **************************

// this file toggles the meow

var aaffEE = function aaffEE(){
	
	var timeout;
	var timeoutInt = 4000;
	var prevTyped;
	var audio = false;

	var init = function init(){
		if(window.console) console.log('(⁎˃ᆺ˂) Hello lil cat');
		
		$document.keyup(function(e) {

			if(e.keyCode == 67) {
				if(!audio) {
					audio = new Audio("/wp/wp-content/themes/do/_static/imgs/ee.mp3");
				}
				if(timeout) clearTimeout(timeout);
				timeout = setTimeout(timeoutFunc, timeoutInt);
				prevTyped = e.keyCode;
			}
			if(e.keyCode == 65 && prevTyped == 67) {
				if(timeout) clearTimeout(timeout);
				timeout = setTimeout(timeoutFunc, timeoutInt);
				prevTyped = e.keyCode;
			}
			if(e.keyCode == 84 && prevTyped == 65) {
				meow();
				prevTyped = false;
			}
		});
	};
	
	var timeoutFunc = function timeoutFunc(){
		prevTyped = false;
	};
	
	var meow = function meow(){
		audio.load();
		audio.play();
	};
	
	return {
		init: init
	};
	
}();


// c = 67
// a = 65
// t = 84