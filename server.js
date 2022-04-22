const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:8082"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
//const Role = db.role;

db.sequelize.sync();
//In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//     initial();
// });

require("./routes/turorial.routes")(app);
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// function initial() {
//     Role.create({
//         id: 1,
//         name: "user"
//     });

//     Role.create({
//         id: 2,
//         name: "moderator"
//     });

//     Role.create({
//         id: 3,
//         name: "admin"
//     });
// }