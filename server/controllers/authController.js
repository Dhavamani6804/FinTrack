const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const registerUser = async(req,res)=>{

try{

const {name,email,password}=req.body;


const userExists = await User.findOne({email});


if(userExists){

return res.status(400).json({

message:"User already exists"

});

}


const salt = await bcrypt.genSalt(10);

const hashedPassword = await bcrypt.hash(password,salt);


const user = await User.create({

name,
email,
password:hashedPassword

});


res.status(201).json({

_id:user._id,

name:user.name,

email:user.email


});


}

catch(error){

res.status(500).json({

message:error.message

});

}


};

const loginUser = async(req,res)=>{

try{


const {email,password}=req.body;


const user = await User.findOne({

email

});


if(!user){

return res.status(401).json({

message:"Invalid Credentials"

});

}


const isMatch = await bcrypt.compare(

password,
user.password

);


if(!isMatch){

return res.status(401).json({

message:"Invalid Credentials"

});

}



const token = generateToken(user._id);



res.cookie(

"token",

token,

{

httpOnly:true,

secure:process.env.NODE_ENV==="production",

sameSite:

process.env.NODE_ENV==="production"

?

"none"

:

"lax",

maxAge:7*24*60*60*1000

}

);



res.json({

_id:user.id,

name:user.name,

email:user.email

});



}


catch(error){

res.status(500).json({

message:error.message

});

}

};

const logoutUser=(req,res)=>{


res.cookie(

"token",

"",

{

httpOnly:true,

secure:process.env.NODE_ENV==="production",

sameSite:

process.env.NODE_ENV==="production"

?

"none"

:

"lax",

expires:new Date(0)

}

);


res.json({

message:"Logged out"

});



};

const getMe=(req,res)=>{


res.json(req.user);


};

module.exports={

registerUser,
loginUser,
logoutUser,
getMe

};