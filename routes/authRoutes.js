const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const { isAuthenticated } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch (error) {
    res.send(
      "Error al registrar el usuario. Es posible que el email ya exista."
    );
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.userId = user.id;
    res.redirect("/");
  } else {
    res.send("Credenciales incorrectas");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
