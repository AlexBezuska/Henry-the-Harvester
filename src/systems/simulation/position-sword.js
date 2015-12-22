"use strict";

module.exports = function(ecs, data) {
	ecs.addEach(function(sword, elapsed) { // eslint-disable-line no-unused-vars
		var swordSize = data.entities.get(sword, "size");
		var swordMatch = data.entities.get(sword, "match");
		var playerFacing = data.entities.get(0, "facing");
		if(playerFacing === "down"){
			swordSize.width = 64;
			swordSize.height = 128;
			swordMatch.offsetX = 0;
			swordMatch.offsetY = 128;
		}
		if(playerFacing === "up"){
			swordSize.width = 64;
			swordSize.height = 128;
			swordMatch.offsetX = 64;
			swordMatch.offsetY = -64;
		}
		if(playerFacing === "right"){
			swordSize.width = 128;
			swordSize.height = 64;
			swordMatch.offsetX = 128;
			swordMatch.offsetY = 128;
		}
		if(playerFacing === "left"){
			swordSize.width = 128;
			swordSize.height = 64;
			swordMatch.offsetX = -128;
			swordMatch.offsetY = 128;
		}
	}, "sword");
};
