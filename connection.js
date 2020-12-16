const mongoose = require("mongoose");
require("dotenv").config();
const connectionURL = process.env.MONGO_URI;

const db = mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("some little issue");
  });

module.exports = db;
