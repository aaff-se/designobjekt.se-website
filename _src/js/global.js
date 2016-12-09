var aaffPixelRatio = Math.ceil(window.devicePixelRatio);
if(isNaN(aaffPixelRatio)) { aaffPixelRatio = 1; }

var aaBreakpointExtraSmall = 350;
var aaBreakpointSmall = 680;
var aaBreakpointMedium = 960;
var aaBreakpointLarge = 1440;
var aaBreakpointExtraLarge = 1440;

var aaImgSizeS = 660;
var aaImgSizeM = 948;
var aaImgSizeL = 1272;
var aaImgSizeXL = 1920;
var aaImgSizeXXL = 2544;


var aaffIsTouch = false;

var $window = $(window);
var $document = $(document);
var $body = $('body');

$document.ready(function() { aaffInitReady(); });

$window.on('load', function() { aaffInitLoad(); });

$window.on('unload', function(){ aaffInitUnload(); });

$window.on('resize', function() { aaffResize.init(); });

$window.on('scroll', function() { aaffScroll.onScroll(); });

$window.on('focus', function() { aaffInitFocus(); });

$window.on('blur', function() { aaffInitBlur(); });

var aaffInitReady = function aaffInitReady() {
	//add all functions here:
	
	aaCheckIfIe.init();
	aaffReadyTouch.init();
	aaBrowserDimensions.calc();
	aaffScroll.init();
	//aaffAutoScroll.init();
	aaffMenu.init();
	aaSvgs.init();
	aaIrLoadMoreArticles.init();
	aaffEE.init();
	
	//END add all functions here:

};

var aaffInitLoad = function aaffLoad() {
	//add all functions here:

	aaffAddScrollClasses.init();
	aaffOnHover.init();
	aaChangeSrc.init();
	aaUnveil();
	
	//$("link[rel='shortcut icon']").attr("href", "/favicon.ico");

	
	//END add all functions here:
};

var aaffInitFocus = function aaffInitFocus(){
	$("link[rel='shortcut icon']").attr("href", "/favicon.ico");
};

var aaffInitBlur = function aaffInitBlur(){
	$("link[rel='shortcut icon']").attr("href", "/favicon2.ico");
};



var aaffResize = function aaffResize() {

	var haveResized = function haveResized() {
		//add all functions here:
		
		aaffAddScrollClasses.reCheck();
		aaBrowserDimensions.calc();
		aaSvgs.scale();
		aaChangeSrc.init();

		return;
	};

	var resizeTimeout;

	var init = function init() {
		if(resizeTimeout) {
			clearTimeout(resizeTimeout);
		}
		resizeTimeout = setTimeout( haveResized , 100);
	};

	return {
		init: init
	};
	
}();

var aaffScroll = function aaffScroll() {
	
	var haveScrolled = function haveScrolled() {

		var currentPos = $document.scrollTop();

		if(currentPos < 0) currentPos = 0;

		//add all functions here:

			//on any scroll
			
			aaffAddScrollClasses.reCheck();
			aaIrLoadMoreArticles.onScroll();
			//on scroll up
			if(currentPos < prevPos) {
			}
				
			// on scroll down
			if(currentPos > prevPos) {
			}

		//END add all functions here:


		prevPos = currentPos;

		return;
	};

	var scrolled = false;
	var prevPos;
	var currentPos;
	var scrollCheckInterval;
	
	var init = function init(interval) {
		
		if (interval === undefined) interval = 150;
		
		if(scrollCheckInterval)
			clearInterval(scrollCheckInterval);
		
		scrollCheckInterval = setInterval(function scrollCheckInterval() {
			
			if (scrolled) {
				haveScrolled();
				scrolled = false;
			}
			
		}, interval);
		
	};
	
	var stop = function stop() {
		
		if(scrollCheckInterval)
			clearInterval(scrollCheckInterval);

	};

	var prevPosFunction = function prevPosFunction() {
		return prevPos;
	};

	var onScroll = function onScroll() {
		scrolled = true;
	};

	
	return {
		init: init,
		stop: stop,
		onScroll: onScroll,
		prevPos: prevPosFunction
	};

}();

var aaffReadyTouch = function aaffReadyTouch() {
	
	var init = function init(){
		if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|iemobile|Windows Phone)/)) {
			aaffIsTouch = true;
			$body.addClass('touch');
		}
	};
	
	return {
		init: init
	};
}();

var aaBrowserDimensions = function aaBrowserDimensions() {
	
	var width, 
		height, 
		calcFunction,
		widthFunction, 
		heightFunction, 
		prevWidth, 
		prevHeight, 
		prevWidthFunction, 
		prevHeightFunction;

	calcFunction = function calcFunction() {
		prevWidth = width;
		prevHeight = height;
		
		if (typeof window.innerWidth != 'undefined') {
			
			width = window.innerWidth;
			height = window.innerHeight;
			
		} else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth !== 0) {
			
			width = document.documentElement.clientWidth;
			height = document.documentElement.clientHeight;
			
		} else {
			
			width = document.getElementsByTagName('body')[0].clientWidth;
			height = document.getElementsByTagName('body')[0].clientHeight;
			
		}
	};

	widthFunction = function widthFunction() {
		return width;
	};
	
	heightFunction = function heightFunction() {
		return height;
	};
	
	prevWidthFunction = function prevWidthFunction() {
		return prevWidth;
	};
	
	prevHeightFunction = function prevHeightFunction() {
		return prevHeight;
	};

	return {
		calc: calcFunction,
		width: widthFunction,
		height: heightFunction,
		prevWidth: prevWidthFunction,
		prevHeight: prevHeightFunction
	};
}();

var aaCheckIfIe = function aaCheckIfIe() {
	
	var isIE;
	
	var init = function init(){
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
	
		if (msie > 0) {
			isIE = true;
		} else {
			isIE = false;
		}
	
	};
	
	var check = function check(){
		
		if(isIE === undefined) {
			init();
		}
		
		
		if(isIE) {
			$body.addClass('msie');
		}
		return isIE;
		
	}; 
	
	return {
		init: init,
		check: check
	};
	
}();

var aaSvgs = function aaSvgs() {
	
	var $svgs;
	var isIe;
	
	var init = function init(){
		$svgs = $('svg');
		isIe = aaCheckIfIe.check();
		
		//run it once on init
		scale();
	};
	
	var scale = function scale() {
		if(!$svgs.length || !isIe) {
			return false;
		}

		$svgs.each(function scaleEachSvg() {
			var $this = $(this);
			$this.css({'height' : (Math.ceil( $this.width() * $this.attr('data-ratio') )) + 'px' });
		});
	};

	return {
		init: init,
		scale: scale
	};

}();
