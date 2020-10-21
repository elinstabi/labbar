/* Labb 10
Du ska i denna laborationsuppgift göra följande:
- Skapa en funktion som tar in bredd, längd och höjd som parametrar och ger tillbaka volymen av en kub som svar:
“funktion(bredd, längd, höjd)”
- Skapa en funktion som tar in en diameter som parameter och ger tillbaka arean på en cirkel som svar:
“funktion(diameter)”
Testa dina funktioner genom att skriva ut svaren i consolen.
*/

console.log('Funktion Cube Volume');
const calcCubeVol = cubeMeasure => cubeMeasure * cubeMeasure * cubeMeasure
console.log(calcCubeVol(10));


console.log('Funktion Cirquel Area');
const calcCircArea = circMeasure => circMeasure / 2 * circMeasure / 2 * Math.PI
console.log(calcCircArea(10));