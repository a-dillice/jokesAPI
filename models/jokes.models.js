// import mongoose
const mongoose = require("mongoose");

// create schema
const JokesSchema = new mongoose.Schema({
    // setup the joke
    setup:{
        type:String,
        required:[true, "The setup is required."],
        minlength:[10, "The setup requires at least 10 characters."],
        trim:true
    },
    // setup the punch line
    punchline:{
        type:String,
        required:[true, "The punchline is required."],
        minlength:[3, "The setup punchline at least 3 characters."],
        trim:true
    }

// enable auto timestamps
},{timestamps:true});

// define module/model
const Jokes = mongoose.model("Jokes", JokesSchema);

// export model
module.exports = Jokes;