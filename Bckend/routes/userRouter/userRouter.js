const express=require('express');

const router = express.Router();
const{getUser,addUser,updateUser,deleteUser}= require("../../controllers/user/userController");



router.get("/getUser/:id",getUser)
router.post("/register",addUser)
router.put("/update/:id",updateUser)
router.delete("/delete/:id",deleteUser)


module.exports=router;