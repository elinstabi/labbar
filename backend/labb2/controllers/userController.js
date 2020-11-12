const router = require('express').Router()
const userModel = require('../models/user/userModel')

router.post('/register', userModel.registerUser)
router.post('/login', userModel.loginUser)

router.patch('/:id', userModel.updateUser);

router.delete('/:id', userModel.deleteUser);

module.exports = router;