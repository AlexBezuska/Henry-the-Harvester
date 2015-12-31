"use strict";

function getCenter(entity, data){
	var entityPosition = data.entities.get(entity, "position");
	var entitySize = data.entities.get(entity, "size");
	return {
		"x": entityPosition.x + (Math.floor(entitySize.width/2)),
		"y": entityPosition.y + (Math.floor(entitySize.height/2))
	};
}

function blastRadius(point, angle, distance){
	var x = point.x + (distance * Math.cos(angle));
	var y = point.y + (distance * Math.sin(angle));
	return {
		"x": x,
		"y": y
	};
}

function floorPoint(point){
	return {
		"x": Math.floor(point.x),
		"y": Math.floor(point.y)
	};
}
module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function harvest(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerCollisions = data.entities.get(player, "collisions");
		var score = data.entities.get(player, "score");

		for (var i = 0; i < playerCollisions.length; i++) {
			var other = playerCollisions[i];
			if (data.input.button("action")) {
				var otherCenter = getCenter(other, data);
				console.log(otherCenter);
				data.entities.destroy(other);

				data.entities.set(player, "score", score += 1);
				for(var j = 0; j < 5; j++){
					var newPod = data.instantiatePrefab("pod");
					var newPosition = floorPoint(blastRadius(otherCenter,((2*Math.PI)/ 5)*j, 100));
					data.entities.set(newPod, "position", newPosition);
				}

			}
		}
	}, "player");
};
