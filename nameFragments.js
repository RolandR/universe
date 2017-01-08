
var numeric = "0123456789".split("");
var latinUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var latinLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var greekUppercase = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ".split("");
var greekLowercase = "αβγδεζηθικλμνξοπρστυφχψω".split("");

var greekLong = [
	 "alpha"
	,"beta"
	,"gamma"
	,"delta"
	,"epsilon"
	,"zeta"
	,"eta"
	,"theta"
	,"iota"
	,"kappa"
	,"lambda"
	,"mu"
	,"nu"
	,"xi"
	,"omicron"
	,"pi"
	,"rho"
	,"sigma"
	,"tau"
	,"upsilon"
	,"phi"
	,"chi"
	,"psi"
	,"omega"
]

var greek = {
	 prefixes: [
		 "a"
		,"an"
		,"amphi"
		,"ana"
		,"anti"
		,"apo"
		,"cata"
		,"dia"
		,"di"
		,"dys"
		,"ec"
		,"ex"
		,"en"
		,"em"
		,"el"
		,"endo"
		,"ento"
		,"end"
		,"entepi"
		,"ep"
		,"eu"
		,"ev"
		,"exo"
		,"ecto"
		,"hyper"
		,"hypo"
		,"hyp"
		,"meta"
		,"met"
		,"sir"
		,"or"
		,"hyd"
	]
	,suffixes: [
		 "rac"
		,"iac"
		,"al"
		,"an"
		,"ian"
		,"ic"
		,"tic"
		,"ous"
		,"ious"
		,"us"
		,"us"
		,"us"
		,"us"
		,"us"
		,"us"
		,"us"
		,"us"
		,"ius"
		,"ius"
		,"ius"
		,"oid"
		,"ize"
		,"om"
		,"ma"
		,"sis"
		,"se"
		,"sy"
		,"sia"
		,"y"
		,"ula"
		,"ula"
		,"la"
		,"la"
		,"la"
		,"ia"
		,"ium"
		,"ion"
		,"idium"
		,"iscus"
		,"on"
		,"on"
		,"on"
		,"on"
		,"con"
		,"oid"
	]
};

