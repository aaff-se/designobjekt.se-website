// all component files should contain one main function named after the file name for easy access
// all files should expose an init function, and scroll, resize, or load function if needed.

//  **************************
//  **
//  **  COMPONENT IR LOAD MORE ARTICLES
//  **
//  **************************

// this file contains all js settings for category filtering for the IR download list

var aaIrLoadMoreArticles = function aaIrLoadMoreArticles(){
	
	var $articleList,
		currentPageUrl,
		offset,
		$loadMoreLink,
		ajaxLoading=false,
		$loaderLink;

	var init = function init(){
		
		$articleList = $('#main');
		$loaderLink = $('#loader');
		currentPageUrl = window.location.protocol+'//'+window.location.host+window.location.pathname;
		
		$loaderLink.on('click',loaderClick);
	};
	
	var loaderSpin = function loaderSpin(){
		
		var $loader = $('#loader');
		var $circle = $('#loader .loadercircle');
		var running = false;
		var interval1;
		var interval2;
		var timeout1;
		var timeout2;
		var timeout3;
		
		var timeoutFunc1 = function timeoutFunc1(){
				$loader.removeClass('spin');
		};
		var timeoutFunc2 = function timeoutFunc2(){
				$circle.removeClass('stage2').addClass('stage3');
		};
		var timeoutFunc3 = function timeoutFunc3(){
				$circle.removeClass('stage3');
		};
		
		var intervalFunc1 = function intervalFunc1(){
			$loader.addClass('spin');
			timeout1 = setTimeout(timeoutFunc1,10000);
		};

		var intervalFunc2 = function intervalFunc2(){
			$circle.addClass('stage2');
			timeout2 = setTimeout(timeoutFunc2,750);
			timeout3 = setTimeout(timeoutFunc3,1500);
		};

		var start = function start(){
			if($loader === undefined || $circle === undefined)
				return false;
			
			if(running) stop();
			
			intervalFunc1();
			intervalFunc2();
			interval1 = setInterval(intervalFunc1, 10100);
			interval2 = setInterval(intervalFunc2, 1600);

			running = true;
			
			return true;
		};
		
		stop = function stop(){
			//if(!running) return false;
			running = false;
			if(interval1) { clearInterval(interval1); interval1 = false; }
			if(interval2) { clearInterval(interval2); interval2 = false; }
			if(timeout1) { clearTimeout(timeout1); timeout1 = false; }
			if(timeout2) { clearTimeout(timeout2); timeout2 = false; }
			if(timeout3) { clearTimeout(timeout3); timeout3 = false; }
			$loader.removeClass('spin');
			$circle.removeClass('stage2 stage3');
			return true;
		};
		
		return {
			start: start,
			stop: stop
		};
	}();
	
	var onScroll = function onScroll(){
		if(ajaxLoading || !$articleList.length) return false;
		var localWindowHeight = aaBrowserDimensions.height();
		var localHeight = $body.height();
		var localScroll = $body.scrollTop();
		
		if(localScroll > (localHeight - (localWindowHeight*3)) ) {
			offset = $articleList.find('section').length;
			getMorePosts(offset);
		}
		
	};
	
	var loaderClick = function loaderClick(e){
			e.preventDefault();
			offset = $articleList.find('section').length;
			
			if(ajaxLoading) {
				ajaxLoading.abort();
				ajaxLoading = false;
			}
			getMorePosts(offset);
	};
	var scrollTopClick = function scrollTopClick(e){
		e.preventDefault();
		window.scrollTo(0,0);
	};
	
	var getMorePosts = function getMorePosts(offset){
		if(ajaxLoading) return false;
		
		
		if(offset === null || offset === undefined)
			offset = 0;
		
		var url = currentPageUrl + '?offset=' + offset;
		var parser, doc, content;
		
		ajaxLoading = $.ajax({
			type: 'get',
			url: url,
			data: '',
			dataType: 'html',
			success: function(data){
				parser = new DOMParser();
				doc = parser.parseFromString(data, "text/html");
				content = doc.getElementById('main').innerHTML;
				content = content.trim();
				
				if(content) {
					$articleList.append(content);
					ajaxLoading = false;
					aaChangeSrc.init();
					aaUnveil();
					aaffAddScrollClasses.init();
					aaffOnHover.init();
				} else {
					$loaderLink.off('click',loaderClick);
					$loaderLink.on('click',scrollTopClick);
					$loaderLink.addClass('no-more');
					loaderSpin.stop();
				}
				
				parser = doc = content = null;
			},
			error: function(){
				ajaxLoading = false;
			},
			complete: function(){
				
			}
		});

	};
	
	return {
		init: init,
		onScroll: onScroll,
		loaderSpin: loaderSpin
	};
	
}();
