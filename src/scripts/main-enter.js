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

function spawnRandomly(entities, prefab, position, size) {
	var entity = makePrefab(prefab, entities);
	var entitySize = entities.get(entity, "size");
	var tilesWide = Math.floor(size.width / entitySize.width) + 1;
	var tilesTall = Math.floor(size.height / entitySize.height) + 1;
	var newX = randomRange(0, tilesWide);
	var newY = randomRange(0, tilesTall);
	entities.set(entity, "position", {"x": position.x + (newX * entitySize.width),  "y": position.y + (newY * entitySize.height) });
}


module.exports = function(data) { // eslint-disable-line no-unused-vars

	for(var i =0; i < 20; i++){
		spawnRandomly(data.entities, "grass", {"x":0, "y":0}, data.canvas);
	}
};
