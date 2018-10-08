var numOfColors = 6;
var colors = [];
var pickedColor;

//Selecting HTML Elements to manipulate
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("button");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
	//Initialize the Mode Listeneres
	setupModeButtons();
	//Initialize/attach Event Listeners to Squares
	setupSquares();

	reset();
}
function setupModeButtons() {
	for(var i=0; i<modeButton.length; i++) {
	modeButton[i].addEventListener("click", function() {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfColors = 3 : numOfColors = 6;
			reset();
		});
	}
}
function setupSquares() {
	for(var i=0; i<squares.length; i++) {
			squares[i].addEventListener("click",function(){
			var selectedColor = this.style.backgroundColor;
			if(selectedColor === pickedColor) {
				 messageDisplay.textContent = "Correct!";
				 changeColor(selectedColor);
				 h1.style.backgroundColor = pickedColor;
				 resetButton.textContent = "Play Again?"
			} else {
				messageDisplay.textContent = "Try Again";
				this.style.backgroundColor = "#232323";

				}
		});
	}
}
function reset() {
	//Shuffle the Sqares Color
	colors = colorShuffle(numOfColors);
	for(var i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//Shuffle the PickedColor
	pickedColor = colors[colorPicker()];
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
}
//Game Reset Button
resetButton.addEventListener("click", function() {
	reset();
});
function changeColor(color) {
	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}
function colorPicker() {
	var random = Math.floor(Math.random() * colors.length);
	return random;
}
function colorShuffle(num) {
	//create blank Array
	var arr = [];
	//looping through Array
	for(var i=0; i<num; i++) {
		//pushing color values in Array
		arr.push(colorMixer());
	}
	//retun Array
	return arr;
}
function colorMixer() {
	//pick random Red channel value
	var r = Math.floor(Math.random() * 256);
	//Pick random Green channel value
	var g = Math.floor(Math.random() * 256);
	//Pick random Blue channel value
	var b = Math.floor(Math.random() * 256);
	// return rgb color value
	return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}