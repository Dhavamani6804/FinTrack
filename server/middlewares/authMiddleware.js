const jwt = require("jsonwebtoken");
const User = require("../models/User");


const protect = async(req,res,next)=>{


try{


console.log("Cookies:", req.cookies);

const token = req.cookies.token;

if(!token){

return res.status(401).json({

message:"Unauthorized"

});

}


const decoded = jwt.verify(

token,
process.env.JWT_SECRET
);


req.user = await User.findById(

decoded.id

).select("-password");


next();


}


catch(error){

res.status(401).json({

message:"Unauthorized"

});

}


};


module.exports = protect;