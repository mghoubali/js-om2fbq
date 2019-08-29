"use strict";

    var Game = {
        canvas : undefined,
        canvasContext : undefined,
        balloonSprite : undefined
    };

    Game.start = function(){
        Game.canvas = document.getElementById("myCanvas");
        Game.canvasContext = Game.canvas.getContext("2d");
        Game.balloonSprite = document.getElementById("logo");
        /*new Image(100,100);
        Game.balloonSprite.src = 'logo.png';
        Game.balloonSprite.width = 100;
        Game.balloonSprite.height = 100;*/
        Game.mainLoop;
    };

    document.addEventListener('DOMContentLoaded', Game.start);

    Game.draw = function(){
        Game.canvasContext.fillStyle = "yellow";
        Game.canvasContext.fillRect(Game.rectanglePosition, 100, 80, 50);

         //** I am assuming that this is where the problem is, if I take out this line of code the yellow box outlined above will appear, if this line is in the box will NOT appear**// 

        Game.drawImage(Game.balloonSprite, {x : 50, y : 50}); 
    };

    Game.drawImage = function(sprite, position){
        Game.canvasContext.save();
        Game.canvasContext.translate(position.x, position.y);
        sprite.onload = function(){
          Game.canvasContext.drawImage(this,  50, 50, this.width, this.height,
                                              50, 50, this.width, this.height);
        }

        
        Game.canvasContext.restore();
    };

    Game.mainLoop = function(){
        Game.draw();
    };
    
