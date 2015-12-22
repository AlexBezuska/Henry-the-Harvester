"use strict";

var prefabs = require("../data/prefabs");

function randomRange(min, max) {
	return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function clone(obj) {
	return JSON.parse(JSON.stringify(obj)); // gross
}

function makePrefab(name, entities) {
	var prefab = prefabs[name];
	var id = entities.create();
	Object.keys(prefab).forEach(function(key) {
		if (key === "id") {
			return;
		}
		entities.set(id, key, clone(prefab[key]));
	});
	return id;
}

function spawnRandomly(entities, quantity, prefab, position, size) {
	for(var i =0; i < quantity; i++){
		var entity = makePrefab(prefab, entities);
		var newX = randomRange(position.x, size.width + position.x);
		var newY = randomRange(position.y, size.height + position.y);
		entities.set(entity, "position", {"x": newX,  "y": newY });
	}
}

module.exports = function(data) { // eslint-disable-line no-unused-vars
	spawnRandomly(data.entities, 20, "grass", {"x":0, "y":0}, data.canvas);

};
