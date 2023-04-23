const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, require: [true, "Name is required"] },
  phone_number: { type: String, require: [true, "Phone is required"] },
  product: { type: String, require: [true, "Theme is required"] },
  budjet: { type: String, require: [true, "Budjet is required"] },
  message: { type: String },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
