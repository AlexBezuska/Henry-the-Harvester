"use strict";
var random = require("../../random");
var walkSounds = [
	"walking-1",
	"walking-2",
	"walking-3",
	"walking-4",
	"walking-5",
	"walking-6",
	"walking-7"
];

module.exports = function(ecs, data) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var timers = data.entities.get(entity, "timers");

		if(timers.walking.running){
			return;
		}

		if ( data.input.button("left")
		|| data.input.button("right")
		|| data.input.button("up")
		|| data.input.button("down")) {
			data.sounds.play(random.from(walkSounds));
			timers.walking.running = true;
		}
	}, "player");
};
