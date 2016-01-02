"use strict";
var random = require("./random");

module.exports = function (data, camera, ferocity){
	var cameraPosition = data.entities.get(camera, "position");
	var randomWidth = random.inRange(cameraPosition.x - ferocity, cameraPosition.x + ferocity);

	data.entities.set(camera, "position", {
		"x": random.inRange(cameraPosition.x - ferocity, cameraPosition.x + ferocity),
		"y": random.inRange(cameraPosition.y - ferocity, cameraPosition.y+ ferocity)
	});
};
