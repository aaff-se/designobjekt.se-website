<?php 

add_theme_support( 'post-thumbnails' );

add_image_size( 's', 660, 9999, false ); // auto resized for mobile
add_image_size( 'm', 948, 9999, false );
add_image_size( 'l', 1272, 9999, false );
add_image_size( 'xl', 1920, 9999, false );
add_image_size( 'xxl', 2544, 9999, false );

add_image_size( 's@2x', 1272, 9999, false ); //auto resized for mobile
add_image_size( 'm@2x', 1896, 9999, false ); // retina half width
add_image_size( 'l@2x', 2544, 9999, false ); // retina blog full width
add_image_size( 'xl@2x', 3840, 9999, false ); // retina full width
add_image_size( 'xxl@2x', 3840, 9999, false ); // we don't use anything bigger than this still...
