/* Labb 11
Du ska i denna laborationsuppgift göra följande:
I den här uppgiften ska du skapa en hemsida som visar dagens datum och den aktuella tiden.
Du ska skapa ett grafiskt gränssnitt med html och css men hur det ska se ut väljer du själv. 
För att hämta tid och datum bör du använda dig av Date objektet som finns inbyggt i Javascript 
men du får själv söka information om hur du använder detta.
Tänk på att klockan ska uppdateras 1 gång i sekunden så att det alltid visar rätt!
*/

const getDateDivs = document.querySelectorAll('[data-getdate]');
const handleTimeUnit = (timeUnit) => timeUnit < 10 ? '0' + timeUnit : timeUnit;
 
const setDate = () => {
    const getDate = new Date(); 
    for(dateDiv of getDateDivs) {
        const getDatasetGetdate = dateDiv.dataset.getdate;
        let convertDatasetToMethod = getDate[`${getDatasetGetdate}`]();
        if (getDatasetGetdate === 'getMonth'){
            convertDatasetToMethod++;
        }
        dateDiv.innerHTML = handleTimeUnit(convertDatasetToMethod);
    }
}

setDate();

setInterval( () => {
	setDate();
}, 1000);


//if wanting text instead of numbers
const getDateAsText = new Date();

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
console.log(months[getDateAsText.getMonth()]);

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log(days[getDateAsText.getDay()]);




