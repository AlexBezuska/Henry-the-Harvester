"use strict";

var random = require("../../random");

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function harvest(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerCollisions = data.entities.get(player, "collisions");
		var timers = data.entities.get(player, "timers");

		for (var i = 0; i < playerCollisions.length; i++) {
			var other = playerCollisions[i];

			if (data.entities.get(other, "flower") && timers.action.running) {
				var flower = other;

				makePods(data, flower);

				data.entities.destroy(flower);
			}
		}
	}, "player");
};

function makePods (data, flower) {
	var flowerCenter = getCenter(flower, data);
	var podCount = data.entities.get(flower, "pods");
	for(var j = 0; j < podCount; j++){
		makePod(data, flowerCenter, podCount);
	}
}

function makePod (data, origin, podCount) {
	for(var j = 0; j < podCount; j++){
		var newPod = data.instantiatePrefab("pod");
		var newPosition = floorPoint(blastRadius(origin,( (Math.PI * 2) / podCount ) * j, 100));
		data.entities.set(newPod, "rotation", { "angle": random.inRange( 0, (Math.PI * 2) ) } );
		data.entities.get(newPod, "easingProps").positionX.start = origin.x;
		data.entities.get(newPod, "easingProps").positionY.start = origin.y;
		data.entities.get(newPod, "easingProps").positionX.end = newPosition.x;
		data.entities.get(newPod, "easingProps").positionY.end = newPosition.y;
	}
}

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
