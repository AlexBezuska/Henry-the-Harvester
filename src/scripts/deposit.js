"use strict";
var random = require("../random");

module.exports = function(entity, data) { // eslint-disable-line no-unused-vars
	var timers = data.entities.get(entity, "timers");
	var inventory = data.entities.get(entity, "inventory");
	var score = data.entities.get(entity, "score");
	inventory.used--;
	data.entities.set(entity, "score", score + 1);
	var popSounds = [
		"pop1",
		"pop2",
		"pop3",
		"pop4",
		"pop5",
		"pop6"
	];
	data.sounds.play(random.from(popSounds));
	timers.shake.running = true;
	if(inventory.used > 0){
		timers.deposit.running = true;
	}
};
