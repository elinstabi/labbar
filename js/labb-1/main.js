
/*
Uppgift 1:
Skapa en funktion som tar emot en persons namn och som skriver  
ut en hälsning i konsolfönstret e.g: “Hello namn”;
*/
console.log('Uppgift 1');

function whatsYourName(name){
	return (`Hello ${name}`);  
}
console.log(whatsYourName('Elin'))

/*
Uppgift 2:
Skapa en funktion som gör samma sak som i övningen ovan men som skriver 
ut hälsningen 10 gånger i konsolfönstret (använd er av en for-loop). 
*/           

console.log('Uppgift 2');

function whatsYourNameTimesTen(name){
	return (`Hello ${name}`);  
}
for (let i = 0; i < 10; i = i + 1) {
	console.log(whatsYourNameTimesTen('Elin'))
}

/*
Uppgift 3: 
Skapa en funktion som tar emot ett tal som argument. 
Numret representerar en persons ålder, funktionen ska skriva ut en färg beroende på åldern i 
konsolfönstret:  
Ålder: 0-12 = “white”  
Ålder: 13-18 = “green” 
Ålder: 19-25 = “red”   
Ålder: 26-99 = “blue”  
Annan ålder än ovan = “black”
*/

console.log('Uppgift 3');

function whatColor(age){
	if (age < 99 && age < 0) { 
		return 'black' 
	} else if (age <= 12) {
		return 'white'
	} else if (age <= 18){
		return 'green'
	} else if (age <= 25){
		return 'red'
	} else {
		return 'blue'
	} 
}
console.log(whatColor(10));
console.log(whatColor(25));
console.log(whatColor(-10));

/*
Uppgift 4:
Skapa ett program som frågar användaren efter ett tal mellan 1 och 100. 
Varje gång som användaren gissar fel ska funktionen skriva ut information 
till användaren om talet var lägre eller högre än det korrekta talet. 
När användaren har gissat rätt ska programmet skriva ut antal gånger 
det tog att gissa rätt. Input/Output 
Example :Input: 10Output: To LowInput: 90To HighInput: 65Output: Your guess is correct! Guess count = 3
*/

console.log('Uppgift 4 finns precis under CV:t');
// Genererar ett slumpmässigt nr mellan 1 och 100
let randomNumber = Math.floor(Math.random() * 100 + 1); 

// Räknar gissningar för att sedan kunna returna detta då man gissat rätt
let guess = 1; 

// Registerar clickeventet
document.getElementById("submitGuesses").onclick = function(){ 
	
	// Nummer som är gissat    
	let guessedNumber = document.getElementById("guessField").value; 

	// Textfält att byta ut
	let changeText = document.getElementById("guessNrOutput")
	
	// if = om man gissar rätt / else if = om man gillar ett för högt nummer // else om man gissar för högt
	if(guessedNumber == randomNumber) {     
		changeText.innerText = `Grattis! Du gissade rätt på ${guess} gissningar.`
	} 
	else if(guessedNumber > randomNumber){     
		guess++; 
		changeText.innerText = "Tyvärr fel. Testa ett mindre nummer."
	} 
	else{ 
		guess++; 
		changeText.innerText = "Tyvärr fel. Testa ett större nummer."
	} 
} 