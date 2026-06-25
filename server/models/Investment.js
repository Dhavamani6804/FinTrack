const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({

    source:{
        type:String,
        required:true
    },

    amount:{
        type:Number,
        required:true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }

},{
    timestamps:true
});


module.exports = mongoose.model(

    'Investment',

    investmentSchema

);