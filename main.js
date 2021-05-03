canvas = new fabric.Canvas("myCanvas");
block_image_width= 30;
block_image_height= 30;

player_x = 10;
player_y = 10;
var player_object = "";
var block_image_object = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
        top: player_y,
        left: player_x,
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top: player_y,
        left: player_x,
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) 
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if (e.shiftKey == true && keyPressed == '80') 
    {
        console.log("Shift and key P pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;
    }

    if (e.shiftKey == true && keyPressed == '77') 
    {
        console.log("Shift and key M pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;
    }


if (keyPressed == '37')
{
    left();
    console.log("Left key");
}

if (keyPressed == '38')
{
    up();
    console.log("Up key");
}

if (keyPressed == '39')
{
    right();
    console.log("Right key");
}

if (keyPressed == '40')
{
    down();
    console.log("Down key");
}

if (keyPressed == '87')
{
    new_image('wall.jpg');
    console.log("w key");
}

if (keyPressed == '71')
{
    new_image('ground.png');
    console.log("g key");
}

if (keyPressed == '76')
{
    new_image('light_green.png');
    console.log("l key");
}

if (keyPressed == '84')
{
    new_image('trunk.jpg');
    console.log("t key");
}

if (keyPressed == '82')
{
    new_image('roof.jpg');
    console.log("r key");
}

if (keyPressed == '87')
{
    new_image('wall.jpg');
    console.log("W key");
}

if (keyPressed == '89')
{
    new_image('yellow_wall.png');
    console.log("y key");
}

if (keyPressed == '68')
{
    new_image('dark_green.png');
    console.log("d key");
}

if (keyPressed == '85')
{
    new_image('unique.png');
    console.log("u key");
}

if (keyPressed == '67')
{
    new_image('cloud.jpg');
    console.log("c key");
}
}

function up() 
{
    if(player_y >= 0)
    {
        player_y = player_y - block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When up arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function down() 
{
    if(player_y <= 500)
    {
        player_y = player_y + block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When down arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function left() 
{
    if(player_x >= 0)
    {
        player_x = player_x - block_image_width;
        console.log("Block image width = " + block_image_width);
        console.log("When left arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function right() 
{
    if(player_x <= 900)
    {
        player_x = player_x + block_image_width;
        console.log("Block image width = " + block_image_width);
        console.log("When right arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}