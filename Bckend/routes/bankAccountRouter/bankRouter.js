const express=require("express");
const router=express.Router();

const {openAccount,updateKYC,depositMoney,withdrawMoney,TransferMoney,receiveMoney,printStatement,closeAccount}= require("../../controllers/Bank/bankAccountController")




router.post("/register",openAccount);
router.post("/update/:id",updateKYC)
router.post("/deposit/:id",depositMoney)
router.post("/withdraw/:id",withdrawMoney)
router.post("/transfer/:id",TransferMoney)
router.post("/receive/:id",receiveMoney)
router.get("/statement/:id",printStatement)
router.get("/closed",closeAccount)

module.exports = router;