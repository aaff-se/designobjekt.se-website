// all component files should contain one main function named after the file name for easy access
// all files should expose an init function, and scroll, resize, or load function if needed.

//  **************************
//  **
//  **  COMPONENT ARTICLE HOVER
//  **
//  **************************

// Offset article content based on cursor position

var aaffAutoScroll = function aaffAutoScroll(){
	
	var scrollInterval = false;
	var resetInterval = false;
	var scrollTimeout = false;
	var doResetTimerVar = false;
	var scrollTop;
	var init = function init(){
		scrollTop = $body.scrollTop();
	
		resetCheck();

		$window.on('focus', resetCheck );
		$window.on('focus', loadListeners );
		$window.on('blur', stop );
		loadListeners();

	};
	
	var loadListeners = function loadListeners(){
		$window.on('load resize mousewheel keydown', doResetTimer );
	};
	
	var doResetTimer = function doResetTimer(e){
		doResetTimerVar = true;
		if(scrollInterval)
			clearInterval(scrollInterval);
	};
	
	var resetCheck = function resetCheck(){
		resetInterval = setInterval(resetCheckFunc, 1000);
	};
	
	var resetCheckFunc = function resetCheckFunc(){
		if (doResetTimerVar) {
			resetTimer();
			doResetTimerVar = false;
		}
	};
	
	var resetTimer = function resetTimer(){
		if(scrollInterval)
			clearInterval(scrollInterval);
		if(scrollTimeout)
			clearTimeout(scrollTimeout);
		scrollInterval = scrollTimeout = false;

		scrollTimeout = setTimeout(scrollIntervalFunc, 5000);
	};
	
	var scrollIntervalFunc = function scrollIntervalFunc(){
		scrollIt();
		scrollInterval = setInterval(scrollIt, 30);
		
	};
	
	var scrollIt = function scrollIt(){
		window.scrollBy(0,1);
		
	};
	
	var stop = function stop(){
		if(scrollInterval)
			clearInterval(scrollInterval);
		if(scrollTimeout)
			clearTimeout(scrollTimeout);
		if(resetInterval)
			clearTimeout(resetInterval);
		resetInterval = scrollTimeout = scrollInterval = false;
		$window.off('load resize mousewheel mousemove keydown', doResetTimer);
	};

	
	return {
		init: init,
		stop: stop,
		resetCheck: resetCheck,
		doResetTimer: doResetTimer
		
	};
	
}();
