
var maxNumberOfGuesses = 10;
var totalWins = 0;
var totalGuesses = 0;
var totalLosses = 0;
var totalGuessesLeft = 0;
var currentLetter = 0;
var gameHasStarted = false;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var currentAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  
function displayHead() {
    document.getElementById("header");     	
}

function displayGuessLetter() {
	document.getElementById("guessletter");     	
}

function displayWins() {
	document.getElementById("wins");    	
}  

function displayLosses() {
	document.getElementById("losses");      	
}

function displayGuessLeft() {
	document.getElementById("guessleft");   	
} 

function displayYourGuesses() {
	document.getElementById("yourguesses");	
}
  
function displayWinsChange(num) {		
	document.getElementById("numberOfWins").innerHTML = Number(num);
}

function displayLossesChange(num) {	
	document.getElementById("numberOfLosses").innerHTML = Number(num);
}

function displayChangeInGuessesLeft(num) {
	document.getElementById("numberOfGuessesLeft").innerHTML = Number(num);
}

function displayListOfLetters(alphabet_str) {
	document.getElementById("listofletters").innerHTML = alphabet_str;
}

function getRandomLetter() {
 	currentAlphabet = alphabet;
    displayListOfLetters(currentAlphabet);	
 	currentLetter = Math.floor(Math.random() * 25);
 	//alert("Current Letter: " + currentLetter); 
 	//alert(currentAlphabet[currentLetter]);
}



function startGame() {
	alert("starting game");
	// set vars for beginning of game
	maxNumberOfGuesses = 10;
	totalWins = 0;
	totalGuesses = 0;
	totalLosses = 0;
	totalGuessesLeft = 0;
	currentLetter = 0;
	gameHasStarted = true;

	//Display information
	displayHead();
	displayGuessLetter();
	displayWins();
	displayLosses();
	displayGuessLeft();
	displayYourGuesses();

	//set and display totalnumber of guesses left
	totalGuessesLeft = maxNumberOfGuesses;
	displayChangeInGuessesLeft(totalGuessesLeft);

	//get and set a random letter (number 0~25) for player to pick
	//set up currnet alphabet 
	getRandomLetter();

	   
}


// game start here with input
document.onkeyup = function(){
	// if game has not started, then start it.
	if (gameHasStarted === false) {
		startGame();
	}

	var x = document.getElementById("strOfGuesses");
	x.value = x.value.toUpperCase();
	alert(x.value);
}



//var validStatus = ["t","h","w","d" ]

  // How would we log...
 //    document.onkeyup = function(event) {
 //    var press = event.key;
 //    alert(press);
	// }


//	set gameLoses to zero
//  set guessesSoFar to zero

// start game
// getTry
// test getTry
// set win or loss.
// display results