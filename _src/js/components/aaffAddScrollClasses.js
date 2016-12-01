// all component files should contain one main function named after the file name for easy access
// all files should expose an init function, and scroll, resize, or load function if needed.

//  **************************
//  **
//  **  COMPONENT SCROLL CLASS
//  **
//  **************************

// this file sets the article classes on scroll - for in and out needs, depends on jquery.viewport.mini

var aaffAddScrollClasses = function aaffAddScrollClasses(){
	
	var $articles = $('article');
	var $loader = $('#loader');
	var init = function init(){
		
		$articles = $('article');
		
		reCheck();
	};

	var reCheck = function reCheck(){
		
		if(!$articles.length) return;
		
		$articles.filter(':above-the-top').addClass('above').removeClass('below');
		$articles.filter(':in-viewport').removeClass('above below');
		$articles.filter(':below-the-fold').addClass('below').removeClass('above');
		
		if($loader.length) {
			var visibleloader = $loader.filter(':in-viewport');
			
			if(visibleloader.length && !visibleloader.hasClass('no-more')) {
				aaIrLoadMoreArticles.loaderSpin.start();
			} else {
				aaIrLoadMoreArticles.loaderSpin.stop();

			}
		}
		
	};
	
	return {
		init: init,
		reCheck: reCheck
	};
	
}();
