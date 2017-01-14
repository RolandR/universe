
generatePlanet();


function generatePlanet(){

	
	var canvas = document.getElementById("planetCanvas");
	var context = canvas.getContext("2d");

	var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var size = Math.min(width, height);

	var scale = 1/3;

	canvas.width = size*scale;
	canvas.height = size*scale;

	context.beginPath();
	context.arc(canvas.width/2, canvas.height/2, (size*scale)/2 - 40, 0, 2*Math.PI);
	context.fillStyle = "#FFFFFF";
	context.fill();

	var heightmap = context.getImageData(0, 0, canvas.width, canvas.height);

	for(var i = 0; i < heightmap.data.length; i+=4){

		if(heightmap.data[i] > 128){
			var x = (i/4) % canvas.width;
			var y = ~~((i/4) / canvas.width);
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

			lightness /= 2;
			lightness *= 255;

			heightmap.data[i] = lightness;
			heightmap.data[i+1] = lightness;
			heightmap.data[i+2] = lightness;
			
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

		if(colorMap.data[i] > 128){

			var lightness = heightmap.data[i];
			
			lightness *= 1.2;

			if(lightness < (128*1.2)){
				colorMap.data[i] = lightness*0.4;
				colorMap.data[i+1] = lightness*0.5;
				colorMap.data[i+2] = lightness;
			} else {
				colorMap.data[i] = lightness*0.8;
				colorMap.data[i+1] = lightness*0.68;
				colorMap.data[i+2] = lightness*0.5;
			}
			
			colorMap.data[i+3] = 255;
		} else {
			colorMap.data[i] = 0;
			colorMap.data[i+1] = 0;
			colorMap.data[i+2] = 0;
			
			colorMap.data[i+3] = 0;
		}

		
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

