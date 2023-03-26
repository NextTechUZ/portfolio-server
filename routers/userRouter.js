const express = require("express");
const { login } = require("../controllers/authController");

const userRoutes = express.Router();

userRoutes.route("/login").post(login);

module.exports = userRoutes;
