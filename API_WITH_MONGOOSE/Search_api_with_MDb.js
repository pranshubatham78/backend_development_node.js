// API for finding the content based on the specific key.

const express = require('express');
const connection = require('./config');
const SalesModel = require('./indexx');
const { default: mongoose } = require('mongoose');
const app = express();

connection();
app.get('/search/:key', async (req, res) => {
    try {
        const key = req.params.key;
        const result = await SalesModel.find({
            "$or" : [
                {"name": {$regex :key }},
                {"prod":{$regex: key}}   // Check, Is your collection's field name is same as you passed here. Otherwise, you get nothing.
            ]
        });
       if (result.length == 0) {
            return res.status(404).send({ message: 'No data found with this key' });
       }
        res.send(result);
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
});


app.listen(8000);