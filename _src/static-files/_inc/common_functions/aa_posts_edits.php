<?php 
	
add_action("admin_init", "irhs_post_admin_init");
function irhs_post_admin_init(){
	
	add_post_type_support( 'post', 'thumbnail' );
	remove_post_type_support( 'post', 'editor' );
	
	add_meta_box("aa_post_info", "Info", "aa_post_info_function", "post", "normal", "low");
	
}
function aa_post_info_function($post=false){
	
	if(!$post) { echo 'no $post included'; return false; }
	
	wp_nonce_field( 'aa_post_info', 'aa_post_info_nonce' );
	
	$by = get_post_meta($post->ID, 'by', true);
	$url = get_post_meta($post->ID, 'url', true);
	$large = get_post_meta($post->ID, 'large', true);
	
	
	echo '<p><input type="text" class="widefat" name="by" placeholder="by" value="'.$by.'"></p>';
	echo '<p><input type="text" class="widefat" name="url" placeholder="url" value="'.$url.'">';
	echo '<p><input type="checkbox" name="large" placeholder="url" value="1"'.($large ? ' checked="checked"':'').'> Large image';

}

// Make sure everything is saved to the database
add_action('save_post', 'aa_post_save_details');

function aa_post_save_details($post_id ){

	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) 
		return;
	
	if ( !current_user_can( 'edit_post', $post_id ) )
		return;

	if ( wp_verify_nonce( $_POST['aa_post_info_nonce'], 'aa_post_info' ) ) {
		update_post_meta($post_id, "by", $_POST["by"]);
		update_post_meta($post_id, "url", $_POST["url"]);
		update_post_meta($post_id, "large", $_POST["large"]);
	}
}