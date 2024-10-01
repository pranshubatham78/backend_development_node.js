const mongoose = require('mongoose');
const bcrpyt = require('bcryptjs');

const salesSchemas = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        require: true,
        length: 16
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: 15,
        maxlength: 25

},

    timestamps: true


});
// password hashing middleware
salesSchemas.pre('save', async function (next) {
    if (this.isModified('password')) {
        try {
            const saltsRounds = 10;
            const salt = await bcrpyt.genSalt(saltsRounds);
            const hash = await bcrypt.hash(this.password, salt);//create hashpassword
            console.log(hash);
            this.password = hash;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

//Compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};



module.exports = mongoose.model("user_data", salesSchemas);
