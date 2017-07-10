
var maxNumberOfGuesses = 10;
var totalWins = 0;
var totalGuesses = 0;
var totalLosses = 0;
var totalGuessesLeft = 0;


  
function displayHead() {
    var x1 = document.getElementById("header");     	
}

function displayGuessLetter() {
	var x1 = document.getElementById("guessletter");     	
}

function displayWins() {
	var x1 = document.getElementById("wins");    	
}  

function displayLosses() {
	var x1 = document.getElementById("losses");      	
}

function displayGuessLeft() {
	var x1 = document.getElementById("guessleft");   	
} 

function displayYourGuesses() {
	var x1 = document.getElementById("yourguesses");	
}
  
function displayWinsChange(num) {
	var x1 = document.getElementById("numberOfWins");	
	document.getElementById("numberOfWins").innerHTML = Number(num);
}

function displayLossesChange(num) {
	var x1 = document.getElementById("numberOfLosses");	
	document.getElementById("numberOfLosses").innerHTML = Number(num);
}

function displayChangeInGuessesLeft(num) {
	document.getElementById("numberOfGuessesLeft").innerHTML = Number(num);
}
 
function startGame() {

	displayHead();
	displayGuessLetter();
	displayWins();
	displayLosses();
	displayGuessLeft();
	displayYourGuesses();

	//set and display totalnumber of guesses left
	totalGuessesLeft = maxNumberOfGuesses;
	displayChangeInGuessesLeft(totalGuessesLeft);

}



//	set gameLoses to zero
//  set guessesSoFar to zero

// start game
// getTry
// test getTry
// set win or loss.
// display results