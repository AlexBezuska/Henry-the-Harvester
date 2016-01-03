"use strict";

module.exports = function(entity, data) { // eslint-disable-line no-unused-vars
	var timers = data.entities.get(entity, "timers");
	timers.goingDown.running = true;
};
