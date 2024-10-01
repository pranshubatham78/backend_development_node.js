//connection with mongoosoe

const mongoose = require('mongoose');
const main = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/sales');

        console.log('Connection is done successfully');


        const SalesSchemas = new mongoose.Schema({  // This is not require while connecting to the database. But, it's a good practise.
            name: String,
            prod: String,
            price: Number,
            total_price: Number
        });
        const SalesModel = mongoose.model('sales', SalesSchemas);

    } catch (error) {
        console.log(error);
    }
};


