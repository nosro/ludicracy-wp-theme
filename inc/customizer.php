<?php
/**
 * Orson Theme Customizer
 *
 * @package Orson
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function orson_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'        => '.site-title a',
			'render_callback' => 'orson_customize_partial_blogname',
		) );
	}
}
add_action( 'customize_register', 'orson_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function orson_customize_partial_blogname() {
	bloginfo( 'name' );
}
