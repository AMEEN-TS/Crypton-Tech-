const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    dob:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },  
    state:{
        type:String,
        require:true,
    },
    pincode:{
        type:String,
        require:true,
    },
    createdOn:{
        type:Date,
        require:true
    },
    modifiedOn:{
        type:Date,
        require:true
    }
})  

const userModel= mongoose.model("user",userSchema);

module.exports=userModel;