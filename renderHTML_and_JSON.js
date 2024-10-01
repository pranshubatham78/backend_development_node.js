// NOTE: I'm here render HTML and JSON content to the server.

const express = require('express');
const contact = require("./practise_simple_web/contact");
const app = express();
app.use(express.json()); // handle json data

app.get('/', (req, res) => {
    try {
        const username = req.query.name || "";
        res.status(200).send(`
            <input type="text" palceholder="User name" value="${username}"/>
            <button>Click Me</button>
            `);

    } catch (error) {
        res.status(404).send("Something went wrong");
    }
});

app.get('/about', (req, res) => {
    try {
        res.status(200).send(`<h1>This is the simple webpage made with help of the express framework</h1>`);

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

app.listen(8000);

