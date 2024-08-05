const dataStore = require("../data/data");

const getItems = (req, res) => {
  res.json(dataStore.getAll());
};

const createItem = (req, res) => {
  const item = req.body;
  dataStore.add(item);
  res.status(201).json(item);
};

const updateItem = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  dataStore.update(id, updatedItem);
  res.json(updatedItem);
};

const deleteItem = (req, res) => {
  const id = parseInt(req.params.id);
  dataStore.remove(id);
  res.status(204).send();
};

module.exports = {
  getItems,
  createItem,
  updateItem,
  deleteItem,
};
