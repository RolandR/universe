function generateGreekName(){
	var name = greek.prefixes[~~(Math.random()*greek.prefixes.length)] + greek.suffixes[~~(Math.random()*greek.suffixes.length)];
	if(Math.random() < 0.3){
		name += " " + greek.prefixes[~~(Math.random()*greek.prefixes.length)] + greek.suffixes[~~(Math.random()*greek.suffixes.length)];
	}
	return name.charAt(0).toUpperCase() + name.slice(1);
}

function generateAnimalName(){
	var name = animals[~~(Math.random()*animals.length)] + " Star";
	if(Math.random() < 0.2){
		name = colors[~~(Math.random()*colors.length)] + " " + name;
	}
	return name;
}

function generateColorName(){
	var name = colors[~~(Math.random()*colors.length)] + " Star";
	if(Math.random() > 0.5){
		var prefix = Math.random();
		if(prefix < 0.1){
			name = "Bright " + name;
		} else if(prefix < 0.2){
			name = "Vibrant " + name;
		} else if(prefix < 0.25){
			name = "Cold " + name;
		} else if(prefix < 0.3){
			name = "Hot " + name;
		} else if(prefix < 0.33){
			name = "Neon " + name;
		} else if(prefix < 0.36){
			name = "Shimmering " + name;
		} else if(prefix < 0.4){
			name = "Pale " + name;
		} else if(prefix < 0.7){
			name = "Dark " + name;
		} else {
			name = "Light " + name;
		}
	}
	return name;
}

function generateGermanName(){
	var name = "";
	var length = Math.ceil(Math.random()*3);
	for(var i = 0; i < length; i++){
		name += germanSyllables[~~(Math.random()*germanSyllables.length)];
	}
	return name.charAt(0).toUpperCase() + name.slice(1);
}

var catalogs = [];

function generateCatalogs(){
	var count = 6;
	for(var c = 0; c < count; c++){
		var catalog = {
			 prefix: ""
			,identifier: ""
			,identifierLength: 0
			,identifierDash: false
		}

		var prefixType = selectRandomly(["latin", "greek"]);
		switch(prefixType){
			case "latin":
				var length = Math.ceil(Math.random()*3);
				for(var i = 0; i < length; i++){
					catalog.prefix += selectRandomly(latinUppercase);
				}
				catalog.prefix += selectRandomly([" ", " ", " ", "-", "-", "_"]);
			break;
			case "greek":
				var length = Math.ceil(Math.random()*2);
				for(var i = 0; i < length; i++){
					catalog.prefix += selectRandomly(greekUppercase);
				}
				catalog.prefix += selectRandomly([" ", " ", " ", " ", " ", "-", "-", "_"]);
			break;
		}

		catalog.identifier = selectRandomly(["numeric", "numeric", "numeric", "numeric", "numeric", "numeric", "numeric", "latin-upper", "latin-lower", "latin-mixed", "alphanumeric", "greek-lower", "greek-upper"]);
		switch(catalog.identifier){
			case "numeric":
				catalog.identifierLength = Math.ceil(Math.random()*6)+1;
			break;
			case "latin-upper":
				catalog.identifierLength = Math.ceil(Math.random()*5)+1;
			break;
			case "latin-lower":
				catalog.identifierLength = Math.ceil(Math.random()*5)+1;
			break;
			case "latin-mixed":
				catalog.identifierLength = Math.ceil(Math.random()*5)+1;
			break;
			case "alphanumeric":
				catalog.identifierLength = Math.ceil(Math.random()*4)+1;
			break;
			case "greek-lower":
				catalog.identifierLength = Math.ceil(Math.random()*3+1);
			break;
			case "greek-upper":
				catalog.identifierLength = Math.ceil(Math.random()*3+1);
			break;
		}

		if(Math.random() < 0.2){
			catalog.identifierDash = true;
		}

		catalogs.push(catalog);
	}
}

generateCatalogs();

