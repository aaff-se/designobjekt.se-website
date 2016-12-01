<?php 

function aa_get_page_title(){
	
	global $post;
	
	if( is_front_page() ) return _SITE_NAME;

	if( is_page() ) return $post->post_title . ' | ' .  _SITE_NAME;


	//kommer när/om vi sparat ner newsfeeden, annars skippar vi
/*
	if( is_singular('aa_work') ) return get_post_meta($post->ID, 'herotitle', true) . ' | ' .  _SITE_NAME;

	if( is_singular('aa_article') ) return $post->post_title . ' | ' .  _SITE_NAME;

	if(is_post_type_archive('aa_work')) return 'Work | ' .  _SITE_NAME;

	if(is_post_type_archive('aa_article')) return 'Articles | ' .  _SITE_NAME;
*/

	return  _SITE_NAME;
}


function aa_get_web_app_images() {
	
	$html  ='';
	
	
	// ICONS
	
	// iPad retina icon
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/152.png"';
		$html .=' sizes="152x152"';
		$html .=' rel="apple-touch-icon-precomposed">';
	
	// iPad retina icon (iOS < 7)
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/144.png"';
		$html .=' sizes="144x144"';
		$html .=' rel="apple-touch-icon-precomposed">';
	
	// iPad non-retina icon
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/76.png"';
		$html .=' sizes="76x76"';
		$html .=' rel="apple-touch-icon-precomposed">';
	
	// iPad non-retina icon (iOS < 7)
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/72.png"';
		$html .=' sizes="72x72"';
		$html .=' rel="apple-touch-icon-precomposed">';
	
	// iPhone 6 Plus icon
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/180.png"';
		$html .=' sizes="120x120"';
		$html .=' rel="apple-touch-icon-precomposed">';
	
	// iPhone retina icon (iOS < 7)
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/114.png"';
		$html .=' sizes="114x114"';
		$html .=' rel="apple-touch-icon-precomposed">';
	
	// iPhone non-retina icon (iOS < 7)
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/57.png"';
		$html .=' sizes="57x57"';
		$html .=' rel="apple-touch-icon-precomposed">';

	
	// STARTUP IMAGES
	
	// iPad retina portrait startup image
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/1536x2008.png"';
		$html .=' media="(device-width: 768px) and (device-height: 1024px)';
		$html .=' and (-webkit-device-pixel-ratio: 2)';
		$html .=' and (orientation: portrait)"';
		$html .=' rel="apple-touch-startup-image">';
	
	// iPad retina landscape startup image
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/1496x2048.png"';
		$html .=' media="(device-width: 768px) and (device-height: 1024px)';
		$html .=' and (-webkit-device-pixel-ratio: 2)';
		$html .=' and (orientation: landscape)"';
		$html .=' rel="apple-touch-startup-image">';
	
	// iPad non-retina portrait startup image
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/768x1004.png"';
		$html .=' media="(device-width: 768px) and (device-height: 1024px)';
		$html .=' and (-webkit-device-pixel-ratio: 1)';
		$html .=' and (orientation: portrait)"';
		$html .=' rel="apple-touch-startup-image">';
	
	// iPad non-retina landscape startup image
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/748x1024.png"';
		$html .=' media="(device-width: 768px) and (device-height: 1024px)';
		$html .=' and (-webkit-device-pixel-ratio: 1)';
		$html .=' and (orientation: landscape)"';
		$html .=' rel="apple-touch-startup-image">';
	
	// iPhone 6 Plus portrait startup image
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/1242x2148.png"';
		$html .=' media="(device-width: 414px) and (device-height: 736px)';
		$html .=' and (-webkit-device-pixel-ratio: 3)';
		$html .=' and (orientation: portrait)"';
		$html .=' rel="apple-touch-startup-image">';
	
	// iPhone 6 Plus landscape startup image
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/1182x2208.png"';
		$html .=' media="(device-width: 414px) and (device-height: 736px)';
		$html .=' and (-webkit-device-pixel-ratio: 3)';
		$html .=' and (orientation: landscape)"';
		$html .=' rel="apple-touch-startup-image">';
	
	// iPhone 6 startup image
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/750x1294.png"';
		$html .=' media="(device-width: 375px) and (device-height: 667px)';
		$html .=' and (-webkit-device-pixel-ratio: 2)"';
		$html .='rel="apple-touch-startup-image">';
	
	// iPhone 5 startup image
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/640x1096.png"';
		$html .=' media="(device-width: 320px) and (device-height: 568px)';
		$html .=' and (-webkit-device-pixel-ratio: 2)"';
		$html .=' rel="apple-touch-startup-image">';
	
	// iPhone < 5 retina startup image
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/640x920.png"';
		$html .=' media="(device-width: 320px) and (device-height: 480px)';
		$html .=' and (-webkit-device-pixel-ratio: 2)"';
		$html .=' rel="apple-touch-startup-image">';
	
	// iPhone < 5 non-retina startup image
	$html .='<link href="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/320x460.png"';
		$html .=' media="(device-width: 320px) and (device-height: 480px)';
		$html .=' and (-webkit-device-pixel-ratio: 1)"';
		$html .=' rel="apple-touch-startup-image">';
	
	
	$html .='<meta name="msapplication-square70x70logo" content="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/70.png">';
	$html .='<meta name="msapplication-square150x150logo" content="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/150.png">';
	$html .='<meta name="msapplication-wide310x150logo" content="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/310x150.png">';
	$html .='<meta name="msapplication-square310x310logo" content="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/310.png">';
	$html .='<meta name="msapplication-TileImage" content="'._TEMPLATE_DIR_URI.'/_static/imgs/web-icons/144-transparent.png">';
	$html .='<meta name="msapplication-TileColor" content="#ffffff">';

	
	return $html;
}

