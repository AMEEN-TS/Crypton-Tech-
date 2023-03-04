
const express = require("express");

const router= express.Router();
const{allList}=require("../../controllers/courseList/courseList")

router.get("/list",allList)


module.exports = router;