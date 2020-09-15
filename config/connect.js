// imports
const mongoose = require('mongoose');

// set db name
const db = "my_first_db";

// db connection
mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
// successful connection
.then(() => {
    console.log("SUCCESS: Connection to the database is successful!")
})
// error
.catch((err) => {
    console.log("ERROR:", err);
})