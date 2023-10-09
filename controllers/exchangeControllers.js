const mongoose = require("mongoose");
const Exchanges = require("../models/exchangeModel");

const getAllExchanges = async (req, res) => {
  const exchanges = await Exchanges.find();
  res.status(200).json(exchanges);
};

const createNewExchange = async (req, res) => {
  const allExchanges = req.body;
  const newExchange = new Exchanges({
    ...allExchanges,
  });
  await newExchange.save();
  res.status(201).json({ newExchange, msg: "Exchange created successfully" });
};
const updateExchange = async (req, res) => {
  const { id: _id } = req.params;
  const exchange = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("no exchange with that id");
  const updatedExchange = await Exchanges.findByIdAndUpdate(
    _id,
    { ...exchange, _id },
    { new: true }
  );
  res
    .status(201)
    .json({ updatedExchange, msg: "Exchange Updated successfully" });
};
const deleteExchange = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no exchange with that id");
  await Exchanges.findByIdAndRemove(id);

  res.status(201).json({ msg: "Exchange deleted successfully" });
};

module.exports = {
  getAllExchanges,
  createNewExchange,
  updateExchange,
  deleteExchange,
};
