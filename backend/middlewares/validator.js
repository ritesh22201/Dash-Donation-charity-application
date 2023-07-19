const UserModel = require("../models/userModel");

const validator = async (req, res, next) => {
    const { name, email, age, mobile, password } = req.body;

    if (!name || !email || !password || !age || !mobile) {
        return res.status(400).send({ 'msg': 'All fields are required' });
    }

    if(mobile.length !== 10){
        return res.status(400).send({'msg' : 'Please enter a valid mobile number'});
    }

    if (password.length < 8) {
        return res.status(400).send({ 'msg': 'Password must be of atleast 8 characters' });
    }

    if (!/\d/.test(password)) {
        return res.status(400).send({ 'msg': 'Password must contain a number' });
    }

    if (!/[!@#$%&]/.test(password)) {
        return res.status(400).send({ 'msg': 'Password must contain a special character' });
    }

    if (!/[A-Z]/.test(password)) {
        return res.status(400).send({ 'msg': 'Password must contain an uppercase character' });
    }

    const existedUser = await UserModel.findOne({ email });
    if (existedUser) {
        return res.status(400).send({ 'msg': 'User already exists' });
    }

    next();
}

module.exports = validator;