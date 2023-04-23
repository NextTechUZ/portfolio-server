const jwt = require("jsonwebtoken");
const util = require("util");

const { sendSucces, sendError } = require("../utils/sendData");

const createToken = (username, password) => {
  return jwt.sign({ username, password }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    if (!username || !password) {
      return sendError(res, "Please provide both password and username", 404);
    }

    if (username !== "nextech" || password !== "nehiqEYNIRoo") {
      return sendError(res, "Wrong password or username", 404);
    }

    const token = createToken(username, password);

    sendSucces(res, { token }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.routeProtector = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return sendError(res, "You are not logged in", 401);
    }

    const decoded = await util.promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET
    );
    const { username, password } = decoded;

    if (username !== "nextech" || password !== "nehiqEYNIRoo") {
      return sendError(res, "Wrong password or username", 404);
    }

    next();
  } catch (error) {
    sendError(res, error.message, 404);
  }
};
