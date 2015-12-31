"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function collect(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerCollisions = data.entities.get(player, "collisions");
		var score = data.entities.get(player, "score");

		for (var i = 0; i < playerCollisions.length; i++) {
			var other = playerCollisions[i];
			console.log(other, data.entities.get(other, "type"));
			if (data.entities.get(other, "type") === "pod") {
				data.entities.destroy(other);
				data.entities.set(player, "score", score += 1);
			}
		}
	}, "player");
};
