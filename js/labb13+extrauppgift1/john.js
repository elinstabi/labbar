//labb13 och extrauppgift 1 // labb/upppgiftförklaring längst ner

// Klass för skapande av nya Student-objekt
class Student {
	constructor(name, email, tel, course) {
		this.name = name;
		this.email = email;
		this.tel = tel;
		this.course = course;
		this.precense = {};
	}
}

// Array för existerande studenter i systemet.
let students;

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
		displayStudents(); 
	}
	e.preventDefault();
	e.stopPropagation();
})

// Funktion som renderar studenterna i respektive tabell
function displayStudents(){
	document.querySelector(`[data-studentlist="frontend"]`).innerHTML = '';
	document.querySelector(`[data-studentlist="backend"]`).innerHTML = '';
	for(let student of students){
		createStudentElement(student);
	}
}

// Koden du skapade för att skapa en tr med student innehållet.
function createStudentElement(student) {
	const selectedCourse = student.course;
	const trElem = document.createElement('tr');
	const tableElem = document.querySelector(`[data-studentlist="${selectedCourse}"]`);
	tableElem.append(trElem);

	const tdElem = document.createElement('td');
	const uniqueStudent = student.id;
	tdElem.innerHTML = 
		`<div class="input-group d-flex flex-column text-nowrap">
			<div>
				<input id="present${uniqueStudent}" role="button" type="radio" name="attendance${uniqueStudent}">
				<label class="ml-2" role="button" for="present${uniqueStudent}">Närvarande</label>	
			</div>
			<div>
				<input id="shortAbsence${uniqueStudent}" role="button" type="radio" name="attendance${uniqueStudent}">
				<label class="ml-2" role="button" for="shortAbsence${uniqueStudent}">Kortare frånvaro</label>
			</div>
			<div>
				<input id="absence${uniqueStudent}" role="button" type="radio" name="attendance${uniqueStudent}">
				<label class="ml-2" role="button" for="absence${uniqueStudent}">Frånvaro</label>
			</div>
			<div>
				<input id="ill${uniqueStudent}" role="button" type="radio" name="attendance${uniqueStudent}">
				<label class="ml-2" role="button" for="ill${uniqueStudent}">Sjuk</label>
			</div>
		</div>`;
	trElem.append(tdElem);

	const tdElemInputName = document.createElement('td');
	tdElemInputName.textContent = student.name;
	trElem.append(tdElemInputName);

	const tdElemInputEmail = document.createElement('td');
	tdElemInputEmail.textContent = student.email;
	trElem.append(tdElemInputEmail);

	const tdElemInputTel = document.createElement('td');
	tdElemInputTel.textContent = student.tel;
	trElem.append(tdElemInputTel);

	const tdElemInputCourse = document.createElement('td');
	tdElemInputCourse.textContent = student.course;
	trElem.append(tdElemInputCourse);
	
	// saving localstorage on change
	//radioBtnSaveLocalStorageOnChange();

	const tdElemButton = document.createElement('td');
	tdElemButton.innerHTML = `<button class="btn btn-secondary btn-sm text-nowrap py-0" data-removestudent="true" type="button">Ta bort</button>`;
	tdElemButton.querySelector('button').addEventListener('click', () => removeStudentOnBtnClick(student.id));
	trElem.append(tdElemButton);
}

// adding student from form into list. Creating static content and content from form input
// taking data-attr from select to place student in correct education
const addStudent = () => {

	// Skapar ett nytt Student objekt med data som angavs i formuläret
	const student = new Student(
		document.querySelector('#studentName').value,
		document.querySelector('#studentEmail').value,
		document.querySelector('#studentTel').value,
		document.querySelector('#studentEdu').value,
	);

	student.id = student.course + student.tel + Math.random(); // lade till random om man vid test lägger till samma nummer

	// Lägger till studenten till student listan
	students.push(student);

	// adding possibilities to remove student
	//removeStudentOnBtnClick();
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
	console.log('händer');
	//localStorage.setItem('studenlists', studentLists.innerHTML);
	// Konverterar studentlistan till JSON-format och sparar den i localstorage.
	localStorage.setItem('studenlists', JSON.stringify(students));	
}

// get from localstorage and set html
//const savedLocalStorageHtml = localStorage.getItem('studenlists');
// if (savedLocalStorageHtml) {
// 	studentLists.innerHTML = savedLocalStorageHtml;
// }

// if for some reason wanting to clear local storage
// localStorage.clear();

const radioBtnSaveLocalStorageOnChange = () => {
	const checkedRadioBtn = document.querySelectorAll('[type="radio"]');
	if (checkedRadioBtn) {
		checkedRadioBtn.forEach(radioBtn => {
			radioBtn.addEventListener('change', () => {
				//saveToLocalStorage();
			})
		})
	}
}
radioBtnSaveLocalStorageOnChange();

const removeStudentOnBtnClick = (studentId) => {
	students = students.filter(s => s.id !== studentId);
	saveToLocalStorage();
	displayStudents();
	//const removeStundentBtn = document.querySelectorAll('[data-removestudent]');
	// if (removeStundentBtn) {
	// 	removeStundentBtn.forEach(studentRemove => {	
	// 		studentRemove.addEventListener('click', e => {
	// 			e.currentTarget.closest('tr').remove();
	// 			saveToLocalStorage();
	// 		})
	// 	})
	// }
}
//removeStudentOnBtnClick();

// Funktion som körs vid start.
function init() {
	// Hämtar existerande data from localstorage
	const json = window.localStorage.getItem('studenlists');
	students = JSON.parse(json); // Koverterar från JSON till studentlistan.
	if(!students){
		students = [];
	}
	displayStudents();
}

init();