function generateCatalogName(){
	var catalog = selectRandomly(catalogs);
	var name = catalog.prefix;

	switch(catalog.identifier){
		case "numeric":
			for(var i = 0; i < catalog.identifierLength; i++){
				name += selectRandomly(numeric);
				if(i == ~~(catalog.identifierLength/2-1) && catalog.identifierDash){
					name += "-";
				}
			}
		break;
		case "latin-upper":
			for(var i = 0; i < catalog.identifierLength; i++){
				name += selectRandomly(latinUppercase);
				if(i == ~~(catalog.identifierLength/2-1) && catalog.identifierDash){
					name += "-";
				}
			}
		break;
		case "latin-lower":
			for(var i = 0; i < catalog.identifierLength; i++){
				name += selectRandomly(latinLowercase);
				if(i == ~~(catalog.identifierLength/2-1) && catalog.identifierDash){
					name += "-";
				}
			}
		break;
		case "latin-mixed":
			for(var i = 0; i < catalog.identifierLength; i++){
				name += selectRandomly(latinUppercase.concat(latinLowercase));
				if(i == ~~(catalog.identifierLength/2-1) && catalog.identifierDash){
					name += "-";
				}
			}
		break;
		case "alphanumeric":
			for(var i = 0; i < catalog.identifierLength; i++){
				name += selectRandomly(numeric.concat(latinUppercase.concat(latinLowercase)));
				if(i == ~~(catalog.identifierLength/2-1) && catalog.identifierDash){
					name += "-";
				}
			}
		break;
		case "greek-lower":
			for(var i = 0; i < catalog.identifierLength; i++){
				name += selectRandomly(greekLowercase);
				if(i == ~~(catalog.identifierLength/2-1) && catalog.identifierDash){
					name += "-";
				}
			}
		break;
		case "greek-upper":
			for(var i = 0; i < catalog.identifierLength; i++){
				name += selectRandomly(greekUppercase);
				if(i == ~~(catalog.identifierLength/2-1) && catalog.identifierDash){
					name += "-";
				}
			}
		break;
	}
	
	return name.charAt(0).toUpperCase() + name.slice(1);
}

/*var names = "";

for(var i = 0; i < 10; i++){
	names += generateGreekName() + "\n";
}

console.log(names);

var names = "";

for(var i = 0; i < 10; i++){
	names += generateAnimalName() + "\n";
}

console.log(names);

var names = "";

for(var i = 0; i < 10; i++){
	names += generateColorName() + "\n";
}

console.log(names);

var names = "";

for(var i = 0; i < 10; i++){
	names += generateGermanName() + "\n";
}

console.log(names);

*/

/*var names = "";

for(var i = 0; i < 10; i++){
	names += generateCatalogName() + "\n";
}

console.log(names);

*/

var typeProbabilities = [
	 10 // Greek
	,15 // Catalog
	,3 // German
	,3 // Animal
	,1 // Color
]

var typeProbabilitiesSum = 0;
for(var i in typeProbabilities){
	typeProbabilitiesSum += typeProbabilities[i];
}
for(var i in typeProbabilities){
	typeProbabilities[i] = typeProbabilities[i] / typeProbabilitiesSum;

	if(i != 0){
		typeProbabilities[i] += typeProbabilities[i-1];
	}
}

function generateName(){

	var type = Math.random();

	if(type < typeProbabilities[0]){
		// Greek
		return generateGreekName();
		
	} else if(type < typeProbabilities[1]){
		// Catalog
		return generateCatalogName();
		
	} else if(type < typeProbabilities[2]){
		// German
		return generateGermanName();
		
	} else if(type < typeProbabilities[3]){
		// Animal
		return generateAnimalName();
		
	} else if(type < typeProbabilities[4]){
		// Color
		return generateColorName();
		
	} 
	
}

/*var names = "";

for(var i = 0; i < 30; i++){
	names += generateName() + "\n";
}

console.log(names);*/
