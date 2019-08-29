    "use strict";
   
    var Game = {
        canvas : undefined,
        canvasContext : undefined,
        balloonSprite : undefined
    };

    Game.start = function(){
        Game.canvas = document.getElementById("myCanvas");
        Game.canvasContext = Game.canvas.getContext("2d");
        //debugger
        Game.balloonSprite = new Image();
        Game.balloonSprite.width = 50;
        Game.balloonSprite.height = 50;

        //debugger
        Game.balloonSprite.src = './logo.png';

        //console.log(Game.balloonSprite);
        window.setTimeout(Game.mainLoop, 1000);
    };

    document.addEventListener('DOMContentLoaded', Game.start);
  
    Game.draw = function(){
        Game.canvasContext.fillStyle = "yellow";
        Game.canvasContext.fillRect(Game.rectanglePosition, 100, 80, 50);

         //** I am assuming that this is where the problem is, if I take out this line of code the yellow box outlined above will appear, if this line is in the box will NOT appear**// 
        var position = 
        {
          x : 50,
          y : 50
        }
         Game.drawImage(Game.balloonSprite, {position});
    };

    

    Game.drawImage = function(sprite, position){
        Game.canvasContext.save();
        Game.canvasContext.translate(position.x, position.y);
        debugger
        Game.balloonSprite.onload = function() {
          Game.canvasContext.drawImage(this, 50, 50);
        };


        //Game.canvasContext.drawImage(sprite,  0, 0);
        Game.canvasContext.restore();
    };

    Game.mainLoop = function(){
        Game.draw();
    };
    
    Game.start();
   
    //Game.mainLoop();
     //Game.drawImage( Game.balloonSprite, position);
    
