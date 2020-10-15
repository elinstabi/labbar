//labb 7 got 

/*Skapa två stycken variabler av typen Number. 
Skriv sedan ut i consolen resultaten av följande:
- Nummer 1 + Nummer 2,
- Nummer 1 – Numemr 2,
- Nummer 1 * Nummer 2.*/

const nr1 = 1;
const nr2 = 2;

console.log(nr1 + nr2);
console.log(nr1 - nr2);
console.log(nr1 * nr2);


/*
Skriv ut i konsolen:
“ <Nummer1> plus <Nummer2> är: <summan> “.
*/

console.log(`${nr1} plus ${nr2} är ${(nr1 + nr2)}`);

/*
Skapa ett objekt med javascript som innehåller följande variabler / datatyper:
- Förnamn / Text,
- Efternamn / Text,
- Ålder / Number
Skriv sedan ut det här objektet i konsolen i följande format:
“Hej, mitt namn är <förnamn> <efternamn> och jag är <ålder> år gammal”.
*/

const user = {
	firstName:'Elin',
	lastName: 'Ståbi',
	age: 38
} 

console.log(`Hej, mitt namn är ${user.firstName} ${user.lastName} och jag är ${user.age} år gammal`);