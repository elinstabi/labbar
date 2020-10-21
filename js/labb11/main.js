/* Labb 10
Du ska i denna laborationsuppgift göra följande:
I den här uppgiften ska du skapa en hemsida som visar dagens datum och den aktuella tiden.
Du ska skapa ett grafiskt gränssnitt med html och css men hur det ska se ut väljer du själv. 
För att hämta tid och datum bör du använda dig av Date objektet som finns inbyggt i Javascript 
men du får själv söka information om hur du använder detta.
Tänk på att klockan ska uppdateras 1 gång i sekunden så att det alltid visar rätt!
*/

const getDateDivs = document.querySelectorAll('[data-getdate]');

const setDate = () => {
	const getDate = new Date();	
	for(dateDiv of getDateDivs) {
		const getDatasetGetdate = dateDiv.dataset.getdate;
		const convertDatasetToMethod = getDate[`${getDatasetGetdate}`]();
		if (getDatasetGetdate === 'getMonth'){
			dateDiv.innerHTML = convertDatasetToMethod + 1;
		} else {
			dateDiv.innerHTML = convertDatasetToMethod;
		}
	}
}
setDate();

setInterval( () => {
	setDate();
}, 1000);

