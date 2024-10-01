const mongoose = require('mongoose');
const connection = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection has been successfully done");
    } catch (error) {
        console.error('Something went wrong');
    }
};


module.exports = connection;