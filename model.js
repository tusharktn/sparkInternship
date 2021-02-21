const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    address: String,
    balance: String,
  },
  { timestamps: true }
);

const customerModel = mongoose.model("Customer", customerSchema);

module.exports = customerModel;
