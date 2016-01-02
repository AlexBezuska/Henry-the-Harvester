"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function collect(player, context) { // eslint-disable-line no-unused-vars

		//draw hud
		var hudImage = data.images.get("hud");
		context.drawImage(hudImage, 0, data.canvas.height - hudImage.height);


		var inventory = data.entities.get(player, "inventory");
		var slot = data.images.get("slot");
		var podIcon = data.images.get("pod");

		var inventoryY = (data.canvas.height - slot.height) - 10;
		var inventoryX = 80;

		for (var i = 0; i < inventory.total; i++) {
			var position = {
				"x": inventoryX + (slot.width * i),
				"y": inventoryY
			};
			context.drawImage(slot, position.x, position.y);
		}
		for (var j = 0; j < inventory.used; j++) {
			var pos = {
				"x": ((slot.width/2) - (podIcon.width/2) + inventoryX ) + (slot.width * j),
				"y": (data.canvas.height - slot.height) - (20 - podIcon.height/2)
			};
			context.drawImage(podIcon, pos.x, pos.y);
		}
	}, "player");
};
