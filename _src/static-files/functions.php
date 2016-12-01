<?php 

//error_reporting(E_ALL);
//ini_set('display_errors', 1);

define('_TEMPLATE_DIR_URI', get_template_directory_uri() );
define('_SITE_NAME', get_bloginfo('name') );
define('_SITE_DESC', get_bloginfo('description') );
define('_SITE_URL', get_home_url() . '/' );

include_once('_inc/_init.php');