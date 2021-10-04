const express = require("express");


const app = express();

app.use(express.json());


app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue" });
});


require("./app/routes/product")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});