"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function depositPods(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerCollisions = data.entities.get(player, "collisions");
		var inventory = data.entities.get(player, "inventory");
		var score = data.entities.get(player, "score");

		for (var i = 0; i < playerCollisions.length; i++) {
			var other = playerCollisions[i];
			if (data.entities.get(other, "bin") && data.input.button("action")) {
				//confirm("Deposit your pods?");
				var timers = data.entities.get(player, "timers");
				timers.deposit.running = true;
			}
		}
	}, "player");
};
