"use strict";

var screenShake = require("../../screen-shake");

module.exports = function(ecs,data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function shake(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerTimers = data.entities.get(player, "timers");
		// console.log("hello", playerTimers.shake.running);
		if (playerTimers.shake.running) {
			// console.log("im running");
			screenShake(data, 10, 5);
		}
	},"player");
};
