
const mongoose = require('mongoose');
require('dotenv').config();

// function for connecting with the database.
const connect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database is connected : ${connection.connection.host}, ${connection.connection.name}`);
    } catch (error) {
        console.log('Connection failed');
        console.log(error);
        process.exit(1); // Exit the program if any issue arises.
    };
};

module.exports = connect;
// Connection with mongoose with database

const mongoose = require('mongoose');
const connectDB = async ()=>{
    try{
        const connection = await mongoose.connect("mongodb://localhost:27017/sales",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        });
        console.log("Connection sucessfully done");
 
    } catch (error) {
        console.error("OPPS!, There's something went wrong :(");
    }
};

module.exports = connectDB;

