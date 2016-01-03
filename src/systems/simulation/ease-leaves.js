var easingShim = require("../../easing-shim");

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function easePods(entity, elapsed) { // eslint-disable-line no-unused-vars
		data.entities.set(entity, "position", {
			"x": easingShim(data, entity, "positionX", "linear", elapsed),
			"y": easingShim(data, entity, "positionY", "linear", elapsed)
		});
	}, "leaf");
};
