const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExchangeSchema = new Schema({
  exchangeNumber: {
    type: Number,
    required: true,
  },
  exchanger: {
    type: String,
    required: true,
  },
  openDate: {
    type: String,
    required: true,
  },
  closeDate: {
    type: String,
    required: true,
  },
  lastModifiedDate: {
    type: String,
    required: true,
  },
  accountBalance: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Exchanges", ExchangeSchema);
