preloadState = {
	preload: function(){
		game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		game.forceToPortrait = true;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.refresh();

		game.load.image("start","img/start.png", 300,400);
		game.load.image('restartBtn','img/restartBtn.png');
		game.load.image("material","img/material.png");
		game.load.image("pause","img/pause.png");
		game.load.image("bg","img/bg.png");
		game.load.image("main","img/mainbackground.png");
		game.load.image("left","img/left.png");
		game.load.image("right","img/right.png");
		//game.load.audio("bg_music","sounds/bgsound.mp3");
		//game.load.spritesheet("character","img/character.png",110,200);
		game.load.spritesheet('character','img/character.png',63,55);
		game.load.image("base","img/baseform.png");
	},
	create: function(){
		game.state.start("menu");
	}
}