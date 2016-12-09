// all component files should contain one main function named after the file name for easy access
// all files should expose an init function, and scroll, resize, or load function if needed.

//  **************************
//  **
//  **  COMPONENT ARTICLE HOVER
//  **
//  **************************

// Offset article content based on cursor position

var aaffAutoCarousel = function aaffAutoCarousel(){
	
	var playing = {};
	
	var intervalTime = 6000;
	var firstTimeoutTime = 4000;
	var fadeoutTime = 1600;
	
	var nextSlide = function nextSlide($slides){
		

		var amt = $slides.length -1;
		var current = $slides.filter('.current').index();
		var $oldCurrent = $slides.eq(current);
		$oldCurrent.removeClass('current').addClass('fadeout');
		if(current < amt) {
			$slides.eq( (current+1) ).addClass('current');
		} else {
			$slides.eq( 0 ).addClass('current');
		}

		setTimeout(fadeout, fadeoutTime, $oldCurrent);
	};
	
	var fadeout = function fadeout($oldCurrent){
		$oldCurrent.removeClass('fadeout');
	};
	
	var play = function play($slides, articleId){
		if(playing[articleId])
			clearInterval(playing[articleId]);
		
		playing[articleId] = true;
		setTimeout(firstPlayTimeout, fadeoutTime, $slides, articleId);
	};
	
	var firstPlayTimeout = function($slides, articleId){
		nextSlide($slides);
		playing[articleId] = setInterval(nextSlide, intervalTime, $slides);
	};
	
	var pause = function pause(articleId){
		if(playing[articleId])
			clearInterval(playing[articleId]);
		delete playing[articleId];
	};

	var start = function start(articles){
		
		var $media;
		var $article;
		var articleId;
		$(articles).each(function(){
			$article = $(this);
			$media = $article.find('.media');
			
			if($media.length < 2)
				return;
			articleId = $article.attr('id');
			
			if(playing[articleId] !== undefined)
				return;
				
			play($media, $article.attr('id'));
		});

	};
	
	var stop = function stop(articles){
		
		$(articles).each(function(){
			
			pause($(this).attr('id'));
		});
	};
	
	return {
		start: start,
		stop: stop
	};
	
}();
