"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function harvest(player, context) { // eslint-disable-line no-unused-vars
		var score = data.entities.get(player, "score");
		var holding = data.entities.get(player, "holding");
		var total = data.entities.get(2, "totalPods");

		var scorebarBg = 11;
		var scorebarBgPosition = data.entities.get(scorebarBg, "position");
		var scorebarBgSize = data.entities.get(scorebarBg, "size");
		var scorebarScore = 12;
		var scorebarScorePosition = data.entities.get(scorebarScore, "position");
		var scorebarScoreSize = data.entities.get(scorebarScore, "size");


		scorebarBgPosition.x = (data.canvas.width / 2) - scorebarBgSize.width/2;
		drawRectangle(data, context, scorebarBg);

		scorebarScorePosition.x = scorebarBgPosition.x;
		scorebarScoreSize.width =  scorebarBgSize.width * (score / total);
		drawRectangle(data, context, scorebarScore);

	} ,    "player");
};

function drawRectangle(data, context, entity){
	var position = data.entities.get(entity, "position");
	var size = data.entities.get(entity, "size");
	context.fillStyle = data.entities.get(entity, "color");
	context.fillRect(position.x, position.y, size.width, size.height);
}
