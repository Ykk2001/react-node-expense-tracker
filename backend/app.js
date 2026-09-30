const express = require('express');
const app = express()
const cors = require('cors');
require('dotenv').config()//This loads the environment variables from the .env file into process.env.

const router = require('./routes/auth.js');
//database code
const db = require('./db/db.js'); //requiring db.js in main file

//middlewares
app.use(express.json())//this parses the data from request url to the req of body
app.use(cors())//This allows your server to accept requests from different origins.

const PORT = process.env.PORT//accssing port variable from .env file

//database
db();

app.get('/', (req, res) => {
  res.send("hello world");
})//get

app.use('/',router);

// Function to start the server
app.listen(PORT, () => 
  { console.log('listening to port:', PORT) }
)



/* 
      NOTES
      1)When you call require('dotenv').config(), it reads the key-value pairs from your .env file and loads them into process.env. This makes them available throughout your Node.js application.
      2)Suppose you have a front-end application running on http://localhost:3000 and your Express server running on http://localhost:5000. Without CORS enabled, requests from the front-end to the server would be blocked by the browser.
      3)When you use app.use(cors()), it allows your server to accept requests from different origins

*/

