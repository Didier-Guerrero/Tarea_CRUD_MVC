const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const sequelize = require("./config/database");
const itemRoutes = require("./routes/itemRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

// Sincronizacion de la base de datos
sequelize
  .sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((err) => console.log("Error al sincronizar la base de datos:", err));

// Enrutamiento
app.use("/", itemRoutes);
app.use("/", authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
