const User = require("../models/User");

const signup = async (req,res)=>{

    try{

        const {username,email,password} = req.body;

        const newUser = new User({

            username,
            email,
            password

        });

        await newUser.save();

        res.json({
            message:"Account created successfully"
        });

    }catch(error){

        res.json({
            message:"Error creating account"
        });

    }

};

const login = (req,res)=>{

    res.json({
        message:"Login working"
    });

};

module.exports = {
    signup,
    login
};
