"use strict";

module.exports = function(ecs, data) {
	ecs.addEach(function(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerFacing = data.entities.get(player, "facing");
		var playerAnimation = data.entities.get(player, "animation");

		// if( data.input.button("up")
		// || data.input.button("right")
		// || data.input.button("down")
		// || data.input.button("left")
		// || data.input.button("action") ){
		// 	playerAnimation.speed = 1;
		// }else{
		// 	playerAnimation.speed = 0;
		// }

		if(playerFacing === "down"){
			if(data.input.button("action")){
				playerAnimation.name = "player-swing-down";
			}else if(data.input.button("down")){
				playerAnimation.name = "player-down";
				playerAnimation.speed = 1;
			}else{
				playerAnimation.name = "player-idle-down";
				playerAnimation.speed = 1;
			}
		}
		if(playerFacing === "up"){
			if(data.input.button("action")){
				playerAnimation.name = "player-swing-down";
			}else if(data.input.button("up")){
				playerAnimation.name = "player-up";
				playerAnimation.speed = 1;
			}else{
				playerAnimation.name = "player-idle-down";
				playerAnimation.speed = 1;
			}
		}
		if(playerFacing === "right"){
			if(data.input.button("action")){
				playerAnimation.name = "player-swing-down";
			}else if(data.input.button("right")){
				playerAnimation.name = "player-right";
				playerAnimation.speed = 1;
			}else{
				playerAnimation.name = "player-idle-down";
				playerAnimation.speed = 1;
			}
		}
		if(playerFacing === "left"){
			if(data.input.button("action")){
				playerAnimation.name = "player-swing-down";
			}else if(data.input.button("left")){
				playerAnimation.name = "player-left";
				playerAnimation.speed = 1;
			}else{
				playerAnimation.name = "player-idle-down";
				playerAnimation.speed = 1;
			}
		}
	}, "player");
};
