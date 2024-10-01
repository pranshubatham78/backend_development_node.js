const express = require('express');
const {resgiterUser , authUser} = (require('../controllers/authControllers'));
const router = express.Router();

//Register route
router.post('/register', resgiterUser);

//Login route
router.post('/login', authUser);

module.exports = router;