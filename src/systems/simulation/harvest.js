"use strict";

var random = require("../../random");

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

var twoPI = Math.PI * 2;

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function harvest(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerCollisions = data.entities.get(player, "collisions");

		for (var i = 0; i < playerCollisions.length; i++) {
			var other = playerCollisions[i];
			if (data.entities.get(other, "flower") && data.input.button("action")) {
				var flowerCenter = getCenter(other, data);
				var flowerPods = data.entities.get(other, "pods");
				var swingNoises = data.entities.get(player, "swing-noises");
				data.sounds.play(random.from(swingNoises));
				data.entities.destroy(other);
				for(var j = 0; j < flowerPods; j++){
					var newPod = data.instantiatePrefab("pod");
					var newPosition = floorPoint(blastRadius(flowerCenter,( twoPI / flowerPods )*j, 100));
					data.entities.set(newPod, "rotation", { "angle": random.inRange( 0, twoPI ) } );
					data.entities.set(newPod, "position", newPosition);
				}
			}
		}
	}, "player");
};
