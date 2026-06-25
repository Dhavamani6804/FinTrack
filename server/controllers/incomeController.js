const Income = require('../models/Income');


const addIncome = async(req,res)=>{

    try{

        const income = await Income.create({

            source:req.body.source,

            amount:req.body.amount,

            user:req.user._id

        });


        res.status(201).json(income);

    }

    catch(err){

        res.status(500).json({

            message:err.message

        });

    }

};



const getIncome = async(req,res)=>{


    try{

        const incomes = await Income.find({

            user:req.user._id

        }).sort({

            createdAt:-1

        });


        res.json(incomes);

    }


    catch(err){

        res.status(500).json({

            message:err.message

        });

    }


};



const deleteIncome = async(req,res)=>{


    await Income.findByIdAndDelete(

        req.params.id

    );


    res.json({

        message:"Deleted"

    });

};



module.exports={

    addIncome,

    getIncome,

    deleteIncome

};