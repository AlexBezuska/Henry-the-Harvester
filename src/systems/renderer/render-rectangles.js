"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	data.entities.registerSearch("renderRectangles", ["position", "size", "color"]);
	ecs.addEach(function(entity, context) { // eslint-disable-line no-unused-vars
		var position = data.entities.get(entity, "position");
		var size = data.entities.get(entity, "size");
		var color = data.entities.get(entity, "color");
		context.fillStyle = color;
		context.fillRect(position.x, position.y, size.width, size.height);
	}, "renderRectangles");
};
