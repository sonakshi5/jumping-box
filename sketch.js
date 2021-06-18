var canvas;
var music;
var block1 , block2 , block3 , block4
var ball
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "red";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "pink";

    //create box sprite and give velocity
   ball = createSprite(random(20,750),100,40,40);
   ball.shapeColor = "cyan";
   ball.velocityX = 4;
   ball.velocityY = 8;
}

function draw() {
     background(180);
    //create edgeSprite
     edges = createEdgeSprites();
     ball.bounceOff(edges);
     if(block1.isTouching(ball) &&  ball.bounceOff(block1)){
         ball.shapeColor = "blue"
         music.play();
     }
     if(block2.isTouching(ball)){
        ball.shapeColor = "red"
        ball.velocityX = 0
        ball.velocityY = 0
        music.stop();
    }
    if(block3.isTouching(ball) &&  ball.bounceOff(block3)){
        ball.shapeColor = "yellow"
    }
    if(block4.isTouching(ball) &&  ball.bounceOff(block4)){
        ball.shapeColor = "pink"
    }

    drawSprites();

}
