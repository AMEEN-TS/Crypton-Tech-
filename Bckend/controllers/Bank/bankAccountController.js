const Bank = require("../../models/bankAccountModel/bankAccountModel");
const Transaction = require("../../models/bankAccountModel/transaction");

// openAccount

module.exports.openAccount = async (req, res) => {
    try {
        const existingUser = await Bank.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(200).send({ success: false, message: "User Already Registered" });
        }
        const newUser = new Bank({ ...req.body });
        const result = await newUser.save();
        res.status(200).send({ success: true, message: "Registration successfull " })


    } catch (error) {
        res.status(400).send(error);

    }
}

//  updateKYC

module.exports.updateKYC = async (req, res) => {

    try {

        const account = await Bank.findById({ _id: req.params.id })
        if (!account) {
            res.status(200).send("Account not found")
        }
        if (account.closed === true) {
            res.status(200).send("Account closed")
        }
        const edituser = await Bank.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
        res.status(200).send({ message: "KYC Updated successfully", success: true })



    } catch (error) {
        res.status(400).send(error);
    }
}

//  depositMoney

module.exports.depositMoney = async (req, res) => {
    try {
        const amount = req.body.amount;
        const user = await Bank.findById({ _id: req.params.id });
        if (!user) {
            res.status(200).send("Account not found")
        }
        if (user.closed === true) {
            res.status(200).send("Account closed")
        }

        const account = await Bank.findByIdAndUpdate(req.params.id, { $inc: { initialBalance: amount } });
        const transaction = await Transaction.create({
            userId: account._id,
            type: "Deposit",
            from: "bank",
            to: account.name,
            date: new Date(),
            amount: amount,
            total: account.initialBalance
        })
        res.status(200).json({ message: "Money deposited Successfully" });


    } catch (error) {
        res.status(400).send(error);
    }
}

//  withdrawMoney

module.exports.withdrawMoney = async (req, res) => {
    try {

        const amount = req.body.amount;
        const user = await Bank.findById({ _id: req.params.id });
        if (!user) {
            res.status(200).send("Account not found")
        }
        if (user.closed === true) {
            res.status(200).send("Account closed")
        }

        const account = await Bank.findByIdAndUpdate(req.params.id, { $inc: { initialBalance: -amount } });



        const transaction = await Transaction.create({
            userId: account._id,
            type: "Withdraw",
            from: account.name,
            to: "bank",
            date: new Date(),
            amount: amount,
            total: account.initialBalance
        })
        res.status(200).json({ message: "Money withdraw Successfully" });

    } catch (error) {
        res.status(400).send(error);
    }
}

//  // Transfer Money

module.exports.TransferMoney = async (req, res) => {
    try {
        const amount = req.body.amount;
        const toAccount = req.body.toAccount;
        const user = await Bank.findById({ _id: req.params.id });
        if (!user) {
            res.status(200).send("Account not found")
        }
        if (user.closed === true) {
            res.status(200).send("Account closed")
        }
        if (user.initialBalance > amount) {

            const account = await Bank.findByIdAndUpdate(req.params.id, { $inc: { initialBalance: -amount } });

            const transaction = await Transaction.create({
                userId: account._id,
                type: "Transfer",
                from: account.name,
                to: toAccount,
                date: new Date(),
                amount: amount,
                total: account.initialBalance
            })
            res.status(200).json({ message: "Money Transfer Successfully" });
        }

    } catch (error) {
        res.status(400).send(error);
    }
}

//   receiveMoney 

module.exports.receiveMoney = async (req, res) => {
    try {
        const amount = req.body.amount;
        const fromName = req.body.fromName;
        const user = await Bank.findById({ _id: req.params.id });
        if (!user) {
            res.status(200).send("Account not found")
        }
        if (user.closed === true) {
            res.status(200).send("Account closed")
        }


        const account = await Bank.findByIdAndUpdate(req.params.id, { $inc: { initialBalance: amount } });

        const transaction = await Transaction.create({
            userId: account._id,
            type: "Receive",
            from: fromName,
            to: account.name,
            date: new Date(),
            amount: amount,
            total: account.initialBalance
        })
        res.status(200).json({ message: "Money Receive Successfully" });

    } catch (error) {
        res.status(400).send(error);

    }
}

//  printStatement

module.exports.printStatement = async (req, res) => {
    try {
        const user = await Bank.findById({ _id: req.params.id });
        if (!user) {
            res.status(200).send("Account not found")
        }
        if (user.closed === true) {
            res.status(200).send("Account closed")
        }

        const transfer = await Transaction.find({ userId: req.params.id })
        res.status(200).send({ transfer, message: "data" })


    } catch (error) {
        res.status(400).send(error);
    }
}

//  closeAccount

module.exports.closeAccount= async (req,res)=>{
    try{
        console.log(req.query,"kkkk");
        const{id,value}= req.query;
        const user = await Bank.findById({ _id: id });
        
        const account = await Bank.findByIdAndUpdate(id, {closed:value});
        res.status(200).send( "Account closed successfully")
    }catch(error){
        res.status(400).send(error);
    }
}