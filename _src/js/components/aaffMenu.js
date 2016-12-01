// all component files should contain one main function named after the file name for easy access
// all files should expose an init function, and scroll, resize, or load function if needed.

//  **************************
//  **
//  **  COMPONENT MENU TOGGLE
//  **
//  **************************

// this file toggles the menu

var aaffMenu = function aaffMenu(){
	
	var $logo,
		menuVisible = false,
		$footer,
		$footerLinks,
		footerFadeTimeout;
		
	var init = function init(){
		
		$logo = $('.logo a');
		$footer = $('footer');
		$footerLinks = $footer.find('a');
		
		$logo.on('click', menuToggle);
		$footer.on('click', menuToggle);
		$footerLinks.on('click', function(e){
			e.stopPropagation();
		});
		
		$document.keyup(function(e) {
			if (e.keyCode === 27 && menuVisible) menuToggle(e);   // esc
		});
	};
	
	var menuToggle = function menuToggle(e){
		e.preventDefault();
		menuVisible = !menuVisible;

		if(menuVisible) {
			$footer.addClass('fade');
			$body.addClass('menu');
			if(footerFadeTimeout)
				clearTimeout(footerFadeTimeout);
			footerFadeTimeout = false;
		} else {
			$body.removeClass('menu');
			if(footerFadeTimeout)
				clearTimeout(footerFadeTimeout);
			footerFadeTimeout = setTimeout(function(){
				$footer.removeClass('fade');
				footerFadeTimeout = false;
			}, 600);
		}

	};
	
	return {
		init: init
	};
	
}();
