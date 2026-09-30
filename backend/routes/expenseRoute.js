const express=require('express');
const { addExpense,getExpense, deleteExpense } = require('../controllers/Expense');

const expenseRouter=express.Router();

expenseRouter.post('/add-expense',addExpense);
expenseRouter.get('/get-expenses',getExpense);
expenseRouter.delete('/delete-expense/:id',deleteExpense)

module.exports=expenseRouter;