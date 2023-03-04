const data=require("../../courseData/courseData")
module.exports.allList=async(req,res)=>{
    console.log("jjjjjjjjjj");
    try{

        res.status(200).send({data:data,sucess:true})
    }catch(error){
        res.status(400).send(error);
    }
}