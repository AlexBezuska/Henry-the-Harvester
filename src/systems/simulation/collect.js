"use strict";

var random = require("../../random");

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function collect(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerCollisions = data.entities.get(player, "collisions");

		var inventory = data.entities.get(player, "inventory");

		for (var i = 0; i < playerCollisions.length; i++) {
			var other = playerCollisions[i];
			if (data.entities.get(other, "pod") && inventory.used < inventory.total) {
				var otherNoises = data.entities.get(other, "noises");
				data.sounds.play(random.from(otherNoises));
				data.entities.destroy(other);

				inventory.used += 1;

			}
		}
	}, "player");
};
