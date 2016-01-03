"use strict";

module.exports = function(ecs, data) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var facing = data.entities.get(entity, "facing");
		var animation = data.entities.get(entity, "animation");
		var timers = data.entities.get(entity, "timers");

		if(timers.deposit.running){
			if(facing === "down"){
				animation.name = "player-deposit-down";
			}
			if(facing === "up"){
				animation.name = "player-deposit-up";
			}
			if(facing === "right"){
				animation.name = "player-deposit-right";
			}
			if(facing === "left"){
				animation.name = "player-deposit-left";
			}
			return;
		}

		if(facing === "down"){
			if(timers.action.running){
				animation.name = "player-action-down";
			}else if(data.input.button("down")){
				animation.name = "player-down";
				animation.speed = 1;
			}else{
				animation.name = "player-idle-down";
				animation.speed = 1;
			}
		}
		if(facing === "up"){
			if(timers.action.running){
				animation.name = "player-action-up";
			}else if(data.input.button("up")){
				animation.name = "player-up";
				animation.speed = 1;
			}else{
				animation.name = "player-idle-down";
				animation.speed = 1;
			}
		}
		if(facing === "right"){
			if(timers.action.running){
				animation.name = "player-action-right";
			}else if(data.input.button("right")){
				animation.name = "player-right";
				animation.speed = 1;
			}else{
				animation.name = "player-idle-down";
				animation.speed = 1;
			}
		}
		if(facing === "left"){
			if(timers.action.running){
				animation.name = "player-action-left";
			}else if(data.input.button("left")){
				animation.name = "player-left";
				animation.speed = 1;
			}else{
				animation.name = "player-idle-down";
				animation.speed = 1;
			}
		}
	}, "player");
};
