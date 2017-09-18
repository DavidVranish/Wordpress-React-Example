<?php
/**
* Plugin Name: Latest Posts
* Plugin URI: http://vranish.io/
* Description: Gets the latest posts and allows a user to change the title and image
* Version: 1.0
* Author: David Vranish
* Author URI: http://vranish.io/
**/


/**
 * Adds a menu item to the WordPress Admin Menu
 */
add_action('admin_menu', function() {
	add_posts_page('Latest Posts', 
		'Latest Posts', 
		'edit_posts', 
		'latest-posts', 
		function() {
			echo '<div id="david-app"></div>';
		}
	);
});

/**
 * Adds admin
 */
add_action('admin_enqueue_scripts', function() {
	wp_enqueue_style('dv-test-code-css', '/wp-content/plugins/dv-test-code/client/dist/app.css');
});

add_action('admin_print_footer_scripts', function() {
	echo '<script src="/wp-content/plugins/dv-test-code/client/dist/app.js" type="text/javascript"></script>';
});