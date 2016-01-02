"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function collect(player, context) { // eslint-disable-line no-unused-vars
		var inventory = data.entities.get(player, "inventory");
		var podIcon = data.images.get("pod");

		for (var i = 0; i < inventory.used; i++) {
			var position = {
				"x": 300 + (podIcon.width * i),
				"y": (data.canvas.height - podIcon.height) - 20
			};
			context.drawImage(podIcon, position.x, position.y);
		}
	}, "player");
};
