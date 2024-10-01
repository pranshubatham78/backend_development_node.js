// Defining scehmas and models

const mongoose = require('mongoose');

const SalesSchemas = mongoose.Schema({
    name : {
        required : true,
        type : String,
    },
    product : {
        required : true,
        type : String,
    
    },
    price : {
        required : true,
        type : Number,
        minimun : 5000
    }

});


const SalesModel = mongoose.model('sales', SalesSchemas);


module.exports = SalesModel;