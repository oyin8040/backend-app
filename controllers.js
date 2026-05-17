
    const signup = (req,res)=>{

    console.log(req.body);

    res.json({
        message:"Signup successful"
    });

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
