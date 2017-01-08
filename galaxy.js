
var hoverDetails = document.getElementById("hoverDetails");

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var scale = 1/3;

canvas.width = width*scale;
canvas.height = height*scale;

var uiCanvas = document.getElementById("uiCanvas");
var uiContext = uiCanvas.getContext("2d");

uiCanvas.width = width*scale;
uiCanvas.height = height*scale;


var chunks = [];

for(var x = 0; x < 10; x++){
	chunks[x] = [];
	for(var y = 0; y < 10; y++){
		chunks[x][y] = [];
	}
}

var starCount = 1000;

var stars = [];
var star = {};

for(var i = 0; i < starCount; i++){
	
	var x = Math.random();
	var y = Math.random();
	
	star = {
		 x: x
		,y: y
		,brightness: Math.random()
		,name: generateName()
	};

	var chunkX = ~~(x*10);
	var chunkY = ~~(y*10);

	stars.push(star);
	chunks[chunkX][chunkY].push(star);
}

for(var i in stars){
	context.beginPath();
	context.moveTo(~~(stars[i].x*canvas.width), ~~(stars[i].y*canvas.height));
	context.lineTo(~~(stars[i].x*canvas.width+1), ~~(stars[i].y*canvas.height+1));
	context.strokeStyle = "rgba(255, 255, 255, "+stars[i].brightness+")";
	context.stroke();
}

uiContext.strokeStyle = "#994422";
uiContext.lineWidth = 1;

window.addEventListener("mousemove", function(e){
	var chunkX = ~~(10*(e.clientX*scale)/canvas.width);
	var chunkY = ~~(10*(e.clientY*scale)/canvas.height);
	if(chunks[chunkX]){
		if(chunks[chunkX][chunkY]){
			var nearest = chunks[chunkX][chunkY].sort(function(a, b){
				return (Math.sqrt(Math.pow(a.x*canvas.width - e.clientX*scale, 2) + Math.pow(a.y*canvas.height - e.clientY*scale, 2))
				 - 		Math.sqrt(Math.pow(b.x*canvas.width - e.clientX*scale, 2) + Math.pow(b.y*canvas.height - e.clientY*scale, 2)));
			})[0]
			hoverDetails.style.left = (~~(nearest.x*canvas.width)/scale + 20) + "px";
			hoverDetails.style.top = (~~(nearest.y*canvas.height)/scale + 20) + "px";
			hoverDetails.innerHTML = nearest.name;

			uiContext.clearRect(0, 0, uiCanvas.width, uiCanvas.height);
			uiContext.beginPath();
			uiContext.moveTo(~~(nearest.x*canvas.width)+0, ~~(nearest.y*canvas.height)+0);
			uiContext.lineTo(~~(nearest.x*canvas.width)+~~(20*scale)+1, ~~(nearest.y*canvas.height)+~~(20*scale)+1);
			uiContext.stroke();
			
		}
	}
}, false);









