const Item = require("../models/itemModel");

// Visualizar los items
exports.getItems = async (req, res) => {
  const items = await Item.findAll();
  res.render("index", { items });
};

// Creacion de item
exports.createItem = async (req, res) => {
  const newItem = await Item.create({
    name: req.body.name,
    description: req.body.description,
  });
  res.redirect("/");
};

// Actualizar un item
exports.updateItem = async (req, res) => {
  const { id } = req.params;
  await Item.update(
    { name: req.body.name, description: req.body.description },
    { where: { id } }
  );
  res.redirect("/");
};

// Eliminacion de item
exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  await Item.destroy({ where: { id } });
  res.redirect("/");
};
