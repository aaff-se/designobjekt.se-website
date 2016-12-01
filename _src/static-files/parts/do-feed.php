<?php
	
$offset = (array_key_exists('offset', $_GET) ? $_GET['offset'] : 0 );

$right = (array_key_exists('right', $_GET) ? $_GET['right'] : false );

$args = array(
	'posts_per_page' => 12,
	'offset' => $offset
);
	
$posts = get_posts($args);

$posts_html = '';

if($posts) foreach ($posts as $post):
	$post_thumbnail_id = get_post_thumbnail_id( $post->ID ); 
	$thumb = wp_get_attachment_image_src($post_thumbnail_id, 'full');
	$image_html = aa_get_image_html($post_thumbnail_id);
	
	$title = $post->post_title;
	
	$by = get_post_meta($post->ID,'by',true);
	$url = get_post_meta($post->ID,'url',true);
	
	$large = false;
	$centered = false;
	
	if($thumb[1] > $thumb[2] && get_post_meta($post->ID,'large',true))
		$large = true;

	if($thumb[1] == $thumb[2])
		$centered = true;
	
	if($centered) {
		$posts_html .= '<section>';
	} else if($right && !$centered) {
		$posts_html .= '<section class="right">';
	} else {
		$posts_html .= '<section class="left">';
	}
	
		if($large && $right) {
			$posts_html .= '<article class="right large">';
		} else if($right && !$centered) {
			$posts_html .= '<article class="right">';
		} else if($large) {
			$posts_html .= '<article class="large">';
		} else if($centered) {
			$posts_html .= '<article class="center">';
		} else {
			$posts_html .= '<article>';
		}
			if($url)
				$posts_html .= '<a target="_blank" href="'.$url.'">';
			
				if($centered && $right) {
					$posts_html .= '<div class="text left">';
				} else {
					$posts_html .= '<div class="text">';
				}	
				
					$posts_html .= '<h2>'.$title.'</h2>';
					$posts_html .= '<h3>'.$by.'</h3>';
					
				$posts_html .= '</div>';
				
				$posts_html .= $image_html;
				
				$posts_html .= '<div class="clear"></div>';
			
			if($url)	
				$posts_html .= '</a>';

		$posts_html .= '</article>';

	$posts_html .= '</section>';
	
	$right = !$right;
	
endforeach; 

echo $posts_html;
