<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Orson_Theme
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
		<div class="site-info wrap">
			<?phpanslators: 1: Theme name, 2: Theme author. */
        printf( esc_html__( 'Theme by %1$s.', 'orson' ), '<a href="https://github.com/nosro/ludicracy-wp-theme">Orson</a>' );
			?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
