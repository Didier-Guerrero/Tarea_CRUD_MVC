const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

// Visualizacion de items
router.get("/", itemController.getItems);

// Creacion de items
router.post("/add", itemController.createItem);

// Actualizacion de items
router.post("/update/:id", itemController.updateItem);

// Eliminacion de items
router.get("/delete/:id", itemController.deleteItem);

module.exports = router;
