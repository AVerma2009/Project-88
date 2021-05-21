var canvas = new fabric.Canvas('myCanvas');

hero_image_width = 30;
hero_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update()

{

fabric.Image.fromURL("https://static.wikia.nocookie.net/p__/images/f/f6/GOTG2_Baby_Groot.png/revision/latest?cb=20200629020713&path-prefix=protagonist", function(Img) {
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);

});

}


function new_image(get_image)

{

fabric.Image.fromURL(get_image, function(Img) {
hero_image_object = Img;

hero_image_object.scaleToWidth(hero_image_width);
hero_image_object.scaleToHeight(hero_image_height);
hero_image_object.set({
top:player_y,
left:player_x
});
canvas.add(hero_image_object);

});

}
