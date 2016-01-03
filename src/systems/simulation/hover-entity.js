"use strict";


module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function easePods(entity, elapsed) { // eslint-disable-line no-unused-vars
		var timers = data.entities.get(entity, "timers");
		var position = data.entities.get(entity, "position");

		if (timers.goingUp.running) {
			position.y += 0.006 * elapsed;
		}
		if (timers.goingDown.running) {
			position.y -= 0.006 * elapsed;
		}

		//shadow
		var binShadow = 3;
		var image = data.entities.get(binShadow, "image");
		var newWidth;
		if (timers.goingUp.running) {
			newWidth = image.destinationWidth += 0.004 * elapsed;
			image.destinationWidth = newWidth;
			image.destinationHeight = image.destinationHeight * (newWidth / image.destinationWidth);
		}
		if (timers.goingDown.running) {
			newWidth = image.destinationWidth -= 0.004 * elapsed;
			image.destinationWidth = newWidth;
			image.destinationHeight = image.destinationHeight * (newWidth / image.destinationWidth);
		}


	}, "hovering");
};
