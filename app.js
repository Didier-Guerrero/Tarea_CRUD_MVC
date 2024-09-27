const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Sincronizacion de la base de datos
sequelize
  .sync({ force: false })
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
