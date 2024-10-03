const jwt = require('jsonwebtoken');

const generateToken = (id) => {    // id : we get this from the user while creating their account or login in their account. 
   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "500s" })};

module.exports = generateToken;