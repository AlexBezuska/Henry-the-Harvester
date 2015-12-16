"use strict";

module.exports = function(ecs, data) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var velocity = data.entities.get(entity, "velocity");
		velocity.x = 0;
		velocity.y = 0;
		if (data.input.button("left")) {
			velocity.x = -0.5;
		}
		if (data.input.button("right")) {
			velocity.x = 0.5;
		}
		if (data.input.button("up")) {
			velocity.y = -0.5;
		}
		if (data.input.button("down")) {
			velocity.y = 0.5;
		}
	}, "player");
};
