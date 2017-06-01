playState = {
	create: function(){
		main = game.add.image(0,0,"main");

    base = game.add.sprite(0,588,"base");
    game.physics.arcade.enable(base);
    base.body.collideWorldBounds = true;
    base.body.immovable = true;

     play_music = game.add.audio("bg_music");
     play_music.play();


    player = game.add.sprite(250,370,"character");
    player.animations.add('right',[0,1,2],10,true);
    player.animations.add('left',[3,4,5],10,true);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;
   
    material = game.add.sprite(250,10,"material");
    game.physics.arcade.enable(material);
    material.body.collideWorldBounds = true;
    material.body.gravity.y = 200;
    material.body.velocity. setTo(100,100);
    material.body.bounce.set(2.5);
    material.body.onWorldBounds = new Phaser.Signal();
    material.body.onWorldBounds.add(this.talon);
 

    scoretext = game.add.text(150,150,"Score:0",{fill:'yellow',font:'40px Times New Roman'});
    scoretext.stroke = 'green';
    scoretext.strokeThickness = 7;
    scoretext.anchor.setTo(0.5,0.5);


    highscoretext = game.add.text(150,100,'Best Score: '+localStorage.getItem('Best Score'),{fill:'yellow',font:'40px Times New Roman'});
    highscoretext .stroke = 'green';
    highscoretext .strokeThickness = 7;
    highscoretext.anchor.setTo(0.5,0.5);



    leff = game.add.button(0,500, "left",null,this,0,1,2);
    leff.events.onInputOver.add(function(){left=true;});
    leff.events.onInputOut.add(function(){left=false;});
    leff.events.onInputDown.add(function(){left=true;});
    leff.events.onInputUp.add(function(){left=false;});

    rayt = game.add.button(570,500, "right",null,this,3,4,5);
    rayt.events.onInputOver.add(function(){right=true;});
    rayt.events.onInputOut.add(function(){right=false;});
    rayt.events.onInputDown.add(function(){right=true;});
    rayt.events.onInputUp.add(function(){right=false;});
	},
	update: function(){
		//mobile controls
	if (left){
        player.animations.play("left");
        player.body.velocity.x = -300;   
        
    }
    else if(right){
          player.animations.play("right");
         player.body.velocity.x = 300;  
    }

      else{
         player.body.velocity.x = 0;
         player.animations.stop();
         player.frame=0;
      }
      //desktop control
    //   if (keyboard.left.isDown){
    //     player.animations.play("left");
    //     player.body.velocity.x = -300;   
        
    // }
    // else if(keyboard.right.isDown){
    //       player.animations.play("right");
    //      player.body.velocity.x = 300;  
    // }

    //   else{
    //      player.body.velocity.x = 0;
    //      player.animations.stop();
    //      player.frame=0;
    //   }

       
       if(game.physics.arcade.collide(player,material)){
        score++;
        scoretext.text = "Score: " + score;
        }
     else if(localStorage.getItem('Best Score')===null){
        localStorage.setItem('Best Score',score);
    }
    else if(score>localStorage.getItem('Best Score')){
         localStorage.setItem('Best Score',score);        
    }

    if(game.physics.arcade.collide(material,base)){
        gameovertext = game.add.text(400,290,"Talo na!!",{fill:'blue',font:'50px Times New Roman'}); 
        gameovertext .stroke = 'black';
        gameovertext .strokeThickness = 7;
        gameovertext.anchor.setTo(0.5,0.5);
        //play_music.stop();

        scoretext.visible = false;
        highscoretext.visible = false;
        player.kill();
        material.kill();

        restartBtn = game.add.button(400,420, 'restartBtn', this.ulit);                                                                      
        restartBtn.anchor.setTo(0.5,0.5);
        restartBtn.scale.setTo(0.5,0.5);
        game.input.onTap.add(this.ulit);
    }
	},
	laro: function(){
            bg.visible = false;
          btnplay.visible = false;
          player.revive(230,370);
          material.revive();
        
       },
    ulit: function(){  
          game.state.start("menu");
          
    	},
    talon:function(material){
             material.play();
      	},
    loopAudio:function(){
        setInterval(function(){
          play_music.play();
        })
      }

}