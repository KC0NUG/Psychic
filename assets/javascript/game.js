
var guessLimit = 9;
var totalWins = 0;
var totalGuesses = 0;
var totalLosses = 0;
var totalGuessesLeft = 0;
var currentLetter = 0;
var gameHasStarted = false;
var newGame = true;

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var currentAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var listofGuesses = "";

  
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

function displayListOfGuesses(){
		document.getElementById("strOfGuesses").innerHTML = listofGuesses;	
}

function displayLossesChange(num) {	
	document.getElementById("numberOfLosses").innerHTML = Number(num);
}

function displayChangeInGuessesLeft(num) {
	document.getElementById("numberOfGuessesLeft").innerHTML = Number(num);
}

function UpdateGuessesLeft(){
	totalGuessesLeft--;
	document.getElementById("numberOfGuessesLeft").innerHTML = Number(totalGuessesLeft);
	if (totalGuessesLeft<=0){
		//alert("Sorry, You Lost");
		//Update losses
		totalLosses++;
		displayLossesChange(totalLosses);
		//start new game
		startNewGame();
	}
}


function UpDateTotalWins(){
	//update wins
	totalWins++;
	document.getElementById("numberOfWins").innerHTML = Number(totalWins);
}



function getRandomLetter() {
 	currentAlphabet = alphabet;    
 	currentLetter = Math.floor(Math.random() * 25);
 	//alert("Current Letter: " + currentLetter); 
 	//alert("Letter for player to pick: " + currentAlphabet[currentLetter]);
}


function startTheGame() {
	// alert("starting game");
	// set vars for beginning of game
	totalWins = 0;
	totalLosses = 0;
	gameHasStarted = true;
	startNewGame();
}


function startNewGame() {
	// alert("starting new game");
	// set vars for beginning of game
	if (gameHasStarted=== false){
		startTheGame();
	}
	else {
		newGame = false;
		maxNumberOfGuesses = guessLimit;
		totalGuesses = 0;
		totalGuessesLeft = 0;
		currentLetter = 0;
		listofGuesses = "";
	
		//Display information
		displayHead();
		displayGuessLetter();
		displayWins();
		displayLosses();
		displayGuessLeft();
		displayYourGuesses();
		displayListOfGuesses();	

		//set and display totalnumber of guesses left
		totalGuessesLeft = maxNumberOfGuesses;
		displayChangeInGuessesLeft(totalGuessesLeft);

		//get and set a random letter (number 0~25) for player to pick
		//set up currnet alphabet 
		getRandomLetter(); 
		} // else if game not started 
}


// get keyup keys and assign to xInPutChar
var xInPutChar = "";
$(document).ready(function(){
	$(document).on("keyup", "body", function(e){
	console.log(e.key, e.keyCode, e.which);
	xInPutChar = String(e.key);
	xInPutChar = xInPutChar.toUpperCase();	
	checkResponse();});
});



function checkResponse(){
	// check if game has started if not start it
	if (gameHasStarted === false){
		startTheGame();
		} //if game has started
	// get players choice and process it	
	
	// Check if players choice = computers choice
	if (xInPutChar===currentAlphabet[currentLetter]) {
		// Winner
		//alert("winner");
		UpDateTotalWins();
		startNewGame();
		
		} else {
			// Did not win
			//alert("choose again");

			// if xInPutChar is a valid entry i.e a character A~Z
			var goodval = currentAlphabet.includes(xInPutChar);
			
			if (goodval===true){						
				//check for empty list of bad guesses
				if (listofGuesses.length===0){
				 	listofGuesses = xInPutChar;
				 	UpdateGuessesLeft();
				  } else {	//have 1 or more bad guesses check if choice already in bad choices
				  		var choiceAlreadyChoosen = listofGuesses.includes(xInPutChar);
				  		if (choiceAlreadyChoosen===false){
				  			var tmp = listofGuesses.concat(xInPutChar);
				  			listofGuesses = tmp;			 			
				 			UpdateGuessesLeft();
				 			}
				 		}
								
				//display list
				displayListOfGuesses();
			}	
		
		} //else
	//Set players choice 
	xInPutChar=""; 
	
	} //checkResponse	