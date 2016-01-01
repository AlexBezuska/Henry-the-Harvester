"use strict";

var prefabs = require("../data/prefabs");
var random = require("../random");

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

function spawnFlowers(entities, prefab, position, size) {
	var flower = makePrefab(prefab, entities);
	entities.set(flower, "pods", Math.floor(random.inRange(2,6)) );
	var entitySize = entities.get(flower, "size");
	var tilesWide = Math.floor(size.width  / entitySize.width);
	var tilesTall = Math.floor(size.height / entitySize.height);
	var newX = random.inRange(0, tilesWide);
	var newY = random.inRange(0, tilesTall);
	entities.set(flower, "position", {"x": position.x + (newX * entitySize.width),  "y": position.y + (newY * entitySize.height) });
}

var decorations = [
	"decoration1",
	"decoration2"
];

function spawnPrefabsInRect(entities, prefab, position, size) {
	var prefab = makePrefab(prefab, entities);
	var entitySize = entities.get(prefab, "size");
	var tilesWide = Math.floor(size.width  / entitySize.width);
	var tilesTall = Math.floor(size.height / entitySize.height);
	var newX = random.inRange(0, tilesWide);
	var newY = random.inRange(0, tilesTall);
	entities.set(prefab, "position", {"x": position.x + (newX * entitySize.width),  "y": position.y + (newY * entitySize.height) });
}

module.exports = function(data) { // eslint-disable-line no-unused-vars

	for(var i =0; i < 300; i++){
		spawnPrefabsInRect(data.entities, random.from(decorations), { "x": -2000, "y": -2000 }, { "width": 8000, "height": 8000 });
	}

	for(var j =0; j < 20; j++){
		spawnFlowers(data.entities, "flower", data.entities.get(2, "position"), data.entities.get(2, "size"));
	}

	var totalPods = data.entities.find("pods").reduce( function(total, currentId) {
		return total + data.entities.get(currentId, "pods");
	}, 0);

	data.entities.set(2, "totalPods", totalPods);
};
