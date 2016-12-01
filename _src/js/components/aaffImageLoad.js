// all component files should contain one main function named after the file name for easy access
// all files should expose an init function, and scroll, resize, or load function if needed.

//  **************************
//  **
//  **  COMPONENT IMAGE LOADING FUNCTIONS
//  **
//  **************************

// this file contains all js settings for category filtering for the IR download list


var aaUnveil = function aaUnveil()
{	
	var $this;

	$("div.media.unveil img").unveil( 200 , function(){
		$this = $(this);
		$this.addClass('loaded');
		$this.parents('.unveil').addClass('unveiled');
	});

};

var aaChangeSrc = function aaChangeSrc()
{
	var allImages;

	var init = function init()
	{
		allImages = $("div.media img");
		
		allImages.each(function()
		{
			change($(this));
		});
	};

	var change = function change($image)
	{
		if(!$image) return false;

		var localPixelRatio = aaffPixelRatio;
		var size = '';
		if(localPixelRatio > 1) size = '@2x';

		var imageWidth = $image.width();
		var srcToSet;
		var sizeToSet;
		
		
		var currentSize = $image.attr('data-current-size');
		
		
		sizeToSet = ('xxl' + size);
		if(sizeToSet === currentSize) return false;
		if(imageWidth > aaImgSizeXL)
		{
			srcToSet = $image.attr( 'data-xxl' + size );
			setNewSrc($image, srcToSet, sizeToSet);
			return true;
		}
		
		sizeToSet = ('xl' + size);
		if(sizeToSet === currentSize) return false;
		if(imageWidth > aaImgSizeL)
		{
			srcToSet = $image.attr( 'data-xl' + size );
			setNewSrc($image, srcToSet, sizeToSet);
			return true;
		}
		
		sizeToSet = ('l' + size);
		if(sizeToSet === currentSize) return false;
		if(imageWidth > aaImgSizeM)
		{
			srcToSet = $image.attr( 'data-l' + size );
			setNewSrc($image, srcToSet, sizeToSet);
			return true;
		}
		
		sizeToSet = ('m' + size);
		if(sizeToSet === currentSize) return false;
		if(imageWidth > aaImgSizeS)
		{
			srcToSet = $image.attr( 'data-m' + size );
			setNewSrc($image, srcToSet, sizeToSet);
			return true;
		}

		sizeToSet = ('s' + size);
		if(sizeToSet === currentSize) return false;
		srcToSet = $image.attr( 'data-s' + size );
		setNewSrc($image, srcToSet, sizeToSet);
		
		return true;
	};

	var setNewSrc = function setNewSrc($image, srcToSet, sizeToSet)
	{

		$image.attr('data-current-size', sizeToSet);
		
		if($image.parents('.media').hasClass('unveiled')) {
		
			var objImage;
			objImage = new Image();
	
			objImage.onload = function(){
				//$image.addClass('loaded');
				$image.attr('src', srcToSet);
	
			};
			objImage.src = srcToSet;
		
		} else {
			$image.attr('data-src', srcToSet);
		}
		return false;
	};

	return {
		init: init,
		change: change
	};

}();
