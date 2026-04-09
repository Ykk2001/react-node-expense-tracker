const Expense = require("../models/expenseModel")//expense model contain expense schema 

const addExpense = async (req, res) => {
    console.log(req.body);
    const { title, amount, category, description, date } = req.body;
    //create a new Income Document
    const expense = new Expense({
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
        if (isNaN (amount)|| amount <= 0) {
            return res.status(400).json({ message: "Amount must be positive number" })
        }

        const savedExpense = await expense.save();//saving the expense data to the database
        res.status(200).json({ message: "Expense Added" })
        console.log(savedExpense)

    }//try
    catch (error) {
        res.status(500).json({ message: "server error" })
    }//catch

    //console.log(typeof amount)

}//addincome

//getIncomes
const getExpense = async (req, res) => {
    try {
        const expense = await Expense.find().sort({ createdAt: -1 })//here capital 'Expense" is Schema
        res.status(200).json(expense)
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}//getIncomes

//deleteIncomes
const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await Expense.findByIdAndDelete(id)//find the expense by ID and delete it here capital 'Expense" is Schema
        if (!expense) {
            return res.status(400).json({ message: "This Expense Document is not  found" })//income document is not found, return a 404 error
        }
        return res.status(200).json({ message: "Expense Document deleted" })// If deletion is successful, return a success message
    }
    catch (error) {
        return res.status(500).json({ message: "Server Error" })
    }
}


module.exports = {
    addExpense,
    getExpense,
    deleteExpense
};
















/*NOTES


*/