/*
 * jquery.jwatersurface.jp 0.5 jQuery plugin
 *
 * Copyright (c) 2012 Yuuki miyoshi
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author Yuuki miyoshi
 * @version 0.5
 * @url http://github.com/yuukimiyo/jWaterSurface
 * @github https://github.com/yuukimiyo/jWaterSurface
 *
 */

(function(jQuery) {
	// private
	function testFunction() {
		jQuery('#canvaswater').text("test").css({"background-color":"#a99","color":"#fff"});
	};

	jQuery.fn.jwatersurface = function(options) {
		var options = jQuery.extend({
			bgColor : "#a77",
			wrapper : "wrapper"
		}, options);

		return this.each(function() {
			testFunction();
		});
	};
})(jQuery);
