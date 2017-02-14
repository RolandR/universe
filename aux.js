


function selectRandomly(arr){
	return(arr[~~(Math.random()*arr.length)]);
}


function seededRng(seed){
	return ('0.'+Math.sin(seed).toString().substr(6))*1;
}