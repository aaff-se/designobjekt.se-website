<?php 
/*
$echo_clear = (array_key_exists('offset', $_GET) ? 0 : 1 );
if($echo_clear) echo '<div class="clear"></div>';
*/
?>
			
		</main> 
		
		<a href="#main" id="loader">
			<svg class="main-loader" viewBox="0 0 100 100" data-ratio="1">
				<circle class="loadercircle" cx="50" cy="50" r="100" ></circle>
			</svg>
			<svg class="back-to-top" viewBox="0 0 100 100" data-ratio="1">
				<line class="st0" x1="50" y1="9" x2="50" y2="90"/>
				<polyline points="80,39 50,9 20,39"/>
			</svg>
		</a>
		
		<footer>
			<div class="wrapper">
				<p class="about"><?php echo _SITE_DESC; ?></p>
				<p class="info"><span>designobjekt.se is a project by </span><a target="_blank" href="https://www.aaff.se">AAFF</a><span> & </span><a target="_blank" href="http://weare1910.com">1910</a></p>
			</div>
				<p class="social"><a target="_blank" href="https://www.instagram.com/designobjekt"><?php svg_instagram(); ?></a><a target="_blank" href="https://github.com/aaff-se/designobjekt.se-website"><?php svg_github(); ?></a></p>
		</footer>
		
		<!--[if lt IE 9]>
			<script type="text/javascript" src="<?php echo _TEMPLATE_DIR_URI; ?>/_static/js/production.jq-compat.min.js" async></script>
		<![endif]-->
		<!--[if gte IE 9]>
			<script type="text/javascript" src="<?php echo _TEMPLATE_DIR_URI; ?>/_static/js/production.jq-evergreen.min.js" async></script>
		<![endif]-->
		<![if !IE]>
			<script type="text/javascript" src="<?php echo _TEMPLATE_DIR_URI; ?>/_static/js/production.jq-evergreen.min.js" async></script>
		<![endif]>
		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
			ga('create', 'UA-88292482-1', 'auto');
			ga('send', 'pageview');
		</script>
		
		<div class="clear"></div>
	</body>
	
</html>