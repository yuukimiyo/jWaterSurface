/*
 * jquery.jwatersurface.jp 0.5 jQuery plugin
 * branch use argument classnames.
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

	var options;

	var canvasId;
	var canvasSelector;
	var wrapperId;
	var wrapperSelector;

	var cm;
	var am;

	/**
	 * jWaterSurfaceのメイン関数
	 */
	jQuery.fn.jwatersurface = function(options) {
		var options = jQuery.extend({
			bgColor : "#000",
			wrapper : "wrapper",
			ringColor : "#fff"
		}, options);

		return this.each(function() {
			cm = new CanvasManager();
			am = new AnimationManager();

			canvasId = $(this).attr("id");
			canvasSelector = "#" + canvasId;
			wrapperId = options.wrapper;
			wrapperSelector = "#" + wrapperId;

			if (!document.getElementById(canvasId)) { return false; }
			if (!document.getElementById(wrapperId)) { return false; }
			
			var canvas = document.getElementById(canvasId);
			if (!canvas.getContext) { return false; }
			
			cm.setContext(canvas.getContext('2d'));
			cm.setOffsetLeft($(canvasSelector).offset()["left"]);
			cm.setOffsetTop($(canvasSelector).offset()["top"]);
			cm.setWidth($(wrapperSelector).width());
			cm.setHeight($(wrapperSelector).height());

			cm.drawBackground();
			
			$(window).resize(function() {
				cm.setWidth($(wrapperSelector).width());
				cm.setHeight($(wrapperSelector).height());
				cm.drawBackground();
			});
			
			$(canvasSelector).mousedown(function(e){
				cm.setMouseX(Math.floor(e.pageX - cm.getOffsetLeft()));
				cm.setMouseY(Math.floor(e.pageY - cm.getOffsetTop()));
		
				am.setCanvasManager(cm);
				am.start();
			});
		
		});

		/**
		 * 
		 */
		function AnimationManager() {
			var _cm;
			var _r;

			this.setCanvasManager = function(c) {
				_cm = c;
			}
		
			this.start = function() {
				_r = 10;
				this.motionLoop(_r);
			}
			
			this.motionLoop = function(_r) {
				_cm.clearCanvas();
				_cm.drawBackground();
				_cm.drawPointCircle(_cm.getMouseX(), _cm.getMouseY(), _r);
		
				if (_r < 1000) {
					_r = _r + 10;
					setTimeout(function(){am.motionLoop(_r);},50);
				} else {
					// alert("over");
				}
			}
		};

		function CanvasManager(){
			var ctx;
			var mouseX = 0;
			var mouseY = 0;
			
			var offsetLeft = 0;
			var offsetTop = 0;
			var canvasWidth = 0;
			var canvasHeight = 0;
			
			var startRadius = 40;
			var radius = startRadius;
			
			/**
			 * context 's setter
			 */
			this.setContext = function(c) {
				ctx = c;
			}
			
			/**
			 * offsetLeft 's setter & getter
			 */
			this.setOffsetLeft = function(l) {
				offsetLeft = l;
			}
			this.getOffsetLeft = function() {
				return offsetLeft;
			}
			
			/**
			 * offsetTop 's setter & getter
			 */
			this.setOffsetTop = function(t) {
				offsetTop = t;
			}
			this.getOffsetTop = function() {
				return offsetTop;
			}
			
			/**
			 * mouseX 's setter & getter
			 */
			this.setMouseX = function(x) {
				mouseX = x;
			}
			this.getMouseX = function() {
				return mouseX;
			}
			
			/**
			 * mouseY 's setter & getter
			 */
			this.setMouseY = function(y) {
				mouseY = y;
			}
			this.getMouseY = function() {
				return mouseY;
			}
			
			/**
			 * width 's setter
			 */
			this.setWidth = function(w) {
				canvasWidth = w;
				$(canvasSelector).attr({width:canvasWidth});
			}
			
			/**
			 * height 's setter 
			 */
			this.setHeight = function(h) {
				canvasHeight = h;
				$(canvasSelector).attr({height:canvasHeight});
			}
			
			/**
			 * fill background 
			 */
			this.drawBackground = function() {
				ctx.fillStyle = options.bgColor;
				ctx.fillRect(offsetLeft, offsetTop, canvasWidth, canvasHeight);
				ctx.fill();
			}
			
			this.drawPointCircle = function(x,y,r) {
				var polygon = 200;
				
				ctx.beginPath();
				ctx.moveTo(x + r, y);
				for (i = 0; i <= polygon; i++) {
					t=3.14*2*i/polygon;
					ctx.lineTo(Math.cos(t)*r+x, Math.sin(t)*r+y);
				}
				ctx.strokeStyle = options.ringColor;
				ctx.stroke();
			}
			
			this.clearCanvas = function() {
				ctx.clearRect(offsetLeft, offsetTop, canvasWidth, canvasHeight);
				this.drawBackground();
			}
		};
	};
})(jQuery);
