const Investment = require('../models/Investment');



const addInvestment = async(req,res)=>{


try{


const investment = await Investment.create({

source:req.body.source,

amount:req.body.amount,

user:req.user._id

});


res.status(201).json(

investment

);


}

catch(err){

res.status(500).json({

message:err.message

});

}

};



const getInvestments = async(req,res)=>{


try{


const investments = await Investment.find({

user:req.user._id

});


res.json(

investments

);

}


catch(err){

res.status(500).json({

message:err.message

});

}

};



const deleteInvestment = async(req,res)=>{


await Investment.findByIdAndDelete(

req.params.id

);


res.json({

message:'Deleted'

});

};



module.exports={

addInvestment,

getInvestments,

deleteInvestment

};