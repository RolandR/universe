


function generatePlanet(){

	
	var canvas = document.getElementById("planetCanvas");
	var context = canvas.getContext("2d");

	var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	var scale = 1/3;

	canvas.width = width*scale;
	canvas.height = height*scale;

	var image = context.getImageData(0, 0, canvas.width, canvas.height);

	for(var i = 0; i < image.data.length; i+=4){
		var x = (i/4) % canvas.width;
		var y = ~~((i/4) / canvas.width);

		var lightness = (noise.simplex2(x, y)/2+0.5)*30+230;

		image.data[i] *= 255/lightness;
		image.data[i+1] *= 255/lightness;
		image.data[i+2] *= 255/lightness;

		
	}

	context.putImageData(image, 0, 0);

	
}

