const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.use(express.json());


app.use(express.urlencoded({ extended: true }));
//sequelize
const db = require("./app/models");
db.sequelize.sync();
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue" });
});

// set port, listen for requests
require("./app/routes/product")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});