// var colors=["rgb(255, 0, 0 )",
//             "rgb(255, 255, 0 )",
//             "rgb(255, 0, 255 )",
//             "rgb(0, 255, 0 )",
//             "rgb(0, 0, 255 )",
//             "rgb(0, 255, 255 )"
//             ];
 
// var squares=document.querySelectorAll(".square");

// var pickedColor = colors[4];


// var colorDisplay=document.getElementById("colorDisplay");
 
//  colorDisplay.textContent= pickedColor;
 
//  for(var i=0; i< squares.length; i++){
// 	squares[i].style.backgroundColor= colors[i];


// 	squares[i].addEventListener("click",function(){
// 		var clickedColor = this.style.background;
// 		if(clickedColor === pickedColor) {
// 			alert("Correct!");
// 		} else {
// 			alert("WRONG!!!");
// 		}


		 
// 	});
// }

var colors = generateRandomColors(6);
var numSquares = 6;

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i=0; i < squares.length; i++){
    	if(colors[i]){
    		squares[i].style.backgroundColor = colors[i];
    	}else{
    		squares[i].style.display = "none";
    	}
    }

});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
     colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i=0; i < squares.length; i++){

    		squares[i].style.backgroundColor = colors[i];
    
    		squares[i].style.display = "block";}
    
});

resetButton.addEventListener("click", function(){
   //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random color
     pickedColor = pickColor();
     //change display color to picked color
     colorDisplay.textContent = pickedColor;
     this.textContent = "New Color";

      messageDisplay.textContent = " ";
     //change colors of the square
     for(var i=0; i < squares.length; i++){
     	squares[i].style.backgroundColor = colors[i];
     }

     h1.style.background = "steelblue";

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!!"
			changeColor(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!!"

		}
	});
}

function changeColor(color){
	for(var i=0; i < squares.length; i++){

		squares[i].style.backgroundColor= color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

    for(var i=0; i < num; i++){
     
     arr.push(randomColor());
    
    }


	return arr;
}
               

function randomColor(){
  var r= Math.floor(Math.random()*256);
  var g= Math.floor(Math.random()*256);
  var b= Math.floor(Math.random()*256);

  return "rgb(" + r + ", " + g + ", " + b + ")";


}

