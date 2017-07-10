// alert("I am in game.js");
// alert("But I am not in correct directory");


//  set max number of trys = 10

var maxNumberOfTrys = 0;

//  set gameWins to zero
var gameWins = 0;
//  display gameWins
//alert("gameWins: " + gameWins);

  
function displayHead() {
    var x1 = document.getElementById("header");
    // x.style.fontSize = "25px"; 
    x1.style.color = "red"; 	
}

function displayGuessLetter() {
var x1 = document.getElementById("guessletter");
    // x.style.fontSize = "25px"; 
    x1.style.color = "red"; 	
}

function displayWins() {
	var x1 = document.getElementById("wins");
    // x.style.fontSize = "25px"; 
    x1.style.color = "red"; 	
}  

function displayLosses() {
	var x1 = document.getElementById("losses");
    // x.style.fontSize = "25px"; 
    x1.style.color = "red"; 	
}

function displayGuessLeft() {
var x1 = document.getElementById("guessleft");
    // x.style.fontSize = "25px"; 
    x1.style.color = "red"; 	
} 

function displayYourGuesses() {
var x1 = document.getElementById("yourguesses");
    // x.style.fontSize = "25px"; 
    x1.style.color = "red"; 	
}
  
 
function startGame() {

	displayHead();
	displayGuessLetter();
	displayWins();
	displayLosses();
	displayGuessLeft();
	displayYourGuesses();
}



//	set gameLoses to zero
//  set guessesSoFar to zero

// start game
// getTry
// test getTry
// set win or loss.
// display results