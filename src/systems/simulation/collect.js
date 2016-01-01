"use strict";

var random = require("../../random");

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function collect(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerCollisions = data.entities.get(player, "collisions");
		var score = data.entities.get(player, "score");

		for (var i = 0; i < playerCollisions.length; i++) {
			var other = playerCollisions[i];
			if (data.entities.get(other, "pod")) {
				var otherNoises = data.entities.get(other, "noises");
				data.sounds.play(random.from(otherNoises));
				data.entities.destroy(other);

				data.entities.set(player, "score", score += 1);

			}
		}
	}, "player");
};
