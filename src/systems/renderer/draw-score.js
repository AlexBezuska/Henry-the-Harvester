"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function harvest(player, context) { // eslint-disable-line no-unused-vars
		var score = data.entities.get(player, "score");
		var total = data.entities.get(2, "totalPods");
		context.fillStyle = "white";
		context.font = "30px helvetica";
		context.fillText("Harvested: " + score + " / "+ total, data.canvas.width - 670, 40);
	} ,    "player");
};
