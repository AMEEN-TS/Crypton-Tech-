const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    mobile:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    initialBalance:{
        type:Number,
        require:true,
    },
    adharNo:{
        type:String,
        require:true,
    },
    panNo:{
        type:String,
        require:true,
    },
    closed:{
        type:Boolean,
        default:false,
    }

    
},{
    timestamps: true
}
);

const userModel=mongoose.model("customer",userSchema);
module.exports = userModel;