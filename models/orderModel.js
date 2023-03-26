const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, require: [true, "Name is required"] },
  course: { type: String, require: [true, "Course is required"] },
  phone_number: { type: String, require: [true, "Phone is required"] },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
