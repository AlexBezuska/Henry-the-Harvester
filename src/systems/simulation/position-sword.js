"use strict";

module.exports = function(ecs, data) {
	ecs.addEach(function(sword, elapsed) { // eslint-disable-line no-unused-vars
		var swordSize = data.entities.get(sword, "size");
		var swordMatch = data.entities.get(sword, "match");
		var playerFacing = data.entities.get(0, "facing");
		if(playerFacing === "down"){
			swordSize.width = 50;
			swordSize.height = 100;
			swordMatch.offsetX = 0;
			swordMatch.offsetY = 100;
		}
		if(playerFacing === "up"){
			swordSize.width = 50;
			swordSize.height = 100;
			swordMatch.offsetX = 50;
			swordMatch.offsetY = -100;
		}
		if(playerFacing === "right"){
			swordSize.width = 100;
			swordSize.height = 50;
			swordMatch.offsetX = 100;
			swordMatch.offsetY = 50;
		}
		if(playerFacing === "left"){
			swordSize.width = 100;
			swordSize.height = 50;
			swordMatch.offsetX = -100;
			swordMatch.offsetY = 0;
		}
	}, "sword");
};
