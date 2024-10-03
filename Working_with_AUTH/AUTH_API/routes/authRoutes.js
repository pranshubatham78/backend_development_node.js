const express = require('express');
const {register , authUser} = require('../controllers/authControllers');
const router = express.Router();

//Register route
router.post('/register', register);

//Login route
router.post('/login', authUser);

module.exports = router;