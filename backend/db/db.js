const mongoose = require('mongoose');
require('dotenv').config()//This library is used to load environment variables from a .env file into process.env.
const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL);//connect mongo url is imported from .env file
        console.log("Database Successfully connected");
    } catch (error) {
        console.log("Database connection error", error);
    }
}//async allows the function to use await inside, which is necessary when connecting to MongoDB asynchronously.
module.exports = db;  




/*Another Code
const mongoose=require('mongoose');
require('dotenv').config();
const db=async()=>{
    try{
     await mongoose.connect(process.env.MONGO_URL);
     console.log("Database successfully Conected");
    }
    catch(error){
     console.log("Database Conection error",error)
    }
}
module.exports=db;
*/


//Notes
/* 
1) Mongoose:It allows you to interact with MongoDB databases using JavaScript objects.
2) mongoose.set('strictQuery', false);: This line disables the strict query mode for Mongoose. By default, Mongoose operates in strict mode, where it throws errors for unknown fields in MongoDB documents. Setting it to false allows you to work with documents that have fields not defined in your schema.
2.1)However, if strictQuery is set to false, Mongoose will allow the query on the age field, even though it’s not part of the schema.
3)The try block contains code that may throw an error. If an error occurs, the catch block will handle it.
*/