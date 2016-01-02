"use strict";
var easing = require("easing-js");

module.exports = function (data, entity, property, easingType, elapsed){
	var easingProps = data.entities.get(entity, "easingProps");
	var newValue = easingProps[property].end;
	if (easingProps.time < easingProps.duration) {
		easingProps.time += elapsed;
		newValue = easing[easingType](easingProps.time, easingProps[property].start, easingProps[property].end- easingProps[property].start, easingProps.duration);
	}
	return newValue;
};
