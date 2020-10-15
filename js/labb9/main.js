/*Laborationsuppgift 9
Du ska i denna laborationsuppgift göra följande:
Den här övningen går ut på att du ska skriva om nedan angivna funktioner till “ES6 arrow functions” ( => ).
Kontrollera även i consolen att du inte får några felmeddelanden och att allting fungerar som det ska.
Funktion 1:
const hello = function() { Console.log(‘Hello world’);
}
Funktion 2:
const greet = function(name) { console.log(‘Hej ‘ + name + ‘ hur mår du?’);
}
Funktion 3:
const calc = function(numberOne, numberTwo) { return numberOne + numberTwo
}
Funktion 4:
const tip = function(sum, percent) { let total = sum + sum * percent; return total;
}
*/

console.log('Funktion 1');
const hello = () => console.log('Hello world');
hello();

console.log('Funktion 2');
const greet = name => console.log(`Hej ${name} hur mår du?`);
greet('besökare av denna labb,');

console.log('Funktion 3');
const calc = (numberOne, numberTwo) => numberOne + numberTwo
console.log(calc(7, 8));

console.log('Funktion 4');
const tip = (sum, percent) => sum + sum * percent; 
console.log(tip(5, 10));