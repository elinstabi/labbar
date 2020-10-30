//labb13 och extrauppgift 1 // labb/upppgiftförklaring längst ner
/*
Jag ändrade lite i din kod för att visa ett litet exempel på hur du kan använda dig av en 
Student-klass samt spara data till localstorage, jag fixade bara funktionalitet för att 
lägga till samt ta bort studenter, men jag tänkte att för närvaro så kan man koppla 
radioknapparna till en onchange Eventlistener och när det triggas så kan man ändra 
närvaro i Student-objektet i dess precense property e,g precense: { "2020_20_28": "Sick" }.
Jag bifogar filen med exemplet samt en screenshot som visar ett exempel hur data är lagrad i localstorage.
*/
//localStorage.clear();
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
	}
	e.preventDefault();
	e.stopPropagation();
})

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

// class for creating new class objetcs
class Student {
	constructor(name, email, tel, course, date, id) {
		this.name = name;
		this.email = email;
		this.tel = tel;
		this.course = course;
		this.date = date;
		this.id = id;
	}
	present() {
		return `<tr><td><div class="input-group d-flex flex-column text-nowrap"><div><input id="present${student.id}" role="button" type="radio" name="attendance${student.id}"><label class="ml-2" role="button" for="present${student.id}">Närvarande</label></div><div><input id="shortAbsence${student.id}" role="button" type="radio" name="attendance${student.id}"><label class="ml-2" role="button" for="shortAbsence${student.id}">Kortare frånvaro</label></div><div><input id="absence${student.id}" role="button" type="radio" name="attendance${student.id}"><label class="ml-2" role="button" for="absence${student.id}">Frånvaro</label></div><div><input id="ill${student.id}" role="button" type="radio" name="attendance${student.id}"><label class="ml-2" role="button" for="ill${student.id}">Sjuk</label></div></div></td>
					<td>${student.name}</td><td>${student.email}</td><td>${student.tel}</td>	
					<td><button class="btn btn-secondary btn-sm text-nowrap py-0" data-removestudent="true" type="button">Ta bort</button></td>
				</tr>`;
	}
}

class Precence extends Student {
	constructor(name, email, tel, course, date, id, precence) {
	  super(name, email, tel, course, date, id);
	  this.precence = precence;
	}
	show() {
		return this.present()
	}
	/*hej() {
		if (document.querySelector(`#${student.precence}`)) {
			console.log('hej');
			document.querySelector(`#${student.precence}`).checked = true;
		}
	}*/
}

// Array for added students
let studentlist = [];

// Adding student to list function
const addStudent = () => {
	const selectedCourse = document.querySelector('[data-studentselect="edu"]').value;
	const date = new Date();
	const id = Date.now();

	student = new Student(
		document.querySelector('#studentName').value,
		document.querySelector('#studentEmail').value,
		document.querySelector('#studentTel').value,
		document.querySelector('[data-studentselect="edu"]').value,
		date,
		id,
	);

	document.querySelector(`[data-studentlist="${selectedCourse}"]`).innerHTML += student.present();
	
	studentlist.push(student);
	
	saveToLocalStorage();	
	radioBtnSaveLocalStorageOnChange();
}

const radioBtnSaveLocalStorageOnChange = () => {
	const checkedRadioBtn = document.querySelectorAll('[type="radio"]');
	if (checkedRadioBtn) {
		checkedRadioBtn.forEach(radioBtn => {
			radioBtn.addEventListener('change', e => {
				student = new Precence(
					student.name,
					student.email,
					student.tel,
					student.course,
					student.date,
					student.id,
					e.currentTarget.id
				);
				studentlist = studentlist.filter(s => s.id !== student.id);
				studentlist.push(student);
				saveToLocalStorage();
			})
		})
	}
}


const saveToLocalStorage = () => {
	localStorage.setItem('studenlists', JSON.stringify(studentlist));
}

const displayStudentsFromLocalStorage = () => {
	for(let studentinlist of studentlist){
		student = new Precence(
			studentinlist.name,
			studentinlist.email,
			studentinlist.tel,
			studentinlist.course,
			studentinlist.date,
			studentinlist.id,
			studentinlist.precence,
		);
		document.querySelector(`[data-studentlist="${studentinlist.course}"]`).innerHTML += student.show();
	}
}

const init = () => {
	// gets studentlist from localstorge
	const json = window.localStorage.getItem('studenlists');
	studentlist = JSON.parse(json);
	if(!studentlist){
		studentlist = [];
	}
	displayStudentsFromLocalStorage();
	radioBtnSaveLocalStorageOnChange();
}

init();