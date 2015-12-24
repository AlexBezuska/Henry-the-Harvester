"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function harvest(player, context) { // eslint-disable-line no-unused-vars
		var score = data.entities.get(player, "score");
		context.fillStyle = "white";
		context.font = "30px helvetica";
		context.fillText("Harvested: " + score, data.canvas.width - 200, 40);
	}, "player");
};
