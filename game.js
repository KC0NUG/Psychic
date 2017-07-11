
var guessLimit = 3;
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

var array_of_aplhabet = [
"A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];


  
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
	//document.getElementById("listofletters").innerHTML = alphabet_str;
}

function UpdateGuessesLeft(){
	totalGuessesLeft--;
	document.getElementById("numberOfGuessesLeft").innerHTML = Number(totalGuessesLeft);
	if (totalGuessesLeft<=0){
		alert("Sorry, You Lost");
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
    displayListOfLetters(currentAlphabet);	
 	currentLetter = Math.floor(Math.random() * 25);
 	//alert("Current Letter: " + currentLetter); 
 	alert("Letter for player to pick: " + currentAlphabet[currentLetter]);
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




function checkResponse(){
	// check if game has started if not start it
	if (gameHasStarted === false){
		startTheGame();
		} //if game has started

	// get players choice and process it	
	var x = document.getElementById("Choice");
	x.value = x.value.toUpperCase();

	// Check if players choice = computers choice
	if (x.value===currentAlphabet[currentLetter]) {
		// Winner
		alert("winner");
		UpDateTotalWins();
		startNewGame();
		
		} else {
			// Did not win
			//alert("choose again");

			// if x.value is a valid entry i.e a character A~Z
			var goodval = currentAlphabet.includes(x.value);
			
			if (goodval===true){						
				
				if (listofGuesses.length===0){
				 	listofGuesses = x.value;
				 	UpdateGuessesLeft();
				  } else {	
				  		var choiceAlreadyChoosen = listofGuesses.includes(x.value);
				  		if (choiceAlreadyChoosen===false){
				  			var tmp = listofGuesses.concat(x.value);
				  			listofGuesses = tmp;				  			 	
				 			// alert(tmp.length);
				 			UpdateGuessesLeft();
				 			}
				 		}
				// Update your guesses sofar
				//if listofGuess is empty add element
				//eles  if not choosen before add
				// Update Guesses Left (if not alooser)
				
				//display list
				displayListOfGuesses();
			}	
		
		} //else
	//Set players choice 
	x.value=""; 
	
	} //checkResponse