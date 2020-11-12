const mongodb = require('mongoose');

const Student = require('./studentSchema');

exports.getStudents = (req, res) => {
	Student.find()
	.then(data => res.status(200).json(data))
	.catch(err => res.status(500).json(err))
}

exports.getOneStudent = (req, res) => {
	Student.findById(req.params.id)
	.then(data => res.status(200).json(data))
	.catch(err => res.status(500).json(err))
}

exports.saveStudent = (req, res) => {
	const student = new Student ({
		_id: new mongodb.Types.ObjectId,
		//title: req.body.title
		name: req.body.name,
		email: req.body.email,
		tel: req.body.tel,
		course: req.body.course
	})
	student.save()
	
	.then(() => {
		res.status(201).json({
			statusCode: 201,
			status: true,
			message: 'The student was created successfully'
		})
	})
	.catch(() => {
		res.status(500).json({
			statusCode: 500,
			status: false,
			message: 'Failed to add student'	
		})
	})
}

exports.deleteStudent = (req, res) => {
	Student.deleteOne({_id: req.params.id})
	.then(() => {
		res.status(200).json({
			statusCode: 200,
			status: true,
			message: 'Student deleted'
		})
	})
	.catch(() => {
		res.status(500).json({
			statusCode: 500,
			status: false,
			message: 'Failed to delete student'
		})
	})
}