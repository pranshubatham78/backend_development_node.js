const jwt = require('jsonwebtoken');

const generateToken = (id) => {    // id : we get this from the user while creating their account or login in their account. 
    jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "500s" })};