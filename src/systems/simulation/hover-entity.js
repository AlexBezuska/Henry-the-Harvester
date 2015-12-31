"use strict";
var easing = require("easing-js");


var harvesterLowPoint = 200;
var harvesterHighPoint = 190;
var time = 0;
var duration = 2000;
var goingDown = true;

module.exports = function(ecs, data) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var position = data.entities.get(entity, "position");
		var harvesterY = 190;

		if(time < duration){
			time += elapsed;
			if(goingDown){
				harvesterY = easing.linear(time, harvesterLowPoint, -10, duration);
			}else{
				harvesterY = easing.linear(time, harvesterHighPoint, 10, duration);
			}
		}
		if(harvesterY <= harvesterHighPoint){
			goingDown = false;
		}
		if(harvesterY >= harvesterLowPoint){
			goingDown = true;
		}

		if(time >= duration){
			time = 0;
		}

		position.y = harvesterY;
	}, "hovering");
};
