const mongodb = require('mongoose');

const studentSchema = mongodb.Schema({

	_id: mongodb.Schema.Types.ObjectId,
	//title: { type: String, required: true },
	name: { type: String, required: true },
	email: { type: String, required: true },
	tel: { type: String, required: true },
	course: { type: String, required: true },
	//presence: {type: String, required: false},

	created: { type: Date, default: Date.now() }
})

module.exports = mongodb.model('Student', studentSchema);