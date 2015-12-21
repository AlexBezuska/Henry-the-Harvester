"use strict";

module.exports = function(ecs, data) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var velocity = data.entities.get(entity, "velocity");
		velocity.x = 0;
		velocity.y = 0;
		if (data.input.button("left")) {
			velocity.x = -0.5;
			data.entities.set(entity, "facing", "left");
		}
		if (data.input.button("right")) {
			velocity.x = 0.5;
			data.entities.set(entity, "facing", "right");
		}
		if (data.input.button("up")) {
			velocity.y = -0.5;
			data.entities.set(entity, "facing", "up");
		}
		if (data.input.button("down")) {
			velocity.y = 0.5;
			data.entities.set(entity, "facing", "down");
		}
	}, "player");
};
