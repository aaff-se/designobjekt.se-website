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
	var $logo;
	var link = "/wp/wp-content/themes/do/_static/imgs/ee2.mp3";
	var link2 = "/wp/wp-content/themes/do/_static/imgs/ee3.mp3";
	var currentAudio;
	var init = function init(){
		$logo = $('.logo');
		if(window.console) console.log("(=^･^=) Hello lil cat, type 'cat' to get a meow back!");
		
		$document.keyup(function(e) {

			if(e.keyCode == 67) {
				if(!audio || currentAudio != link) {
					audio = new Audio(link);
					currentAudio = link;
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
			if(e.keyCode == 68) {
				if(!audio || currentAudio != link2) {
					audio = new Audio(link2);
					currentAudio = link2;
				}
				if(timeout) clearTimeout(timeout);
				timeout = setTimeout(timeoutFunc, timeoutInt);
				prevTyped = e.keyCode;
			}
			if(e.keyCode == 79 && prevTyped == 68) {
				if(timeout) clearTimeout(timeout);
				timeout = setTimeout(timeoutFunc, timeoutInt);
				prevTyped = e.keyCode;
			}
			if(e.keyCode == 71 && prevTyped == 79) {
				woof();
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
		$logo.addClass('cat');
		if(window.console) console.log("MEOW!");
		setTimeout(function(){
			$logo.removeClass('cat');
		}, 1500);
		if(typeof ga === "function")
			ga('send', 'event', 'Easteregg', 'cat');
	};
	var woof = function woof(){
		audio.load();
		audio.play();
		if(window.console) console.log("No, wrong animal!");
		if(typeof ga === "function")
			ga('send', 'event', 'Easteregg', 'dog');
	};
	
	return {
		init: init
	};
	
}();

