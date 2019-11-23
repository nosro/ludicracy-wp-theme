/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview show the changes on the fly.
 */

( function( $ ) {
  if (wp.customize) {
    wp.customize( 'blogname', function( value ) {
      value.bind( function( to ) {
        $( '.site-title a' ).text( to );
      } );
    } );
  }
} )( jQuery );
