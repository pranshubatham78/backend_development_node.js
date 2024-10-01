const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secretKey = "mySecretKey";



// Creating the playload  -- > It can be object or string or buffer.

app.post('/login', async (req, res) => {
    const user = {
        name: "Pranshu",
        profession: "Software Development",
        email_id: "abc123@test.com"
    }
    // Generating the token
    try {
        jwt.sign({ user }, secretKey, { expiresIn: '500s' }, (error, token) => {
            if (error) {
                res.status(400).json({ message: 'Error generating token' });
            } else {
                res.status(200).json({
                    token,
                    message: 'Token is generated successfully'
                });
            }
        });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});





// Verify the token and access the profile
app.post('/profile', verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (error, authData) => {
        if (error) {
            res.status(400).send({ message: 'Auth-token is not verfied' });
        } else {
            res.status(200).send({
                message: 'Profile accessed',
                authData
            });
        }
    });

});

// Handling the bearer


function verifyToken(req, res, next) {
    try {
        const bearerHeader = req.headers['authorization'];

        // check if bearer is defined or not
        if (typeof bearerHeader !== "undefined") {
            const bearer = bearerHeader.split(' ');
            const token = bearer[1];
            req.token = token;
            next();
        } else {
            res.status(403).send({ message: 'Token is not verified' });
        }
    } catch (error) {
        res.status(400).send({ message: 'internal server error' });
    }
};
app.listen(8000);
