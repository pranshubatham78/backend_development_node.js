// Here I am going to define the schemas and models for the collection or apply validations on the collection.

const mongoose = require("mongoose");

const salesSchemas = mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    prod : {
        type : String,
        required : true
    },

    brand : {
        type : String,
        required : true
    },

    qty : {
        type : Number,
        required : true
    },
    
    price : {
        type : Number,
        minPrice : 5000,
        required : true

    },

    total : {
        type : Number,
        require : true
    },
    email : {
        type : String,
        lowercase : true,
        minlength : 15,
        maxlength : 25
    },

    gender : {
        type : String,
        required : true
    },

    contact  : {
        type : Number,
        required : true
    }
    
    
});



module.exports = mongoose.model("sales", salesSchemas);