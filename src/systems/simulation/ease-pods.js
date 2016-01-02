var easingShim = require("../../easing-shim");

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function easePods(pod, elapsed) { // eslint-disable-line no-unused-vars
		data.entities.set(pod, "position", {
			"x": easingShim(data, pod, "positionX", "linear", elapsed),
			"y": easingShim(data, pod, "positionY", "linear", elapsed)
		});
	}, "pod");
};
