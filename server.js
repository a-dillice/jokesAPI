// import/init
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// listen
const server = app.listen(port, () => {
    console.log(`Server is running on port...${port}`);
});

// setup app 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// import config and routes
require('./config/connect');
const myRoutes = require('./routes/routes')
myRoutes(app);