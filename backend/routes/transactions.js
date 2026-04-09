const express=require('express');
const {addIncome,getIncomes,deleteIncomes}=require('../controllers/Income');
const { addExpense,getExpense, deleteExpense } = require('../controllers/Expense');
const router=express.Router()//router is accessed from express

//this is the for income 
router.post('/add-income',addIncome);
router.get('/get-incomes',getIncomes);
router.delete('/delete-income/:id',deleteIncomes)

//this is the for Expense
router.post('/add-expense',addExpense);
router.get('/get-expenses',getExpense);
router.delete('/delete-expense/:id',deleteExpense)

module.exports=router;




















/*NOTES
transactions.js contain income.js (contain diffrent methods of addincomes ,deleteincomes ,getIncomes) and income.js contain (incomeschema)

*/