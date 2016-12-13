// all component files should contain one main function named after the file name for easy access
// all files should expose an init function, and scroll, resize, or load function if needed.

//  **************************
//  **
//  **  COMPONENT TOUCH CLICKS
//  **
//  **************************

// make touchdevices need a double click for opening links

var aaffTouchClicks = function aaffTouchClicks(){
	
	var $articles;
	var latestClick;
	var reinit=false;
	var init = function init(){
		
		if(!aaffIsTouch)
			return false;
		
		$articles = $('article a');
		
		if(reinit) {
			$articles.off('click', onClick);
		}
		
		$articles.on('click', onClick);
		
		reinit = true;
	};
	
	var onClick = function onClick(e){
		
		if(latestClick !== e.currentTarget)
			e.preventDefault();

		latestClick = e.currentTarget;
		
	};
	
	return {
		init: init
	};
	
}();
