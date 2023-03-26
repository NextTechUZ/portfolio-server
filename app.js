const express = require("express");
const morgan = require("morgan");
const orderRoutes = require("./routers/orderRouter");
const userRoutes = require("./routers/userRouter");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

module.exports = app;
