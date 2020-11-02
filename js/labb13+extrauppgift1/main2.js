//labb13 och extrauppgift 1 // labb/upppgiftförklaring längst ner


// Validating the inputs when leaving them
const inputs = document.querySelectorAll('form input');
inputs.forEach(input => {
	input.addEventListener('blur', () => {
		input.classList.remove('is-valid', 'is-invalid');
		input.classList.add(input.checkValidity() ? 'is-valid' : 'is-invalid');
	})
})

// Validating the form on submit
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

// Reseting form after each submit
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

// Class for creating new class objetcs
class Student {
	constructor(name, email, tel, course, date, id) {
		this.name = name;
		this.email = email;
		this.tel = tel;
		this.course = course;
		this.date = date;
		this.id = id;
	}
	studentlisthtml() {
		return `<tr><td><div class="input-group d-flex flex-column text-nowrap"><div><input id="present${student.id}" role="button" type="radio" name="attendance${student.id}"><label class="ml-2" role="button" for="present${student.id}">Närvarande</label></div><div><input id="shortAbsence${student.id}" role="button" type="radio" name="attendance${student.id}"><label class="ml-2" role="button" for="shortAbsence${student.id}">Kortare frånvaro</label></div><div><input id="absence${student.id}" role="button" type="radio" name="attendance${student.id}"><label class="ml-2" role="button" for="absence${student.id}">Frånvaro</label></div><div><input id="ill${student.id}" role="button" type="radio" name="attendance${student.id}"><label class="ml-2" role="button" for="ill${student.id}">Sjuk</label></div></div></td>
					<td>${student.name}</td><td>${student.email}</td><td>${student.tel}</td>	
					<td><button class="btn btn-secondary btn-sm text-nowrap py-0" data-removestudent="${student.id}" type="button">Ta bort</button></td>
				</tr>`;
	}
}

// Class extend for when adding precence //this can also be directly in Student but wanted to try the extends
class Presence extends Student {
	constructor(name, email, tel, course, date, id, presence) {
	  super(name, email, tel, course, date, id);
	  this.presence = presence;
	}
	addpresency() {
		const presencies = document.querySelector(`#${student.presence}`);
		if (presencies) {
			presencies.setAttribute('checked', 'checked');
		}
	}
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
	
	document.querySelector(`[data-studentlist="${selectedCourse}"]`).innerHTML += student.studentlisthtml();
	studentlist.push(student);
	saveToLocalStorage();	
	radioBtnOnChange();
	removeStudentOnClick();
}

// Adds presency to students on radiobutton change and saves it to localstorage
const radioBtnOnChange = () => {
	const checkedRadioBtn = document.querySelectorAll('[type="radio"]');
	checkedRadioBtn.forEach(radioBtn => {
		radioBtn.addEventListener('change', e => {
			for(let studentinlist of studentlist){
				const regex = /\d+/g;
				const addPresency = e.target.id.match(regex);
				if (parseInt(addPresency) === studentinlist.id){
					studentinlist.presence = e.target.id;
					saveToLocalStorage();
				}
			}
		})
	})
}

// Removes student in list in studenlistarray and localstorage
const removeStudentOnClick = () => {
	const removeStudentBtn = document.querySelectorAll('[data-removestudent]');
	removeStudentBtn.forEach(removeBtn => {
		removeBtn.addEventListener('click', e => {
			e.target.closest('tr').remove();
			studentlist = studentlist.filter(s => s.id !== parseInt(removeBtn.dataset.removestudent));
			saveToLocalStorage();
		})
	})
}

// Displaying the students from studentlistarray on init
const displayStudents = () => {
	for(let studentinlist of studentlist){
		student = new Presence(
			studentinlist.name,
			studentinlist.email,
			studentinlist.tel,
			studentinlist.course,
			studentinlist.date,
			studentinlist.id,
			studentinlist.presence,
		);
		document.querySelector(`[data-studentlist="${studentinlist.course}"]`).innerHTML += student.studentlisthtml();
		student.addpresency();
	}
}

// Saving the studentlist to localstorage
const saveToLocalStorage = () => {
	localStorage.setItem('studenlists', JSON.stringify(studentlist));
}

const init = () => {
	// gets studentlist from localstorge
	const json = window.localStorage.getItem('studenlists');
	studentlist = JSON.parse(json);
	if(!studentlist){
		studentlist = [];
	}
	displayStudents();
	radioBtnOnChange();
	removeStudentOnClick();
}

init();