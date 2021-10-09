var canvas=new fabric.Canvas("myCanvas");//Telling that canvas (id) is going to use the fabric library; setting a variable//

player_x=10;//defining x and y position of player//
player_y=10;

block_image_width=30;//setting width and height of all image//
block_image_height=30;

var player_object="";//In fabric library, images are stored as objects in canvas, so this variable will be used to store the object of the player image//
var block_image_object="";

function player_update()

{
fabric.Image.fromURL("player.png",function(img)
//Load the player in the canvas using fabric library//
//Fabric:Name of library we use//
//Image:This says we are uploading an image//
//fromURL:Contains the image URL and function of uploading an image//
//player.png:This is the image//
//function(Img):This is the function that will upload player.png on the canvas//
//img:Object of Image set by default//
{
player_object=img;//storing the player.png in object//
player_object.scaleToWidth(150);//setting width//
player_object.scaleToHeight(150);//setting height//
player_object.set//setting the x and y position (in the form of the object)//
({
top:player_y,//setting y position//
left:player_x//setting x position//
});
canvas.add(player_object);//adding player_object(img)to the canvas//
});
}

function new_image(getimage)//get image will hold multiple images at different times//
{
    fabric.Image.fromURL(getimage,function(img)  
    {
        block_image_object=img;
        block_image_object.scaleToWidth(block_image_width);//setting width//
        block_image_object.scaleToHeight(block_image_height);//setting height//
        block_image_object.set//setting the x and y position (in the form of the object)//
        ({
        top:player_y,//setting y position//
        left:player_x//setting x position//
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keypressed=e.keyCode;
console.log(keypressed);
if (e.shiftKey==true && keypressed=='80')
{
    console.log("P+Shift are pressed together")
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if (e.shiftKey==true && keypressed=='77')
{
    console.log("M+Shift are pressed together")
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if (keypressed=='38')
{
    up();
    console.log("up");
}
if (keypressed=='40')
{
    down();
    console.log("down");
}
if (keypressed=='37')
{
    left();
    console.log("left");
}
if (keypressed=='39')
{
    right();
    console.log("right");
}
if (keypressed=='67')
{
    new_image("cloud.jpg");
    console.log("c");
}
if (keypressed=='68')
{
    new_image("dark_green.png");
    console.log("d");
}
if (keypressed=='71')
{
    new_image("ground.png");
    console.log("g");
}
if (keypressed=='76')
{
    new_image("light_green.png");
    console.log("l");
}
if (keypressed=='82')
{
    new_image("roof.jpg");
    console.log("r");
}
if (keypressed=='84')
{
    new_image("trunk.jpg");
    console.log("t");
}
if (keypressed=='85')
{
    new_image("unique.png");
    console.log("u");
}
if (keypressed=='87')
{
    new_image("wall.jpg");
    console.log("w");
}
if (keypressed=='89')
{
    new_image("yellow_wall.png");
    console.log("y");
}
}
function up()
{
if (player_y>=0)
player_y=player_y-block_image_height;
console.log(block_image_height);
console.log("When up is pressed x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
}
function down()
{
if (player_y<=700)
player_y=player_y+block_image_height;
console.log(block_image_height);
console.log("When down is pressed x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
}
function left()
{
if (player_x>=0)
player_x=player_x-block_image_width;
console.log(block_image_width);
console.log("When left is pressed x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
}
function right()
{
if (player_x<=900)
player_x=player_x+block_image_width;
console.log(block_image_width);
console.log("When right is pressed x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
}











