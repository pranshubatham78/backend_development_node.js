const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const salesSchemas = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 16
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,   
        minlength: 15
    }
}, { timestamps: true });

// Password hashing middleware
salesSchemas.pre('save', async function (next) {
    if (this.isModified('password')) {
        try {
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(this.password, salt); // Create hashpassword
            this.password = hash;
            next();
        } catch (error) {
            console.log(error);
            next(error);
        }
    } else {
        next();
    }
});

// Compare password
salesSchemas.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("user_data", salesSchemas);