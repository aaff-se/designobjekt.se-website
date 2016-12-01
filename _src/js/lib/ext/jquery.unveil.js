/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 *
 * --------------------------------
 *
 * added an interval to scroll check
 *                            - aaff
 */

;(function($) {

	var theUnveilInterval=false;
	var theUnveilTimeout=false;
	var theUnveilShouldRun=true;
	
	$.fn.unveil = function(threshold, callback) {
	
		var $w = $(window),
		th = threshold || 0,
		images = this,
		loaded,
		
		toggleUnveil = false,
		unveilTrigger = function unveilTrigger(){
			var thisImage = this;
			var source = thisImage.getAttribute("data-src");
			if (source) {
				var objImage;
				objImage = new Image();
				objImage.onload = function(){
					thisImage.setAttribute("src", source);
					if (typeof callback === "function") callback.call(thisImage);
				};
				objImage.src = source;
			}
		},
		unveil = function unveil() {
			var unveilFilter = function unveilFilter(){
				var $e = $(this);
				if ($e.is(":hidden")) return;
				
				var wt = $w.scrollTop(),
				wb = wt + $w.height(),
				et = $e.offset().top,
				eb = et + $e.height();
				
				return eb >= wt - th && et <= wb + th;
			},
			inview = images.filter( unveilFilter );
			
			loaded = inview.trigger("unveil");
			images = images.not(loaded);
			
			if(!images.length && theUnveilInterval) {
				theUnveilShouldRun = false;
			}
		};
		
		theUnveilTimeoutFunc = function theUnveilTimeoutFunc(){
			clearInterval(theUnveilInterval);
			theUnveilInterval=false;
			theUnveilTimeout=false;
		},
		
		theUnveilIntervalFunc = function theUnveilIntervalFunc(){
			if(!toggleInview) return;
			toggleInview = false;
			unveil();
			if(theUnveilTimeout) clearTimeout(theUnveilTimeout);
			theUnveilTimeout = setTimeout(theUnveilTimeoutFunc, 150);
		},
		
		runUnveil = function runUnveil(){
			if(!theUnveilShouldRun) return;
			toggleInview = true;
			if(!theUnveilInterval) { 
				theUnveilInterval = setInterval(theUnveilIntervalFunc, 100); 
				//run directly
				theUnveilIntervalFunc();
			}
		};
		
		if(theUnveilInterval) clearInterval(theUnveilInterval);
		
		this.one(
		"unveil", unveilTrigger );

		$w.on("scroll.unveil resize.unveil lookup.unveil", runUnveil);
		
		theUnveilShouldRun = true;
		
		runUnveil();
		
		return this;
	
	};
	
})(window.jQuery || window.Zepto);