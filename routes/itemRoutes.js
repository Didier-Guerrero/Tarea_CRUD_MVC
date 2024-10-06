const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Visualizar ítems
router.get("/", isAuthenticated, itemController.getItems);
// Creacion ítem
router.post("/add", isAuthenticated, itemController.createItem);
// Actualizacion ítem
router.post("/update/:id", isAuthenticated, itemController.updateItem);
// Eliminacion ítem
router.get("/delete/:id", isAuthenticated, itemController.deleteItem);

module.exports = router;
