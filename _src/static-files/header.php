
<!DOCTYPE HTML>

<!--

DesignObjekt is a project by Anton Andersson Form & Funktioner and 1910 Design & Communication / aaff.se / weare1910.com / 2016

-->

<html>
	
	<head>
		
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8;">
	
		<meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no">
		
		<title>DesignObjekt</title>

		<link rel="stylesheet" href="<?php echo _TEMPLATE_DIR_URI; ?>/_static/css/screen-min.css" type="text/css" media="all">
		
		<link href="<?php echo _TEMPLATE_DIR_URI ?>/_static/imgs/favicon.ico" rel="shortcut icon" type="image/x-icon" />
		
		<?php echo aa_get_web_app_images(); ?>

		<?php echo aa_get_header_metadata(); ?>
		
		<!--[if lt IE 9]>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script>
		<![endif]-->
		<!--[if lte IE 9]>
			<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<![endif]-->


	</head>
	<body>
		<style>
			main { opacity: 0; }
			footer { opacity: 0; }
		</style>
		<noscript>
			<style>
				main { opacity: 1 !important; }
				footer { opacity: 1 !important; }
				div.media.unveil img { display: none; }
				div.media.unveil img.loaded { display: block; }
			</style>
		</noscript>
		
		<div id="preloader" class="preloader">
			<img id="preloader_img" class="" src="" width="160px" height="160px">
		</div>
		<script type="text/javascript" id="init_script">
				
			var objImage;
			var thisScript = document.getElementById('init_script');
			var initBody = document.getElementsByTagName('body')[0];
			var initPreloader = document.getElementById('preloader');
			var initPreloaderImg = document.getElementById('preloader_img');
			var cat = 'Not here, in the main window!'
			var newSrc = "<?php echo _TEMPLATE_DIR_URI; ?>/_static/imgs/designobjekt_preloader.gif";
			objImage = new Image();
	
			objImage.onload = function(){
				
				initPreloaderImg.src = newSrc;
				initPreloaderImg.className= 'loaded';
				
				setTimeout(function(){
					initBody.className= 'loaded';

					initPreloader.parentNode.removeChild(initPreloader);
					thisScript.parentNode.removeChild(thisScript);
					objImage = thisScript = initBody = initPreloader = initPreloaderImg = newSrc = null;
				},2500);
			};
			objImage.src = newSrc;
			
				
		</script>
		
		<header>
			<div class="logo">
				<a id="menu" href="#">
					<?php svg_logo(); ?>
				</a>
			</div>
		</header>
		
		<main id="main">
