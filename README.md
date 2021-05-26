# Project-86

<!DOCTYPE html>
<html>
<head>
	<title>Project 88</title>


<link rel="stylesheet" href="style.css">

<script src="fabric.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

</head>
<body class="body_background">

	<center>

	<h2 class="btn-primary">SUPERHERO</h2>

	<div id="head_info" class="btn-danger">
		<h3>Current Width  = <span id="current_width">30</span></h3>
		<h3>Current Height  = <span id="current_height">30</span> </h3>
	</div>

	<canvas width="1000" height="600" id="myCanvas"></canvas>

	</center>
	<script src="main.js"></script>
  <style>
    
    .body_background 
{
    background-image: url("https://www.pixelstalk.net/wp-content/uploads/2016/04/Free-avengers-backgrounds.jpg");
    background-position: center;
    background-size: cover;
}
#myCanvas
{
    border-width:10px;
    background-color: white; 
    border-style:ridge;
}

h2
{
	border-radius: 10px;
	width: 200px;
	padding: 5px;
 }
h3
{
	display: inline-block;
}
span
{
	color: black;	
}
a
{
	text-decoration: none;
	font-size: 20px;
	padding: 10px;
    float: left;
    border-radius: 10px;
}
#head_info
{
	width: 600px;
	border-radius: 10px;
	margin-bottom: 10px;
}
    
  </style>
  
  <script>
    
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

    
  </script>
  
</body>
</html>
