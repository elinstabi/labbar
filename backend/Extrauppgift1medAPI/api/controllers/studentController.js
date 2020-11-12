const express = require('express')
const router = express.Router();
const studentModel = require('../models/students/studentModel');

router.get('/', studentModel.getStudents);
router.get('/:id', studentModel.getOneStudent)

router.post('/', studentModel.saveStudent);

router.delete('/:id', studentModel.deleteStudent);

module.exports = router;