const Expense=require("../models/Expense");


const addExpense=async(req,res)=>{


try{


const expense=await Expense.create({

title:req.body.title,

amount:req.body.amount,

category:req.body.category,

date:req.body.date,

notes:req.body.notes,

user:req.user._id

});


res.status(201).json(expense);

}

catch(err){

res.status(500).json({

message:err.message

});

}

}
const getExpenses=async(req,res)=>{


try{


const expenses=await Expense.find({

user:req.user._id

}).sort(

{

date:-1

}

);


res.json(expenses);


}


catch(err){

res.status(500).json({

message:err.message

});

}

}
const deleteExpense=async(req,res)=>{


try{


await Expense.findByIdAndDelete(


req.params.id


);


res.json({

message:"Expense deleted"

});


}

catch(err){

res.status(500).json({

message:err.message

});


}

}
const updateExpense=async(req,res)=>{


try{


const expense=await Expense.findByIdAndUpdate(


req.params.id,

req.body,

{

new:true

}


);


res.json(

expense

);



}


catch(err){


res.status(500).json({


message:err.message


});
}
}
module.exports={
addExpense,
getExpenses,
deleteExpense,
updateExpense
}