const express=require('express');
const {addIncome,getIncomes,deleteIncomes}=require('../controllers/Income');

const incomeRouter=express.Router();
incomeRouter.post('/add-income',addIncome);
incomeRouter.get('/get-incomes',getIncomes);
incomeRouter.delete('/delete-income/:id',deleteIncomes);

module.exports=incomeRouter;