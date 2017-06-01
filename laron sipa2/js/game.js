var bounds = 5000, x = 1, a = 0;
var player, keyboard, score = 0;
var start,exit,base;
var scoretext, highscoreText, bestScoreText, gameovertext;
var left, right;
var material, mix, mixes; 
var playmusic, bgmusic;
var game = new Phaser.Game(800,600, Phaser.CANVAS, '');

		//inayon mo ti states
	game.state.add("boot",bootState);
	game.state.add("preload",preloadState);
	game.state.add("menu",menuState);
	game.state.add("play",playState);
	// game.state.add("leaderboard",leaderboardState);

game.state.start("boot");