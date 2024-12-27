const express = require('express');
const connect = require('./config/db');
const roleauth = require('./routes/roleRoutes');
const roleuser = require('./routes/userroutes');
const {protect} = require("./middleware/authMiddleware");
const path = require("path");

const app = express();

// load environment from the .env file
require('dotenv').config();

// calling the database
connect();

//middleware for parse the json data
app.use(express.json());

// Server static files
app.use(express.static(path.join(__dirname,"public")));

//Routes
app.use('/api/auth',protect,roleauth);
app.use('/api/users', roleuser);

// server starting point

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log(`server is running on the port${PORT}`);
});