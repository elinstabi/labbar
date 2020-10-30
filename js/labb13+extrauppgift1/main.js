//labb13 och extrauppgift 1 // labb/upppgiftförklaring längst ner

// validating the inputs when leaving them
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
	input.addEventListener('blur', () => {
		input.classList.remove('is-valid', 'is-invalid');
		input.classList.add(input.checkValidity() ? 'is-valid' : 'is-invalid');
	})
})

// validating the form on submit
const form = document.querySelector('.needs-validation');
form.addEventListener('submit', e => {
	if (form.checkValidity() === false) {
		form.classList.add('was-validated');
	} else {
		addStudent();
		resetForm(form);
		saveToLocalStorage();
	}
	e.preventDefault();
	e.stopPropagation();
})

// adding student from form into list. Creating static content and content from form input
// taking data-attr from select to place student in correct education
const addStudent = () => {
	const selectedCourse = document.querySelector('select');
	const trElem = document.createElement('tr');
	const tableElem = document.querySelector(`[data-studentlist="${selectedCourse.value}"]`);
	tableElem.append(trElem);

	const tdElem = document.createElement('td');
	tdElem.innerHTML = `<div class="input-group d-flex flex-column text-nowrap"><div><input id="present${Date.now()}" role="button" type="radio" name="attendance${Date.now()}"><label class="ml-2" role="button" for="present${Date.now()}">Närvarande</label></div><div><input id="shortAbsence${Date.now()}" role="button" type="radio" name="attendance${Date.now()}"><label class="ml-2" role="button" for="shortAbsence${Date.now()}">Kortare frånvaro</label></div><div><input id="absence${Date.now()}" role="button" type="radio" name="attendance${Date.now()}"><label class="ml-2" role="button" for="absence${Date.now()}">Frånvaro</label></div><div><input id="ill${Date.now()}" role="button" type="radio" name="attendance${Date.now()}"><label class="ml-2" role="button" for="ill${Date.now()}">Sjuk</label></div></div>`;
	trElem.append(tdElem);

	inputs.forEach(input => {	
		const studenInputVal = input.value;
		const tdElemInput = document.createElement('td');
		tdElemInput.textContent = studenInputVal;
		trElem.append(tdElemInput);
	})
	
	// saving localstorage on radiobtn change
	radioBtnSaveLocalStorageOnChange();

	const tdElemButton = document.createElement('td');
	tdElemButton.innerHTML = `<td><button class="btn btn-secondary btn-sm text-nowrap py-0" data-removestudent="true" type="button">Ta bort</button><`;
	trElem.append(tdElemButton);

	// removing student on removebtn click
	removeStudentOnBtnClick();
}

//reseting form after each submit
const resetForm = form => {
	form.reset();
	form.classList.remove('was-validated');
	inputs.forEach(input => {
		input.classList.remove('is-valid', 'is-invalid');
	})
	const successMessage = document.querySelector('#success'); 
	successMessage.classList.add('d-flex');
	setInterval( () => {
		successMessage.classList.remove('d-flex');
	}, 4000);
}

// save to localstorage
const studentLists = document.querySelector('[data-savetolocalstorage]'); 
const saveToLocalStorage = () => {
	localStorage.setItem('studenlists', studentLists.innerHTML);
}

// get from localstorage and set html
const savedLocalStorageHtml = localStorage.getItem('studenlists');
if (savedLocalStorageHtml) {
	studentLists.innerHTML = savedLocalStorageHtml;
}

// if for some reason wanting to clear local storage
// localStorage.clear();


// saving localstorage on radiobtn change
const radioBtnSaveLocalStorageOnChange = () => {
	const checkedRadioBtn = document.querySelectorAll('[type="radio"]');
	if (checkedRadioBtn) {
		checkedRadioBtn.forEach(radioBtn => {
			radioBtn.addEventListener('change', e => {
				const removeChecked = e.target.closest('.input-group').querySelectorAll('[type="radio"]');
				removeChecked.forEach(checked => {
					checked.classList.remove('checked');
				})
				e.target.classList.add('checked');
				saveToLocalStorage();
			})
		})
	}
}
radioBtnSaveLocalStorageOnChange();

// checked if class 'checked' exist on radiobutton and if thats the case adds checked to true
const checkedRadioBtn = document.querySelectorAll('[type="radio"]');
if (checkedRadioBtn) {
	checkedRadioBtn.forEach(radioBtn => {
		if (radioBtn.classList.value === 'checked') {
			radioBtn.checked = true;
		}
	})
}


// removing student on removebtn click
const removeStudentOnBtnClick = () => {
	const removeStundentBtn = document.querySelectorAll('[data-removestudent]');
	if (removeStundentBtn) {
		removeStundentBtn.forEach(studentRemove => {	
			studentRemove.addEventListener('click', e => {
				e.currentTarget.closest('tr').remove();
				saveToLocalStorage();
			})
		})
	}
}
removeStudentOnBtnClick();



// spara localstorage per dag blir i version 2.0 

/* 
Labb 13
Du ska i denna laborationsuppgift göra följande:
Skapa ett formular som innehåller minst en av följande inputs:
- Text
- Email
- Select
- Checkbox
- Submit
Formuläret får innehålla flera inputs av samma typ och även andra typer om du vill.
När du har skapat ditt formulär så vill jag att du validerar varje input när man trycker på submit knappen och visar tydlig feedback i webbläsaren så att användarna förstår vad som har blivit fel.
Alla inputs ska vara ifyllda för att valideringen ska bli godkänd.

Extrauppgift 1
Bygg en sida där man kan lägga till elever i en lista och 
markera i om dom är närvarande eller inte

När man har skrivit i elevens namn i en input och trycker på enter 
eller submit så ska detta namn automatiskt dyka upp i fönstret så man 
enkelt kan läsa ut vilka elever som är tillagda. 

Där vill jag även att man enkelt ska kunna ändra på varje elev om dom 
är närvarande eller inte, om det skulle bli fel.

När man är färdig med dagens närvarolista så vill jag även att ni kikar 
på hur man kan spara dagens lista för att enkelt kunna kolla tillbaka
på föregående dagar och eventuellt skicka in till respektive myndighet.

En bonus är om ni lyckas spara listan med elever så att dom finns kvar 
varje gång man går in på sidan utan att man behöver skriva in alla igen.  
Tänk dock på att det bör gå att ta bort elever som kanske inte längre går kvar på utbildningen
*/