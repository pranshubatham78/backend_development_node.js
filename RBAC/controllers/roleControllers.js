const asynchandler = require('express-async-handler');
const user = require('../models/roleModel');
const generateToken = require('../util/generateToken');
const nodemailer = require('nodemailer');
const bcrypt = require("bcryptjs");
require('dotenv').config();

// register
const register = asynchandler(async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        // checking existence 
        if (await user.findOne({ email })) {
            return res.status(400).json({ message: 'User is already exist' });
        };

        // create user
        const userCreate = await user.create({ email, password, role });
        if (userCreate) {
            return res.status(200).json({
                _id: userCreate._id,
                email: userCreate.email,
                token: generateToken(userCreate._id) // passing playload
            });
        } else {
            res.json({ message: "User not able to create" });
        }
    } catch (error) {
        res.json({ message: error.message })
    }

});

// login
const login = asynchandler(async (req, res) => {
    const { email,password } = req.body;
    try {
        // checking existence
        const usercheck = await user.findOne({ email });
        if (usercheck && (await usercheck.matchPassword(password))) {
            return res
                .status(200)
                .json({
                    _id: usercheck._id,
                    email: usercheck.email,
                    token: generateToken(usercheck._id) // passing playload while login for generating the webtoken.
                });

        } else {
            res
                .status(401)
                .json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.json({ message: error.message })
    }

});

// forget_password
const requestPasswordReset = asynchandler(async (req,res)=>{
    const {email} = req.body;

    // checking user existing
    const existingUser = await user.findOne({email});
    if(!existingUser){
        return res.send(404).json({"message" : "User is not exsist with this email ID"});
    }

    //OTP generation and set expiration
    const otp = Math.floor(1000 + Math.random()*9000);
    const otpExpire = new Date();
    otpExpire.setMinutes(otpExpire.getMinutes() + 6);

    existingUser.otp = otp;
    existingUser.otpExpire = otpExpire;
    await existingUser.save();

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
        service:"Gmail",
        auth : {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
       
    });

    const mailOptions = {
        from: process.env.EMAIL_ID,
        to: req.body.email,
        subject: "Password resest otp",
        text: `Your OTP (It's expired after 6min) : ${otp}`,
    };


    transporter.sendMail(mailOptions , (err , info)=>{
        if(err){
            return res.status(404).json({
                "message" : "Error occured while sending mail",
                error : err.message,
            });
        }else{
            return res.json({
                data: "Your OTP send to the mail"
            });
        }
    })

});

// reset_password
const resetPassword = asynchandler(async (req,res)=>{
    const{otp , password , confirmPassword} = req.body;
    // validate the password
    if(password != confirmPassword){
        return res.status(400).json({"message" : "Password don't match"});
    }

    const otpStr = String(otp); // Convert otp in string 

    //find the user with the otp and check expiration
    const existingUser = await user.findOne({otp: otpStr , otpExpire : {$gt : new Date()}});
    if(!existingUser){
        console.log("Invalid OTP or expired:", otp);
        return res.status(404).json({message: "Invalid or expired OTP"});
    }

    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(String(password) , salt);  // While hashing the password we need a password in the string format.So, if you pass the password in the int format then you'll face an error due to that we need to change the password into the string format.

    // update the user with the new password
    existingUser.password = hashedPassword;
    existingUser.otp = null;
    existingUser.otpExpire = null;
    await existingUser.save();

    res.status(200).json({"message" : "Password reset successful"});

});


module.exports = {
    register,
    login,
    requestPasswordReset,
    resetPassword
};

