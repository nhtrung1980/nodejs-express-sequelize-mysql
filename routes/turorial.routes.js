module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller");
    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorials.createTutorial);
    // Create a new Comment
    router.post("/comment", tutorials.createComment);

    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findTutorialById);
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);


    app.use('/api/tutorials', router);
};