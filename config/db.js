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