var animals = [
	 "Aardvark"
	,"Albatross"
	,"Alligator"
	,"Alpaca"
	,"Ant"
	,"Anteater"
	,"Antelope"
	,"Ape"
	,"Armadillo"
	,"Axolotl"
	,"Donkey"
	,"Baboon"
	,"Badger"
	,"Barracuda"
	,"Bat"
	,"Bear"
	,"Beaver"
	,"Bee"
	,"Bird"
	,"Bison"
	,"Boar"
	,"Buffalo"
	,"Butterfly"
	,"Camel"
	,"Caribou"
	,"Cassowary"
	,"Cat"
	,"Caterpillar"
	,"Cattle"
	,"Chamois"
	,"Cheetah"
	,"Chicken"
	,"Chimpanzee"
	,"Chinchilla"
	,"Chough"
	,"Coati"
	,"Cobra"
	,"Cockroach"
	,"Cod"
	,"Cormorant"
	,"Coyote"
	,"Crab"
	,"Crane"
	,"Crocodile"
	,"Crow"
	,"Curlew"
	,"Deer"
	,"Dinosaur"
	,"Dog"
	,"Dogfish"
	,"Dolphin"
	,"Donkey"
	,"Dotterel"
	,"Dove"
	,"Dragonfly"
	,"Duck"
	,"Dugong"
	,"Dunlin"
	,"Eagle"
	,"Echidna"
	,"Eel"
	,"Elephant"
	,"Elk"
	,"Emu"
	,"Falcon"
	,"Ferret"
	,"Finch"
	,"Fish"
	,"Flamingo"
	,"Fly"
	,"Fox"
	,"Frog"
	,"Gaur"
	,"Gazelle"
	,"Gerbil"
	,"Giant panda"
	,"Giraffe"
	,"Gnat"
	,"Gnu"
	,"Goat"
	,"Goose"
	,"Gorilla"
	,"Goshawk"
	,"Grasshopper"
	,"Grouse"
	,"Guanaco"
	,"Guinea pig"
	,"Gull"
	,"Hamster"
	,"Hawk"
	,"Hedgehog"
	,"Heron"
	,"Herring"
	,"Hornet"
	,"Horse"
	,"Hummingbird"
	,"Hyena"
	,"Ibex"
	,"Ibis"
	,"Jackal"
	,"Jaguar"
	,"Jellyfish"
	,"Kangaroo"
	,"Kinkajou"
	,"Koala"
	,"Kouprey"
	,"Kudu"
	,"Lemur"
	,"Leopard"
	,"Lion"
	,"Llama"
	,"Lobster"
	,"Locust"
	,"Louse"
	,"Lyrebird"
	,"Magpie"
	,"Mallard"
	,"Mammoth"
	,"Manatee"
	,"Mandrill"
	,"Mink"
	,"Mole"
	,"Mongoose"
	,"Monkey"
	,"Moose"
	,"Mouse"
	,"Mosquito"
	,"Newt"
	,"Octopus"
	,"Okapi"
	,"Opossum"
	,"Ostrich"
	,"Otter"
	,"Owl"
	,"Oyster"
	,"Panther"
	,"Parrot"
	,"Panda"
	,"Pelican"
	,"Penguin"
	,"Pheasant"
	,"Pig"
	,"Pigeon"
	,"Pony"
	,"Porcupine"
	,"Porpoise"
	,"Quail"
	,"Quelea"
	,"Quetzal"
	,"Rabbit"
	,"Raccoon"
	,"Sheep"
	,"Rat"
	,"Raven"
	,"Reindeer"
	,"Rhinoceros"
	,"Salamander"
	,"Salmon"
	,"Sea lion"
	,"Sea urchin"
	,"Seahorse"
	,"Seal"
	,"Shark"
	,"Sheep"
	,"Shrew"
	,"Skunk"
	,"Sloth"
	,"Snail"
	,"Snake"
	,"Spider"
	,"Squirrel"
	,"Swan"
	,"Tapir"
	,"Tarsier"
	,"Termite"
	,"Tiger"
	,"Toad"
	,"Turtle"
	,"Wallaby"
	,"Walrus"
	,"Wasp"
	,"Water buffalo"
	,"Weasel"
	,"Whale"
	,"Wolf"
	,"Wolverine"
	,"Wombat"
	,"Wren"
	,"Yak"
	,"Zebra"
];

var colors = [
	 "Aqua"
	,"Aquamarine"
	,"Azure"
	,"Beige"
	,"Bisque"
	,"Black"
	,"Blue"
	,"Violet"
	,"Brown"
	,"Crimson"
	,"Cyan"
	,"Pink"
	,"Gray"
	,"Blue"
	,"Green"
	,"Khaki"
	,"Magenta"
	,"Orange"
	,"Red"
	,"Turquoise"
	,"White"
	,"Fuchsia"
	,"Gold"
	,"Yellow"
	,"Indigo"
	,"Ivory"
	,"Maroon"
	,"Rose"
	,"Purple"
	,"Brown"
	,"Silver"
	,"Teal"
];

var germanSyllables = [
	 "an"
	,"au"
	,"be"
	,"ch"
	,"da"
	,"de"
	,"di"
	,"ei"
	,"el"
	,"en"
	,"er"
	,"es"
	,"ge"
	,"he"
	,"ie"
	,"in"
	,"it"
	,"le"
	,"li"
	,"ne"
	,"re"
	,"se"
	,"si"
	,"st"
	,"te"
	,"un"
	,"an"
	,"abe"
	,"ach"
	,"and"
	,"auf"
	,"aus"
	,"ben"
	,"ber"
	,"das"
	,"den"
	,"der"
	,"die"
	,"ein"
	,"eit"
	,"end"
	,"ere"
	,"ers"
	,"ese"
	,"gen"
	,"hen"
	,"ich"
	,"ige"
	,"ine"
	,"ist"
	,"men"
	,"mit"
	,"nen"
	,"ren"
	,"sch"
	,"sei"
	,"sen"
	,"sie"
	,"ste"
	,"ten"
	,"ter"
	,"und"
	,"ung"
	,"ver"
];










