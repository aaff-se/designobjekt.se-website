
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

		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
			ga('create', 'UA-88292482-1', 'auto');
			ga('send', 'pageview');
		</script>

	</head>
	<body>
		<style>
			body { opacity: 0; }
		</style>
		<noscript>
			<style>
				body { opacity: 1 !important; }
				div.media.unveil img { display: none; }
				div.media.unveil img.loaded { display: block; }
			</style>
		</noscript>

		<header>
			<div class="logo">
				<a id="menu" href="#">
					<?php svg_logo(); ?>
				</a>
			</div>
		</header>
		
		<main id="main">
