const express = require("express");
const cors=require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app=express();
const DbConnect= require("./config/dbConfig")
app.use(express.json());
app.use(cors());


const bankRouter=require("./routes/bankAccountRouter/bankRouter")
const userRoueter=require("./routes/userRouter/userRouter")
const couresRouter= require("./routes/courseList/courseList")
app.use("/api/bankaccount",bankRouter);
app.use("/api/user",userRoueter);
app.use("/api/course",couresRouter)

app.listen(5000,console.log("server runing...."));
