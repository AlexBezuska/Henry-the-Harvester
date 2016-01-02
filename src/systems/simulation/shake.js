"use strict";

var screenShake = require("../../screen-shake");

var camera = 10;
module.exports = function(ecs,data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function shake(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerTimers = data.entities.get(player, "timers");
		if (playerTimers.shake.running) {
			screenShake(data, camera, 5);
		}
	},"player");
};
