<?php

/**
 * Sets up global theme constants.
 *
 * @package   Orson
 * @version   1.0
 */

/* DEFINE THEME DIRECTORY LOCATION CONSTANTS */
define( 'PARENT_DIR', get_template_directory() );

/* DEFINE THEME URL LOCATION CONSTANTS */
define( 'PARENT_URL', get_template_directory_uri() );

/* DEFINE THEME INFO CONSTANTS */
$theme          = wp_get_theme();
$theme_title    = $theme->name;
$theme_version  = $theme->version;

define( 'ORSON_THEME_SLUG', get_template() );
define( 'ORSON_THEME_NAME', $theme_title );
define( 'ORSON_THEME_VER', $theme_version );

/*
	DEFINE GENERAL CONSTANTS.
*/
define( 'ORSON_LIB_DIR', PARENT_DIR . '/inc' );
define( 'ORSON_JS_DIR', PARENT_DIR . '/assets/js' );
define( 'ORSON_CSS_DIR', PARENT_DIR . '/assets/css' );
define( 'ORSON_IMAGES_DIR', PARENT_DIR . '/assets/images' );
define( 'ORSON_IMAGES_URL', PARENT_URL . '/assets/images' );
define( 'ORSON_FUNCTIONS_DIR', ORSON_LIB_DIR . '/functions' );
define( 'ORSON_CONTENT_DIR', PARENT_DIR . '/content' );
define( 'ORSON_LANGUAGES_DIR', PARENT_DIR . '/languages' );
