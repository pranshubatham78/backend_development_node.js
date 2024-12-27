// Here I'm going to define the schemas and models.

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// It basically create a schemas and applying the validation on it.
const user = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        validate : {
            validator : (v) => v.length >= 16,
            message  : "Password must be at least 16 characters long",
        },
    },

    role: {
        type: String,
        required: true,
        enum: ["participant", "volunteer" ,"organiser"],
        default : 'participant'
    }, 

    otp : String,
    otpExpire : Date,
}, {
    timestamps: true
});

// hashing the password (by middleware)
user.pre('save', async function (next) {
    if (this.isModified("password")) {
        try {
            // if the password is modified then we bcrypt the password
            const saltRounds = 10;
            const genSalt = await bcrypt.genSalt(saltRounds);
            const decodePass = await bcrypt.hash(this.password, genSalt);
            this.password = decodePass;  // store the hash password in the db;
            next();

        } catch (error) {
            console.error("Password can't be hashed");
            next(error);
        }
    }else{
        next();
    }
});

// comparing the password
user.methods.matchPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword,this.password)
};


const userModel = mongoose.model("user", user);  // It create the model for the schemas.

module.exports = userModel;