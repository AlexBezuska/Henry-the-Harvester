"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function depositPods(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerCollisions = data.entities.get(player, "collisions");
		var holding = data.entities.get(player, "holding");
		var score = data.entities.get(player, "score");

		for (var i = 0; i < playerCollisions.length; i++) {
			var other = playerCollisions[i];
			if (data.entities.get(other, "bin") && data.input.button("action")) {
				//confirm("Deposit your pods?");
				data.entities.set(player, "score", score + holding);
				data.entities.set(player, "holding", 0);
			}
		}
	}, "player");
};
