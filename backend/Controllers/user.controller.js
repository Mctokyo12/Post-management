const UserModel = require("../Models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req , res) => {

    try {
        
        const {username , password , email } = req.body;
        const passwordCrypt = await bcrypt.hash(password , 12);

        const user = await UserModel.create({
            name: username,
            email:email,
            password: passwordCrypt
        });

        res.status(200).json(user);

    } catch (error) {
        res.status(400).json(error);
    }
    
}

module.exports.login = async (req , res) => {
    try {
        const {name , password , email } = req.body;
        const user  = await UserModel.findOne({email: email});
        if(!user){
            res.status(400).json({message: "The email address you entered is not connected to an account"})
        }

        const check = await bcrypt.compare(password , user.password);

        if(!check){
            res.status(400).json({message: "Invalid credentials. Please try again."});
        }

        res.status(200).json({
            userId: user._id,
            token: jwt.sign(
                {userID: user._id},
                "RANDOM_TOKEN_SECRET",
                {expiresIn: '24'}
            ),
            name: user.name,
            email: user.email
        });

    } catch (error) {
        res.status(400).json(error);
    }
}