//connection with mongoosoe

const mongoose = require('mongoose');
const main = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/sales');

        console.log('Connection is done successfully');
    } catch (error) {
        console.log(error);
    }
};


// Defining schemas
const SalesSchemas = new mongoose.Schema({
    name: String,
    prod: String,
    price: Number,
    total_price: Number
});

// Defining models
const SalesModel = mongoose.model('sales', SalesSchemas);



//CREATE

const createData = async () => {
    try {
        const newData = new SalesModel({
            name: "pranshu"
        });

        const saveData = await newData.save();
        if (saveData) {
            console.log('Data created successfully');
        }
    } catch (error) {
        console.log(error);
    }
};




// READ

const readData = async () => {
    try {
        const read = await SalesModel.find();
        console.log(read);
    } catch (error) {
        console.log(error);
    }
};



// UPDATE

const updateDate = async () => {
    try {
        const update = await SalesModel.updateOne({ name: "pranshu" }, {
            $set: { name: "Pranshu Gupta" }
        });
        if (update.acknowledged) {
            console.log("data is updated successfully");
        }
    } catch (error) {
        console.log(error);
    }
};


// Delete 

const deleteData = async () => {
    try {
        const deleteData = await SalesModel.deleteOne({ name: 'Pranshu Gupta' });
        if (deleteData.deletedCount > 0) {
            console.log("data is deleted successfully");
        }
    } catch (error) {
        console.log(error);
    }
};


deleteData();
main();