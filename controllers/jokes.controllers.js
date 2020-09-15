const Jokes = require("../models/jokes.models");

module.exports = {

    // show all jokes
    index:(req, res) => {

        // get all jokes
        Jokes.find().then(joke => {
            
            // send results
            res.json({results:joke});
        
        // catch error
        }).catch((err) => {

            // err msg
            res.json({
                message:"An error has occurred.",
                error:err
            });

        })

    },
    // get one joke
    show:(req, res) => {

        // get id from user
        const id = req.params._id;

        // get one jokes
        Jokes.findOne({_id:id}).then(joke => {
            
            // send results
            res.json({results:joke})
        
        // catch error
        }).catch((err) => {

            // err msg
            res.json({
                message:"An error has occurred.",
                error:err
            })

        })

    },
    // get random joke
    random:(req, res) => {

        // get count of all documents in the collection
        Jokes.countDocuments().then(num =>{

            // Get a random entry
            const randomNum = Math.floor(Math.random() * num)
            
            // grab random document
            Jokes.findOne().skip(randomNum).then(joke => {
                
                // send results
                res.json({results:joke})
            
            // catch error
            }).catch((err) => {

                // err msg
                res.json({
                    message:"An error has occurred.",
                    error:err
                })

            }) 

        })

    },
    // add joke to collection
    create:(req, res) => {

        // get user input
        const data = req.body;

        // get all jokes
        Jokes.create(data).then(joke => {
            
            // send results
            res.json({
                message:'Successfully added joke.',
                results:joke
            })
        
        // catch error
        }).catch((err) => {

            // err msg
            res.json({
                message:"An error has occurred.",
                error:err
            })

        })

    },
    update:(req, res) => {

        // get user data
        const id = req.params._id;
        const userData = req.body; 

        // get all jokes
        Jokes.findOneAndUpdate({_id:id}, userData, {
            
            // run some options
            useFindAndModify:false,
            runValidators:true
            
        }).then(joke => {
            
            // redirect back to show - to show updated version of this item
            res.redirect(`/api/jokes/${id}`);
        
        // catch error
        }).catch((err) => {

            // err msg
            res.json({
                message:"An error has occurred.",
                error:err
            })

        })

    },
    destroy:(req, res) => {

        // get id
        const id = req.params._id;

        // get all jokes
        Jokes.deleteOne({_id:id}).then(joke => {
            
            // send results
            res.json({
                message:`Delete was successful. Deleted ${joke.n} record(s).`,
                results:joke
            });
        
        // catch error
        }).catch((err) => {

            // err msg
            res.json({
                message:"An error has occurred.",
                error:err
            })

        })

    }

}