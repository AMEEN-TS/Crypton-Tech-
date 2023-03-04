const mongoose = require("mongoose");

const{ObjectId}=mongoose.Schema
const TransactionSchema = new mongoose.Schema({

userId:{
    type:ObjectId,
    ref:"user",
    require:true,
},
type:{
    type:String,
    require:true,
},
amount:{
    type:Number,
    require:true,
},
total:{
    type:Number,
    require:true,
},
date:{
    type:Date,
    require:true,
},
from:{
    type:String,
    require:true,
},
to:{
    type:String,
    require:true,
},


});

const Transactionmodel= mongoose.model("transaction",TransactionSchema);
module.exports = Transactionmodel;