
const signup = (req,res)=>{

    res.json({
        message:"User signup controller working"
    });

};

const login = (req,res)=>{

    res.json({
        message:"User login controller working"
    });

};

module.exports = {
    signup,
    login
};
