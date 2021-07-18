var bgImage;
var cat,mouse;
var catImg,mouseImg,catImg1,mouseImg1,catImg2,mouseImg2;
function preload() {
    //load the images here
    bgImage = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    mouseImg = loadImage("images/mouse1.png");
    mouseImg1 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg1 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadImage("images/mouse4.png");
    catImg2 = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(900,800);

    //create tom and jerry sprites here

    cat = createSprite(750,600,10,10);
    cat.addImage(catImg);
    cat.scale = 0.2

    mouse = createSprite(100,600,10,10);
    mouse.addImage(mouseImg);
    mouse.scale = 0.2






}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addImage("catHappy",catImg2);
        cat.changeImage("catHappy");
        cat.velocityX = 0;
        mouse.addImage("mouseHappy",mouseImg2);
        mouse.changeImage("mouseHappy");
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseImg1)
        mouse. changeAnimation("mouseTeasing");
        mouse.frameDelay =25;
    }

    if(keyCode === LEFT_ARROW){
        cat.addAnimation("catWalking",catImg1);
        cat.changeAnimation("catWalking");
        cat.velocityX = -3;
        cat.frameDelay = 25;
    }

}
