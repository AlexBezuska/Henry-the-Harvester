"use strict";

module.exports = function(ecs, data) {
	ecs.addEach(function(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerFacing = data.entities.get(player, "facing");
		var playerAnimation = data.entities.get(player, "animation");

		if( data.input.button("up")
		|| data.input.button("right")
		|| data.input.button("down")
		|| data.input.button("left")
		|| data.input.button("action") ){
			playerAnimation.speed = 1;
		}else{
			playerAnimation.speed = 0;
		}

		if(playerFacing === "down"){
			if(data.input.button("action")){
				playerAnimation.name = "player-slap-down";
			}else{
				playerAnimation.name = "player-down";
			}
		}
		if(playerFacing === "up"){
			if(data.input.button("action")){
				playerAnimation.name = "player-slap-down";
			}else{
				playerAnimation.name = "player-up";
			}
		}
		if(playerFacing === "right"){
			if(data.input.button("action")){
				playerAnimation.name = "player-slap-down";
			}else{
				playerAnimation.name = "player-right";
			}
		}
		if(playerFacing === "left"){
			if(data.input.button("action")){
				playerAnimation.name = "player-slap-down";
			}else{
				playerAnimation.name = "player-left";
			}
		}
	}, "player");
};
