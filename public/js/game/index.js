
define(['modernizr', 'jquery', 'crafty'], function ( Modernizr, $, Crafty ) {

	var Game = {
	  // Initialize and start our game
	  start: function() {
	      // Start crafty and set a background color so that we can see it's working
	      Crafty.init();
	      Crafty.background('#EEE');

	      Crafty.e("2D, DOM, Color, Mouse, Text")
		    .color("red")
		    .attr({ w: 100, h: 100 })
		    .bind('Click', function() {console.log("over")})
		    .text("Spin");



 
	    }
	 };

	return Game;
});