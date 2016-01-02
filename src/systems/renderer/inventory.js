"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function collect(player, context) { // eslint-disable-line no-unused-vars
		var inventory = data.entities.get(player, "inventory");
		var slot = data.images.get("slot");
		var podIcon = data.images.get("pod");

		var inventoryWidth = inventory.total * slot.width;
		var inventoryX = (data.canvas.width - inventoryWidth) / 2;

		for (var i = 0; i < inventory.total; i++) {
			var position = {
				"x": inventoryX + (slot.width * i),
				"y": (data.canvas.height - slot.height) - 20
			};
			context.drawImage(slot, position.x, position.y);
		}
		for (var i = 0; i < inventory.used; i++) {
			var position = {
				"x": ((slot.width/2) - (podIcon.width/2) + inventoryX ) + (slot.width * i),
				"y": (data.canvas.height - slot.height) - (20 - podIcon.height/2)
			};
			context.drawImage(podIcon, position.x, position.y);
		}
	}, "player");
};