function aa_get_header_metadata(){
	
	global $post;
	
	$page_title = aa_get_page_title();
	$image_small = array();
	$image_large = array();
	

	$startpage_options = false;
	if(!$startpage_options) $startpage_options = array();

	
	$image_id = 0;
	if(array_key_exists('seo_image', $startpage_options))
		$image_id = $startpage_options['seo_image'];
	unset($startpage_options);	
	
	if($post) $seo = get_post_meta($post->ID, 'seo', true);
	if(!$seo) $seo = false;
	
	if($seo)
		if(!!$seo['img'])
			$image_id = $seo['img'];
	
	
	if($image_id) { 
		$image_small = wp_get_attachment_image_src($image_id, 'og'); 
		$image_large = wp_get_attachment_image_src($image_id, 'xl@2x');
	} else {
		$image_small[0] = _TEMPLATE_DIR_URI.'/_static/imgs/ogimage.jpg';
		$image_large[0] = _TEMPLATE_DIR_URI.'/_static/imgs/ogimage.jpg';
	}
	$description = false;
	if($post && !is_archive() && $seo) $description = $seo['desc'];
	if(!$description) $description = _SITE_DESC;
	$description = htmlspecialchars($description);
	
	$url = _SITE_URL;
	
	$theme_color = '#f8f8f8';
	
	$html = '';

	//Apple stuff
	// Allow web app to be run in full-screen mode.
	$html .='<meta name="apple-mobile-web-app-capable" content="yes">';
	
	// Disable automatic phone number detection.
	$html .='<meta name="format-detection" content="telephone=no">';
	
	//Set addressbar color
	//Chrome, Firefox OS and Opera
	$html .='<meta name="theme-color" content="'.$theme_color.'">';
	
	//Windows Phone
	$html .='<meta name="msapplication-navbutton-color" content="'.$theme_color.'">';
	
	//iOS Safari 
	$html .='<meta name="apple-mobile-web-app-status-bar-style" content="'.$theme_color.'">';
		
	$html .='<meta name="description" content="'.$description.'">';
	
	$html .='<meta itemprop="name" content="'.$page_title.'">';
	$html .='<meta itemprop="description" content="'.$description.'">';
	$html .='<meta itemprop="image" content="'.$image_small[0].'">';
	
	$html .='<meta name="twitter:card" content="summary">';  
	$html .='<meta name="twitter:domain" content="'.$url.'">';
	$html .='<meta name="twitter:title" content="'.$page_title.'">';
	$html .='<meta name="twitter:description" content="'.$description.'">';
	$html .='<meta name="twitter:image" content="'.$image_small[0].'">';

	$html .='<meta property="og:title" content="'.$page_title.'">';
	$html .='<meta property="og:description" content="'.$description.'">';
	$html .='<meta property="og:image" content="'.$image_large[0].'">';
	$html .='<meta property="og:url" content="'.$url.'"/>';
	$html .='<meta property="og:site_name" content="' . _SITE_NAME . '">';
	$html .='<meta property="og:locale" content="en">';
	$html .='<meta property="og:type" content="website">';

	$html .='<meta name="msapplication-starturl" content="'._SITE_URL.'">';
	
	return $html;
}

function aa_get_image_html($image_id=false,$extra_class=false) {
	
	if($image_id) $img_meta = wp_get_attachment_metadata($image_id);
	
	$img_sizes = array('s', 'm', 'l', 'xl', 'xxl', 's@2x', 'm@2x', 'l@2x', 'xl@2x', 'xxl@2x');
	$images = array();
	if($image_id) {
		
		foreach ($img_sizes as $size):
			$size_to_get = $size;
			//reversed '.gif'
			if(stripos(strrev($img_meta['file']), 'fig.') === 0)
				$size_to_get = 'full';
			$images[$size] = wp_get_attachment_image_src($image_id, $size_to_get);
		endforeach;
	}
	
	$placeholder = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 ".($image_id ? $img_meta['width'] : '15')." ".($image_id ? $img_meta['height'] : '9')."'%2F%3E";
	
	$html  = '<div class="media unveil'.(trim($extra_class) ? ' '. trim($extra_class) : '' ).'">';
		
		$html .= '<img width="'.($image_id ? $img_meta['width'] : '15').'" height="'.($image_id ? $img_meta['height'] : '9').'" src="'.$placeholder.'"';
		
		if($image_id) {
			
			$html .=' data-src="" ';
			$html .='data-current-size="init" ';
			foreach ($images as $size => $image):
				$html .='data-'.$size.'="'.$image[0].'" ';
			endforeach;
			$html .='title="'.$img_meta['image_meta']['title'].'" alt="'.$img_meta['image_meta']['caption'].'"';
			
		}
		$html .='>';
		
		$html .= '<noscript>';
				
			if($image_id) {
				
			$html .= '<img class="loaded" src="'.$images['xxl@2x'][0].'" title="'.$img_meta['image_meta']['title'].'" alt="'.$img_meta['image_meta']['caption'].'">';
			
			} else {
				
				$html .= '<img class="loaded" src="'._TEMPLATE_DIR_URI.'/_static/imgs/placeholder_'.$placeholder.'.png" alt="placeholder">';
				
			}
			
		$html .= '</noscript>';
	$html .= '</div>';
	
	return $html;
	
}

