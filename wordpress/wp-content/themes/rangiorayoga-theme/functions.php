<?php

function rangiora_yoga_scripts() {
    // Enqueue Styles
    wp_enqueue_style( 'rangiora-yoga-style', get_stylesheet_uri() );
    wp_enqueue_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' );
    wp_enqueue_style( 'aos-css', 'https://unpkg.com/aos@2.3.1/dist/aos.css' );

    // Enqueue Scripts
    wp_enqueue_script( 'aos-js', 'https://unpkg.com/aos@2.3.1/dist/aos.js', array(), null, true );
    wp_enqueue_script( 'main-js', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), null, true );
}
add_action( 'wp_enqueue_scripts', 'rangiora_yoga_scripts' );

function rangiora_yoga_setup() {
    // Register Navigation Menus
    register_nav_menus( array(
        'main-menu' => esc_html__( 'Main Menu', 'rangiorayoga' ),
    ) );
}
add_action( 'after_setup_theme', 'rangiora_yoga_setup' );
