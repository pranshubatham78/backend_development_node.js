const mongoose = require('mongoose');
const connection = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection has been successfully done");
    } catch (error) {
        console.error('Error connecting to mongodb:', error);
        process.exit(1);
    };
};


module.exports = connection;