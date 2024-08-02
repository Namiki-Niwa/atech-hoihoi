<?php
function theme_enqueue_assets()
{
  // スタイルシートの読み込み
  wp_enqueue_style('destyle', get_template_directory_uri() . '/css/destyle.css');
  wp_enqueue_style('style', get_template_directory_uri() . '/css/style.css');

  // デフォルトのjQueryの読み込み
  wp_enqueue_script('jquery');

  // カスタムスクリプトの読み込み
  wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/index.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'theme_enqueue_assets');
