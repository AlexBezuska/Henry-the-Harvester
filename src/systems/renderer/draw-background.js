"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.add(function(entity, context) { // eslint-disable-line no-unused-vars
		context.fillStyle = "#489848";
		context.fillRect(0, 0, data.canvas.width, data.canvas.height);
	});
};
