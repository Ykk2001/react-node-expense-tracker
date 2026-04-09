import React, { useState, useContext } from "react";
import axios from 'axios';

const BASE_URL = "https://react-node-expense-tracker.onrender.com";//base url for backend
const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    //calculate Incomes
    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}/add-income`, income);
            // If successful, you can handle the response here if needed
            console.log(response.data);
        } catch (err) {
            // Ensure err.response exists before accessing its properties
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError('Something went wrong');
            }
        }
        getIncomes()
    };//income object is sent to the server(income object contain the inputstatedata which is passed from the Form component)

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}/get-incomes`);
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        try {
            const res = await axios.delete(`${BASE_URL}/delete-income/${id}`);
            console.log('Delete successful', res.data)
            console.log("the Id is", id)
            getIncomes();
        }
        catch (err) {
            console.error('Error deleting income', err.response.data || err.message);
        }

    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount;
        })
        return totalIncome;
    }
    console.log("total", totalIncome())

    //calculate Expenses
    const addExpense = async (expense) => {
        try {
            const response = await axios.post(`${BASE_URL}/add-expense`, expense);
            // If successful, you can handle the response here if needed
            console.log(response.data);
        } catch (err) {
            // Ensure err.response exists before accessing its properties
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError('Something went wrong');
            }
        }
        getExpense()
    };

    const getExpense = async () => {
        const response = await axios.get(`${BASE_URL}/get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res = await axios.delete(`${BASE_URL}/delete-expense/${id}`)
        getExpense()
    }

    const totalExpenses =  () => {
        let totalExpense = 0;
        expenses.forEach((expense) => {
            totalExpense = totalExpense + expense.amount;
        })
        return totalExpense;
    }//totalexpense

    const totalBalance=()=>{
        return  totalIncome()-totalExpenses();
    }//totalBalance

    const transactionHistory=()=>{
        const history=[...incomes,...expenses]
       history.sort((a,b)=>{
        return new Date(b.createdAt) - new Date(a.createdAt)
       })
       return history.slice(0,4);
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpense,
            deleteExpense,
            totalExpenses,
            expenses,
            totalBalance,
            transactionHistory,
            error,
            setError

        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}






















/*NOTES
1)globalContext will have two components associated with it:
Provider: Which will provide the context (global state) to the child components.
Consumer: Which will consume (use) the context in the child components.
2)The globalProvider component is designed to wrap around any part of your app where you want the globalContext to be available.
The globalContext would allow components that are wrapped by this Provider to access shared data or functions via useContext(globalContext) without passing props manually
3)useGlobalContext is a custom hook that simplifies access to the GlobalContext.
It wraps useContext(GlobalContext) to avoid repeating the same code in different components, promoting cleaner, reusable code.
4)axios sends an HTTP request and returns a promise, which can either resolve (success) or reject (error).
When an error occurs, err.response.data.message contains the error message provided by the server, and setError is used to update the state with that message for display





*/