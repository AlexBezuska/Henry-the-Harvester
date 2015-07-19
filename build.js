var browserify = require("browserify");
var fs = require("fs");

var b = browserify();
b.add("./game.js");

var scripts = require("./scripts");
scripts.forEach(function(script) {
	b.require(script);
});

var systems = require("./systems");
systems.simulation.forEach(function(system) {
	if (system.name.indexOf("splatjs:") === 0) {
		return;
	}
	b.require(system.name);
});
systems.renderer.forEach(function(system) {
	if (system.name.indexOf("splatjs:") === 0) {
		return;
	}
	b.require(system.name);
});

var out = fs.createWriteStream("./index.js");
b.bundle().pipe(out);
