// configuration file

const mongoose = require('mongoose');

const main = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/sales');

        if (connection) {
            console.log('connection is done successfully');
        }

        return connection;
    } catch (error) {
        console.error(error);
    }
};

module.exports = main;