
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
		
		<div class="preloader">
			<img class="loaded" src="<?php echo _TEMPLATE_DIR_URI; ?>/_static/imgs/designobjekt_preloader.gif?<?php echo time('U');?>" width="160px" height="160px">
		</div>
		
		<header>
			<div class="logo">
				<a id="menu" href="#">
					<?php svg_logo(); ?>
				</a>
			</div>
		</header>
		
		<main id="main">
