menuState = {
	create: function(){
		bg = game.add.image(0,0,"bg");
		btnplay = game.add.button(300,400, 'start', this.laro);

	},
	update: function(){
		
	},
	laro: function(){
		game.state.start("play");
	}
}