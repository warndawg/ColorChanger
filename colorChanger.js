var el;

var currentColor;

var colors = [
	"Green",
	"Red",
	"Blue"
];

var avaliableColors = [
'AliceBlue', 	
'AntiqueWhite', 	
'Aqua', 	
'Aquamarine', 	
'Azure', 	
'Beige', 	
'Bisque', 	
'Black', 	
'BlanchedAlmond', 	
'Blue', 	
'BlueViolet', 	
'Brown', 	
'BurlyWood', 	
'CadetBlue', 	
'Chartreuse', 	
'Chocolate', 	
'Coral', 	
'CornflowerBlue', 	
'Cornsilk', 	
'Crimson', 	
'Cyan', 	
'DarkBlue', 	
'DarkCyan', 	
'DarkGoldenRod', 	
'DarkGray', 	
'DarkGrey', 	
'DarkGreen', 	
'DarkKhaki', 	
'DarkMagenta', 	
'DarkOliveGreen', 	
'DarkOrange', 	
'DarkOrchid', 	
'DarkRed', 	
'DarkSalmon', 	
'DarkSeaGreen', 	
'DarkSlateBlue', 	
'DarkSlateGray', 	
'DarkSlateGrey', 	
'DarkTurquoise', 	
'DarkViolet', 	
'DeepPink', 	
'DeepSkyBlue', 	
'DimGray', 	
'DimGrey', 	
'DodgerBlue', 	
'FireBrick', 	
'FloralWhite', 	
'ForestGreen', 	
'Fuchsia', 	
'Gainsboro', 	
'GhostWhite', 	
'Gold', 	
'GoldenRod', 	
'Gray', 	
'Grey', 	
'Green', 	
'GreenYellow', 	
'HoneyDew', 	
'HotPink', 	
'IndianRed',  	
'Indigo',  	
'Ivory', 	
'Khaki', 	
'Lavender', 	
'LavenderBlush', 	
'LawnGreen', 	
'LemonChiffon', 	
'LightBlue', 	
'LightCoral', 	
'LightCyan', 	
'LightGoldenRodYellow', 	
'LightGray', 	
'LightGrey', 	
'LightGreen', 	
'LightPink', 	
'LightSalmon', 	
'LightSeaGreen', 	
'LightSkyBlue', 	
'LightSlateGray', 	
'LightSlateGrey', 	
'LightSteelBlue', 	
'LightYellow', 	
'Lime', 	
'LimeGreen', 	
'Linen', 	
'Magenta', 	
'Maroon', 	
'MediumAquaMarine', 	
'MediumBlue', 	
'MediumOrchid', 	
'MediumPurple', 	
'MediumSeaGreen', 	
'MediumSlateBlue', 	
'MediumSpringGreen', 	
'MediumTurquoise', 	
'MediumVioletRed', 	
'MidnightBlue', 	
'MintCream', 	
'MistyRose', 	
'Moccasin', 	
'NavajoWhite', 	
'Navy', 	
'OldLace', 	
'Olive', 	
'OliveDrab', 	
'Orange', 	
'OrangeRed', 	
'Orchid', 	
'PaleGoldenRod', 	
'PaleGreen', 	
'PaleTurquoise', 	
'PaleVioletRed', 	
'PapayaWhip', 	
'PeachPuff', 	
'Peru', 	
'Pink', 	
'Plum', 	
'PowderBlue', 	
'Purple', 	
'RebeccaPurple', 	
'Red', 	
'RosyBrown', 	
'RoyalBlue', 	
'SaddleBrown', 	
'Salmon', 	
'SandyBrown', 	
'SeaGreen', 	
'SeaShell', 	
'Sienna', 	
'Silver', 	
'SkyBlue', 	
'SlateBlue', 	
'SlateGray', 	
'SlateGrey', 	
'Snow', 	
'SpringGreen', 	
'SteelBlue', 	
'Tan', 	
'Teal', 	
'Thistle', 	
'Tomato', 	
'Turquoise', 	
'Violet', 	
'Wheat', 	
'White', 	
'WhiteSmoke', 	
'Yellow', 	
'YellowGreen'	
];

for (var i = 0; i < colors.length; i++) {
	addButton(colors[i],true);
}

for (var i = 0; i < avaliableColors.length; i++) {
	el = document.createElement("option");
	el.innerHTML = avaliableColors[i];
	document.getElementById('colorOptions').appendChild(el);
	document.getElementById('colorOptions').appendChild(el).value = avaliableColors[i];
}

function changeColor(color) {
    document.body.style.backgroundColor = color;
    currentColor = color;
}

function addButton(color,force) {
	if (!color) {
		var newButton = document.getElementById("colorOptions").selectedIndex - 1;
	}
	var newBtnColor = (color || avaliableColors[newButton]);
	if(!newBtnColor){
		return;
	}
	//if is in colors array, don't add
	if (!force && colors.indexOf(newBtnColor) !== -1){
		return;
	}
	if (!force){
		colors.push(newBtnColor);
	}
	el = document.createElement("button");
	el.innerHTML = color || avaliableColors[newButton];
	el.setAttribute('onclick','changeColor(\''+newBtnColor+'\')');
	el.setAttribute('id',newBtnColor);
	document.getElementById('colorButton').appendChild(el);
}

function removeButton() {
	var childColor = currentColor;
	var parent = document.getElementById("colorButton");
	var child = document.getElementById(childColor);
	parent.removeChild(child);
	document.body.style.backgroundColor = "white";
	var removeIndex = colors.indexOf(currentColor);
	colors.splice(removeIndex, 1);
}