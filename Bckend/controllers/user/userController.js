const User= require("../../models/userModel/userModel");


module.exports.addUser= async (req,res)=>{
    try{
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(200).send({ success: false, message: "User Already Registered" });
        }
        const newUser = new User({ ...req.body });
        const result = await newUser.save();
        res.status(200).send({ success: true, message: "Registration successfull " })
    }catch(error){
        res.status(400).send(error);
    }
}

module.exports.getUser= async(req,res)=>{
    try{
        const user = await User.findOne({ _id: req.params.id});
        if (user) {
            return res.status(200).send({ success: true, data:user });
        }
        return res.status(200).send({ success: false, message: "Invalid User" });

    }catch(error){
        res.status(400).send(error);
    }
}

module.exports.updateUser= async(req,res)=>{
    try{
        const user = await User.findOne({ _id: req.params.id});
        if(user){
            const userdata= await User.findByIdAndUpdate({ _id: req.params.id },{...req.body});
            res.status(200).send({ message: "User Updated successfully", success: true });
        }else{
            res.status(200).send({ message: "Invalid User", success: false });
        }

    }catch(error){
        res.status(400).send(error);
    }
}

module.exports.deleteUser = async(req,res)=>{
    try{
        const user = await User.findOne({ _id: req.params.id});
        if(user){
            const deleteCustomer = await User.deleteOne({_id:req.params.id});
            res.status(200).send({message:"customer Deleted",success:true})
        }

        }catch(error){
        res.status(400).send(error);
    }
}