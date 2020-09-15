const JokesController = require('../controllers/jokes.controllers');

// pass controller to app
module.exports = app => {

    //setup urls
    app.get("/api/jokes/", JokesController.index);
    app.get("/api/jokes/random", JokesController.random);
    app.post("/api/jokes/new", JokesController.create);
    app.put("/api/jokes/update/:_id", JokesController.update);
    app.delete("/api/jokes/delete/:_id", JokesController.destroy);
    app.get("/api/jokes/:_id", JokesController.show);

}