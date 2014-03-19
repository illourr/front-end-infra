require.config({
  baseUrl: "./js",
  paths: {
    'jquery': 'vendor/jquery/dist/jquery',
    'underscore': 'vendor/underscore-amd/underscore-min',
    'crafty': 'vendor/crafty/dist/crafty',
    'modernizr': 'vendor/modernizr/modernizr',
    // 'backbone': 'vendor/backbone-amd/backbone',
  }
});

require(['./game/index'], function ( Game ) {
	$(function() {
	  	Game.start();
	});
});