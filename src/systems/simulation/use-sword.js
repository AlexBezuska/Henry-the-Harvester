"use strict";

module.exports = function(ecs, data) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var swordSize = data.entities.get(1, "size");
		if (!data.input.button("action")) {
			swordSize.width = 0;
			swordSize.height = 0;
		}
	}, "player");
};
