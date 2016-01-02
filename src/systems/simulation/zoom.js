"use strict";

// var scalePercent = 100;
var scaleFactor = 10;

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function zoom(camera, elapsed) { // eslint-disable-line no-unused-vars
		var cameraSize = data.entities.get(camera, "size");
		var originalSize =data.entities.get(camera, "originalSize");
		if(!data.entities.get(camera, "originalSize")){
			data.entities.set(camera, "originalSize", cameraSize);
		}

		var newWidth = cameraSize.width;
		if (data.input.button("zoom out")) {
			newWidth += scaleFactor;
		}
		if (data.input.button("zoom in")) {
			newWidth -= scaleFactor;
		}
		if (data.input.button("zoom reset")) {
			newWidth = originalSize.width;
		}
		if (newWidth > 0){
			data.entities.set(camera, "size", {
				"width": newWidth,
				"height": cameraSize.height * (newWidth / cameraSize.width)
			});
		}


	}, "camera");
};
