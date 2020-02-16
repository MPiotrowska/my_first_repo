// Variables

var allButtons = document.getElementsByTagName('button');
var quoteButton = document.getElementById("quote");

// Functions

function changeButtonText() {
	allButtons = Array.from(allButtons)
	allButtons.map(function(button) {
		button.innerHTML = "Monika"
	})	
}

// Code

quoteButton.addEventListener("click", changeButtonText)




