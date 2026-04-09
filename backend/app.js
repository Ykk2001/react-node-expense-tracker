const express = require('express');
const app = express()
const cors = require('cors');

//middlewares
app.use(express.json())//this parses the data from request url to the req of body
app.use(cors())//This allows your server to accept requests from different origins.
require('dotenv').config()//This loads the environment variables from the .env file into process.env.
const PORT = process.env.PORT//accssing port variable from .env file
app.get('/', (req, res) => {
  res.send("hello world");
})//get

// Function to start the server
app.listen(PORT, () => 
  { console.log('listening to port:', PORT) }
)
//database code
const db = require('./db/db.js'); //requiring db.js in main file
db();//calling database connection and executing

//routes
const fs=require('fs')
fs.readdirSync('./routes').map((route)=>app.use('/',require('./routes/'+route)))

// OPTIONAL file reading 
//fs.readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/'+route)))


//---------------------------------------------------//
/*Another Code
const express = require('express');
const app = express();
require('dotenv').config();
const PORT=process.env.PORT;

app.get('/', (req, res) => {
 res.send("hello world");
})
app.listen( console.log('Listening on port',PORT))

const db=require('./db/db');
db()
*/


/*Notes
1)this is the main file for backend
2)fs.readdirSync('./routes'): Reads the contents of the ./routes directory synchronously. It returns an array of filenames (e.g., ['user.js', 'product.js']).

*/
















/* 
      NOTES
      1)When you call require('dotenv').config(), it reads the key-value pairs from your .env file and loads them into process.env. This makes them available throughout your Node.js application.
      2)Suppose you have a front-end application running on http://localhost:3000 and your Express server running on http://localhost:5000. Without CORS enabled, requests from the front-end to the server would be blocked by the browser.
      3)When you use app.use(cors()), it allows your server to accept requests from different origins

*/