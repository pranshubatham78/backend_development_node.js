// NOTE: I'm not here add the html content means html code. Soon, I'll guide you in that manner also.

const express = require('express');
const meta_data = require('./meta_data');
const contact = require("./contact");
const app = express();
app.use(express.json()); // handle json data

app.get('/', (req, res) => {
    try {
        res.status(200).json(meta_data);

    } catch (error) {
        res.status(404).send("Something went wrong");
    }
});

app.get('/about', (req, res) => {
    try {
        res.status(200).send("This is the simple webpage made with help of the express framework");
    
    } catch (eror) {
        res.status(404).send(error);
    }
});


app.get('/help', (req, res) => {
    try {
        res.status(200).send("Hi!, we're here to help you. Let us know what's your need");
    
    } catch (eror) {
        res.status(404).send(error);
    }
});



app.get('/contact', (req, res) => {
    try {
        res.status(200).json(contact);

    } catch (error) {
        res.status(404).send("Something went wrong");
    }
});

app.listen(5000);

