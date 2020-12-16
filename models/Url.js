const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const Url = new Schema({
  name: String,
  url: String,
});

// Compile model from schema
module.exports = mongoose.model("url", Url);
