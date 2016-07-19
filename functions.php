<?php

function enqueue_bundle() {
  wp_enqueue_script( 'app', get_stylesheet_directory_uri() . '/dist/js/app.js' );
}

add_action( 'wp_enqueue_scripts', 'enqueue_bundle' );
