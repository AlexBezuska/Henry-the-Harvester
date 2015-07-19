"use strict";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var Splat = require("splatjs");

var animations = require("./animations");
var entities = require("./entities");

var images = new Splat.ImageLoader();
images.loadFromManifest(require("./images"));

var input = require("./inputs");

var scenes = require("./scenes");

var sounds = new Splat.SoundLoader();
sounds.loadFromManifest(require("./sounds"));

var systems = require("./systems");

var game = new Splat.Game(canvas, animations, entities, images, input, require, scenes, sounds, systems);

function percentLoaded() {
	if (images.totalImages + sounds.totalSounds === 0) {
		return 1;
	}
	return (images.loadedImages + sounds.loadedSounds) / (images.totalImages + sounds.totalSounds);
}
var loading = Splat.loadingScene(canvas, percentLoaded, game.scene);
loading.start(context);
