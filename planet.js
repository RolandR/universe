

var scale = 1/3;
var planetsCanvas = document.getElementById("planetsCanvas");
var width = ~~(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
var height = ~~(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
planetsCanvas.width = ~~(width*scale);
planetsCanvas.height = ~~(height*scale);


generatePlanet();
var drawSize = ~~(height*scale);
var drawSize = 40;
drawPlanet(drawSize);


setTimeout(foo, 1000);

function foo(){
	drawPlanet(drawSize);
	drawSize *= 1.01;
	if(drawSize < height*scale){
		setTimeout(foo, 1);
	} else {
		drawPlanet(~~(height*scale));
	}
}

function drawPlanet(drawSize){
	var context = planetsCanvas.getContext("2d");
	context.clearRect(0, 0, width, height);
	context.drawImage(
		document.getElementById("planetCanvas")
		,~~((width*scale)/2-drawSize/2)
		,~~((height*scale)/2-drawSize/2)
		,drawSize
		,drawSize
	);
}


function generatePlanet(){

	var seed = Math.random();

	noise.seed(seed);

	var size = seededRng(seed++);
	var atmosphere = size;
	var hasOcean = Math.round(seededRng(seed++));
	var ocean = seededRng(seed++);
	
	var colR = seededRng(seed++)/2+0.5;
	var colG = colR*(seededRng(seed++)/2+0.5);
	var colB = colG*(seededRng(seed++)/2+0.5);
	
	var canvas = document.getElementById("planetCanvas");
	var context = canvas.getContext("2d");

	var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var size = Math.min(width, height);

	canvas.width = size*scale;
	canvas.height = size*scale;

	context.beginPath();
	context.arc(canvas.width/2, canvas.height/2, (size*scale)/2 - 15, 0, 2*Math.PI);
	context.fillStyle = "rgb(128, 128, 128)";
	context.fill();

	//addCrater(canvas.width/2, canvas.height/2, (120*scale)/2, 0.1);

	for(var i = 0; i < 1000; i++){
		addCrater(
			canvas.width * seededRng(seed++)// * scale
			,canvas.height * seededRng(seed++)// * scale
			,(60*scale)/2 * Math.pow(seededRng(seed++), 2)
			,0.05 * seededRng(seed++) + 0.05
		);
	}

	function addCrater(x, y, radius, intensity){

		var gradient = context.createRadialGradient(x, y, radius, x, y, 0);
		gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
		gradient.addColorStop(0.05, "rgba(255, 255, 255, "+intensity+")");
		gradient.addColorStop(0.1, "rgba(60, 60, 60, "+intensity+")");
		gradient.addColorStop(0.5, "rgba(0, 0, 0, "+intensity+")");
		gradient.addColorStop(0.85, "rgba(0, 0, 0, "+intensity+")");
		gradient.addColorStop(1, "rgba(150, 150, 150, "+intensity+")");
		
		context.beginPath();
		context.arc(x, y, radius, 0, 2*Math.PI);
		context.fillStyle = gradient;
		context.fill();
	}

	var heightmap = context.getImageData(0, 0, canvas.width, canvas.height);

	for(var i = 0; i < heightmap.data.length; i+=4){

		if(heightmap.data[i] > 5){
			var x = (i/4) % canvas.width;
			var y = ~~((i/4) / canvas.width);
			x = x + canvas.width/2;
			y = y + canvas.height/2;
			var res = 300*scale;

			var lightness = (noise.simplex2(x/res, y/res)/2+0.5);
			res /= 2;
			lightness += (noise.simplex2(x/res, y/res)/2+0.5)*0.5;
			res /= 2;
			lightness += (noise.simplex2(x/res, y/res)/2+0.5)*0.25;
			res /= 2;
			lightness += (noise.simplex2(x/res, y/res)/2+0.5)*0.125;
			res /= 2;
			lightness += (noise.simplex2(x/res, y/res)/2+0.5)*0.06;
			res /= 2;
			lightness += (noise.simplex2(x/res, y/res)/2+0.5)*0.03;

			//lightness /= 2;

			heightmap.data[i] *= lightness;
			heightmap.data[i+1] *= lightness;
			heightmap.data[i+2] *= lightness;
			
			heightmap.data[i+3] = 255;
		} else {
			heightmap.data[i] = 0;
			heightmap.data[i+1] = 0;
			heightmap.data[i+2] = 0;
			
			heightmap.data[i+3] = 0;
		}
	}
	
	var colorMap = context.getImageData(0, 0, canvas.width, canvas.height);

	for(var i = 0; i < colorMap.data.length; i+=4){

		if(colorMap.data[i+3] > 250){

			var lightness = heightmap.data[i];
			
			lightness *= 1.2;

			var gradient = (heightmap.data[i]) - (heightmap.data[i-4]);
			gradient = gradient;

			if(heightmap.data[i-1] < 128){
				gradient = 0;
			}

			var oceanLevel = 0;
			if(hasOcean){
				oceanLevel = ocean;
			}
			
			if(lightness < (255*oceanLevel)){
				var x = (i/4) % canvas.width;
				var y = ~~((i/4) / canvas.width);
				var water = (noise.simplex2(x, y)/2+0.5)*15;
				colorMap.data[i  ] = 10+water;
				colorMap.data[i+1] = 50*0.3+water;
				colorMap.data[i+2] = 70*0.7+water;
			} else {
				colorMap.data[i] = (gradient + lightness)*colR;
				colorMap.data[i+1] = (gradient + lightness)*colG;
				colorMap.data[i+2] = (gradient + lightness)*colB;
			}
			
			colorMap.data[i+3] = 255;
		} else {
			colorMap.data[i] = 0;
			colorMap.data[i+1] = 0;
			colorMap.data[i+2] = 0;
			
			colorMap.data[i+3] = 0;
		}

		/*colorMap.data[i] = heightmap.data[i];
		colorMap.data[i+1] = heightmap.data[i+1];
		colorMap.data[i+2] = heightmap.data[i+2];
		
		colorMap.data[i+3] = heightmap.data[i+3];*/

		
	}

	for(var i = 0; i < colorMap.data.length; i+=4){

		var x = (i/4) % canvas.width + canvas.width;
		var y = ~~((i/4) / canvas.width);
		var res = 300*scale;

		var cloudness = (noise.simplex2(x/res, y/res)/2+0.5);
		res /= 2;
		cloudness += (noise.simplex2(x/res, y/res)/2+0.5)*0.5;
		res /= 2;
		cloudness += (noise.simplex2(x/res, y/res)/2+0.5)*0.45;
		res /= 2;
		cloudness += (noise.simplex2(x/res, y/res)/2+0.5)*0.4;
		res /= 2;
		cloudness += (noise.simplex2(x/res, y/res)/2+0.5)*0.3;
		res /= 2;
		cloudness += (noise.simplex2(x/res, y/res)/2+0.5)*0.2;

		cloudness /= 2;
		cloudness *= 255;

		if(cloudness > 200){
			colorMap.data[i] = cloudness;
			colorMap.data[i+1] = cloudness;
			colorMap.data[i+2] = cloudness;
		}
		
	}

	context.putImageData(colorMap, 0, 0);
	
}

