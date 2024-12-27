const express = require('express');
const {register , login, requestPasswordReset, resetPassword}= require('../controllers/roleControllers');
const {protect} = require("../middleware/authMiddleware");
const router = express.Router();

router.post('/register', register);
router.post('/login',login);
router.post('/forget-password', requestPasswordReset);
router.post('/reset-password' , resetPassword);


module.exports = router;