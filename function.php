<!-- /* 独自のjQueryを読み込む */ -->
add_action( 'wp_enqueue_scripts', function(){

<!-- // デフォルトのjQueryの読み込みを無効化 -->
wp_deregister_script( 'jquery' );

<!-- // 好きなjQueryを読み込み -->
wp_enqueue_script( 'my_jquery', get_template_directory_uri() . '/js/index.js', );

} );