
var maxNumberOfGuesses = 10;
var totalWins = 0;
var totalGuesses = 0;
var totalLosses = 0;
var totalGuessesLeft = 0;
var currentLetter = 0;


  
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
 	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //final int N = alphabet.length();
    //alert(alphabet);
	displayListOfLetters(alphabet);
	//alert(currentLetter);   
 	currentLetter = Math.floor(Math.random() * 25);
 	alert("Current Letter: " + currentLetter); 
 	//alert(alphabet[currentLetter]);
}



function startGame(event) {
	displayHead();
	displayGuessLetter();
	displayWins();
	displayLosses();
	displayGuessLeft();
	displayYourGuesses();

	//set and display totalnumber of guesses left
	totalGuessesLeft = maxNumberOfGuesses;
	displayChangeInGuessesLeft(totalGuessesLeft);

	//pick a random letter (number 0~25)
	// getRandomLetter();

	// var x = event.keyCode;
	// alert("key: " + x);
   
}

//startGame();
// document.getElementById("strOfGuesses").onkeyup = function(){
	document.onkeyup = function(){
	alert("I am here");
	var x = document.getElementById("strOfGuesses");
	x.value = x.value.toUpperCase();
	alert(x.value);
}

function check(){
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