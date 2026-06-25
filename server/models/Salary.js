const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({

    amount:{
        type:Number,
        required:true
    },

    bonus:{
        type:Number,
        default:0
    },

    freelance:{
        type:Number,
        default:0
    },

    month:{
        type:Number,
        required:true
    },

    year:{
        type:Number,
        required:true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},{
    timestamps:true
});

module.exports=mongoose.model(
    "Salary",
    salarySchema
);