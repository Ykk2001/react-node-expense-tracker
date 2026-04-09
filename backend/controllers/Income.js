const Income = require("../models/incomeModel")//income model contain income schema 

const addIncome = async (req, res) => {
    //console.log(req.body);
    const { title, amount, category, description, date } = req.body;
    //create a new Income Document
    console.log(req.body)
    const income = new Income({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        //validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required' })
        }//if
        if (isNaN (amount) || amount <= 0) {
            return res.status(400).json({ message: "Amount must be positive number" })
        }

        const savedIncome = await income.save();//saving the income data to the database
        res.status(200).json({ message: "Income Added" })
        console.log(savedIncome)

    }//try
    catch (error) {
        res.status(500).json({ message: "server error" })
    }//catch

    //console.log(typeof amount)

}//addincome

//getIncomes
const getIncomes = async (req, res) => {
    try {
        const income = await Income.find().sort({ createdAt: -1 })
        res.status(200).json(income)
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}//getIncomes

//deleteIncomes
const deleteIncomes = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('the id is',id)
        const income = await Income.findByIdAndDelete(id)//find the income by ID and delete it
        if (!income) {
            return res.status(400).json({ message: "This Income Document is not  found" })//income document is not found, return a 404 error
        }
        return res.status(200).json({ message: "Income Document deleted" })// If deletion is successful, return a success message
    }
    catch (error) {
        return res.status(500).json({ message: "Server Error" })
    }
}


module.exports = {
    addIncome,
    getIncomes,
    deleteIncomes
};
















/*NOTES


*/