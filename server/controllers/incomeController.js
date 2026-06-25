const Income=require('../models/Income');



const addIncome=async(req,res)=>{


const income=await Income.create({

amount:req.body.amount,

user:req.user._id

});


res.json(

income

);


};



const getIncome=async(req,res)=>{


const income=await Income.findOne({

user:req.user._id

});


res.json(

income

);

};



module.exports={

addIncome,

getIncome

};