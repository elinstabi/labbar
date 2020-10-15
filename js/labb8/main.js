/*
Labb 8
- Skapa en Array med 5 olika namn i.
- Ta bort den sista posten i din array.
- Ändra namnet på plats 2 (tank på att arrayer är 0 baserade)
- Lägg till ‘Joakim’ som ett namn i din array
- Sortera arrayen i bokstavsordning.
- Ta reda på vilken index plats ‘Joakim’ har
- Ta bort ‘Joakim’ igen
- Loopa igenom din array och logga varje namn i consolen
*/

console.log('Uppgift 1');
const namesArray = ['Eric', 'Olle', 'Tage', 'Edith', 'Elin'];
namesArray.pop()
console.log(namesArray);

console.log('Uppgift 2');
namesArray[1] = 'Jon';
console.log(namesArray);

console.log('Uppgift 3');
namesArray.push('Joakim');
console.log(namesArray);

console.log('Uppgift 4');
namesArray.sort();
console.log(namesArray);

console.log('Uppgift 5');
console.log(namesArray.indexOf('Joakim'));

console.log('Uppgift 6');
namesArray.splice(2, 1);
console.log(namesArray);

console.log('Uppgift 7 for loop');
for(let i = 0; i < namesArray.length; i++) {
	console.log(namesArray[i] + ' for loop');
}

console.log('Uppgift 7 for of');
for( name of namesArray ) {
    console.log(name + ' forOf');
}

console.log('Uppgift 7 forEach');
namesArray.forEach(name => {
	console.log(name + ' forEach');
});

