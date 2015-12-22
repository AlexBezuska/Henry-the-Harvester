"use strict";

module.exports = function(ecs, data) {
	ecs.addEach(function(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerFacing = data.entities.get(player, "facing");
		var playerAnimation = data.entities.get(player, "animation");
		if(playerFacing === "down"){
			playerAnimation.name = "player-down";
		}
		if(playerFacing === "up"){
			playerAnimation.name = "player-up";
		}
		if(playerFacing === "right"){
			playerAnimation.name = "player-right";
		}
		if(playerFacing === "left"){
			playerAnimation.name = "player-left";
		}
	}, "player");
};
