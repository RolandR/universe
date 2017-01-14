
init();

function init(){

	noise.seed(Math.random());

	/*var hoverPointer = document.getElementById("hoverPointer");
	var hoverPointerCtx = hoverPointer.getContext("2d");

	hoverPointerCtx.clearRect(0, 0, uiCanvas.width, uiCanvas.height);
	hoverPointerCtx.beginPath();
	hoverPointerCtx.moveTo(0, 0);
	hoverPointerCtx.lineTo(21, 21);
	
	hoverPointerCtx.strokeStyle = "#994422";
	hoverPointerCtx.lineWidth = 1;
	
	hoverPointerCtx.stroke();*/

	

	//noise.seed(Math.random());

	/*var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	var scale = 1/3;

	canvas.width = width*scale;
	canvas.height = height*scale;*/

	


	/*function render8bit(ignoreLightColor){
		
		var image = context.getImageData(0, 0, canvas.width, canvas.height);

		var colorResolution = 16;

		var lightColorR = lightColor[0]/255;
		var lightColorG = lightColor[1]/255;
		var lightColorB = lightColor[2]/255;

		for(var i = 0; i < image.data.length; i += 4){

			if(image.data[i+3] > 220){

				if(!ignoreLightColor){
					image.data[i  ] *= lightColorR;
					image.data[i+1] *= lightColorG;
					image.data[i+2] *= lightColorB;
				}

				var variance = (Math.random()-0.5)*10;
				
				image.data[i  ] += variance;
				image.data[i+1] += variance;
				image.data[i+2] += variance;
				
				image.data[i  ] = colorResolution * Math.round(image.data[i  ]/colorResolution);
				image.data[i+1] = colorResolution * Math.round(image.data[i+1]/colorResolution);
				image.data[i+2] = colorResolution * Math.round(image.data[i+2]/colorResolution);

				image.data[i+3] = 255;

			} else {
				image.data[i+3] = 0;
			}
		};
		
		context.putImageData(image, 0, 0);

		return canvas;
		
	}*/

}
