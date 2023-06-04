const express = require('express');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const router = express.Router();
const userController = require('./user.controller');
const userValidation = require('./user.validation')

router.route('/:id').get(auth, validate(userValidation.getUserById), userController.getUserById)
.patch(validate(userValidation.register), userController.register);

module.exports = router;