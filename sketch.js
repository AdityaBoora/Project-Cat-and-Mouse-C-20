var bgImg
var cat
var mouse
var catimg1, catimg2, catimg3
var mouseimg1, mouseimg2, mouseimg3

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catimg1 = loadAnimation("images/cat1.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catimg3 = loadAnimation("images/cat4.png")
    mouseimg3 = loadAnimation("images/mouse3.png")
}

function setup(){
    createCanvas(1000,800); 
    //create tom and jerry sprites here
    cat = createSprite(800,600);
    cat.addAnimation("catSleeping", catimg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("mouseWalking", mouseimg1);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x < (cat.width -mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("cat3", catimg3);
        cat.X = 400;
        cat.scale = 0.2;
        cat.changeAnimation("cat3")
        
        mouse.addAnimation("mouse3", mouseimg3);
        mouse.stain = 0.15;
        mouse.changeAnimation("mouse3");
    }

    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here

 if (keyCode === LEFT_ARROW) {
     cat.velocityX = -5;
     cat.addAnimation("catRunning", catimg2);
     cat.changeAnimation("catRunning");


     mouse.addAnimation("mouseTeasing", mouseimg2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay = 25;
 }

}
