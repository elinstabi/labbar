// Labb13 och extrauppgift 1 
// Förbättringar, datum ej kunna klicka i dag om dagen ej finns på månaden
// samt kunna ta bort en student som ändå är sparad vid tidigare datum

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
		//addStudent();
		resetForm(form);
		addStud();
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
/*
// Class for creating new class objetcs
class Student {
	constructor(name, email, tel, course, id) {
		this.name = name;
		this.email = email;
		this.tel = tel;
		this.course = course;
		this.id = id;
		this.presence = {};
	}
	studentlisthtml() {
		return `<tr><td><div class="input-group d-flex flex-column text-nowrap"><div><input id="present${student.id}" role="button" type="radio" name="attendance${student.id}"><label class="ml-2" role="button" for="present${student.id}">Närvarande</label></div><div><input id="shortAbsence${student.id}" role="button" type="radio" name="attendance${student.id}"><label class="ml-2" role="button" for="shortAbsence${student.id}">Kortare frånvaro</label></div><div><input id="absence${student.id}" role="button" type="radio" name="attendance${student.id}"><label class="ml-2" role="button" for="absence${student.id}">Frånvaro</label></div><div><input id="ill${student.id}" role="button" type="radio" name="attendance${student.id}"><label class="ml-2" role="button" for="ill${student.id}">Sjuk</label></div></div></td>
					<td>${student.name}</td><td>${student.email}</td><td>${student.tel}</td>	
					<td><button class="btn btn-secondary btn-sm text-nowrap py-0" data-removestudent="${student.id}" type="button">Ta bort</button></td>
				</tr>`;
	}
	addpresency(stamp) {
		for(let studentinlist of studentlist){
			const presencies = document.querySelector(`#${studentinlist.presence[stamp]}`);
			if (presencies) {
				presencies.checked = true;
			}
		}
	}
}

// Array for added students
let studentlist = [];

// Adding student to list function
const addStudent = () => {
	const selectedCourse = document.querySelector('[data-studentselect="edu"]').value;
	const id = Date.now();

	student = new Student(
		document.querySelector('[data-studentinput="name"]').value,
		document.querySelector('[data-studentinput="email"]').value,
		document.querySelector('[data-studentinput="tel"]').value,
		document.querySelector('[data-studentselect="edu"]').value,
		id,
	);
	
	document.querySelector(`[data-studentlist="${selectedCourse}"]`).innerHTML += student.studentlisthtml();
	studentlist.push(student);
	saveToLocalStorage();	
	radioBtnOnChange();
	removeStudentOnClick();
}*/
const getStudents = () => {
	fetch('http://localhost:9999/api/students/')
	.then(res => res.json())
	.then(data => {
		student = data;
		//listTodos();
		console.log(data);
	})

}
getStudents();
const addStud = () => {
	let title = document.querySelector('[data-studentinput="name"]').value;
	
	fetch('http://localhost:9999/api/students/', {
		method:'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		},
		body: JSON.stringify({
			title: title
		})
	})
	.then(res => console.log(res.json()))
	//.then(() => console.log(getStudents()))

}
/*
// Adds presency to students on radiobutton change and saves it to localstorage
const radioBtnOnChange = () => {
	const checkedRadioBtn = document.querySelectorAll('[type="radio"]');
	checkedRadioBtn.forEach(radioBtn => {
		radioBtn.addEventListener('change', e => {
			for(let studentinlist of studentlist){
				const regex = /\d+/g;
				const addPresency = e.target.id.match(regex);
				if (parseInt(addPresency) === studentinlist.id){
					const stamp = `${document.querySelector('[data-date="getMonth"]').value}:${document.querySelector('[data-date="getDay"]').value}:${document.querySelector('[data-date="getMinutes"]').value}`;
					studentinlist.presence[stamp] = `${e.target.id}`;
					saveToLocalStorage();
				}
			}
		})
	})
}

// Removes student in list in studenlistarray and localstorage
// function 2.0 would be to keep student the previous days
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

const getDateSelects = document.querySelectorAll('[data-date]');
// When changing dateselect get aqurate presency
const dateSelectOnChange = () => {
	getDateSelects.forEach(select => {
		select.addEventListener('change', () => {
			seletedDate();
		})
	})
	const seletedDate = () => {
		// Removes checked on checkboxes
		const checkedRadioBtn = document.querySelectorAll('[type="radio"]');
		checkedRadioBtn.forEach(radioBtn => {
			if (radioBtn.checked === true) {
				radioBtn.checked = false;
			}
		})
		// Sets new radio checked based on studentlist at the specific date
		const stamp = `${document.querySelector('[data-date="getMonth"]').value}:${document.querySelector('[data-date="getDay"]').value}:${document.querySelector('[data-date="getMinutes"]').value}`;
		student.addpresency(stamp);
	}
}

// Set date on selects on load. Choosing not to save to localstorage so not by misstake changing student
// precency on wrong date. Also with min for testing function not needing to wait one day to see if works.
const setDate = () => {
	const getDate = new Date();	
	for(select of getDateSelects) {
		const getDatasetGetdate = select.dataset.date;
		const convertDatasetToMethod = getDate[`${getDatasetGetdate}`]();
		select.value = convertDatasetToMethod;
	}
}

// Displaying the students from studentlistarray on init
const displayStudents = () => {
	for(let studentinlist of studentlist){
		student = new Student(
			studentinlist.name,
			studentinlist.email,
			studentinlist.tel,
			studentinlist.course,
			studentinlist.id,
			studentinlist.presence,
		);
		document.querySelector(`[data-studentlist="${studentinlist.course}"]`).innerHTML += student.studentlisthtml();
		const stamp = `${document.querySelector('[data-date="getMonth"]').value}:${document.querySelector('[data-date="getDay"]').value}:${document.querySelector('[data-date="getMinutes"]').value}`;
		student.addpresency(stamp);
	}
}

// Saving the studentlist to localstorage
// localStorage.clear(); // if wanting to clear localstorage
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
	setDate();
	displayStudents();
	radioBtnOnChange();
	removeStudentOnClick();
	dateSelectOnChange();
}

init();*/