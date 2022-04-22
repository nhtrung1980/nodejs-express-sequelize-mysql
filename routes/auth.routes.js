module.exports = app => {
    const { verifySignUp } = require("../middleware");
    const controller = require("../controllers/auth.controller.js");
    var router = require("express").Router();

    router.post("/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        controller.signup
    );

    router.post("/signin",
        controller.signin
    );

    app.use('/api/auth', router);
};