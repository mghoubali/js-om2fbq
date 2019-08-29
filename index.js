
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
        Game.balloonSprite.src = './logo.png';
        window.setTimeout(Game.mainLoop, 1000);
    };

    document.addEventListener('DOMContentLoaded', Game.start);

    Game.draw = function(){
        Game.canvasContext.fillStyle = "yellow";
        Game.canvasContext.fillRect(Game.rectanglePosition, 100, 80, 50);

         //** I am assuming that this is where the problem is, if I take out this line of code the yellow box outlined above will appear, if this line is in the box will NOT appear**// 

         Game.drawImage(Game.balloonSprite, {position});
    };

    var position = 
    {
      x : 50,
      y : 50
    }

    Game.drawImage = function(sprite, position){
        Game.canvasContext.save();
        Game.canvasContext.translate(position.x, position.y);
        Game.canvasContext.drawImage(sprite,  0, 0, sprite.width, sprite.height,
                                              0, 0, sprite.width, sprite.height);
        Game.canvasContext.restore();
    };

    Game.mainLoop = function(){
        Game.draw();
    };
    Game.start();
   
    Game.mainLoop();
     Game.drawImage( Game.balloonSprite, position);
    
