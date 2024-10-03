const User = require('../models/user');
const generateToken = require('../utils/generateToken');

//Register a new user

const register = async (req, res) => {
    const { email, password } = req.body;

    // check if user is already avaliable or not
    const userExists = await User.findOne({ email }); // User mail is unique which I already defined in the schemas.
    if (userExists) {
        return res.status(400).json({ message: 'User is already exists' });
    } 
    else {
        // Create new user

        const user = await User.create({ name, email, password });
        if (user) {
            res.status(200).json({
                _id: user._id,
                email: user.email,
                token: generateToken(user._id)
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    }


};


const authUser = async (req, res) => {
    const { email, password } = req.body;

    //check if user is exists or not

    const user = await user.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};


module.exports = {
    register,
    authUser
};