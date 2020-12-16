const express = require("express");
const morgan = require("morgan");
const db = require("./connection");
const Url = require("./models/Url");
const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static("./public"));
app.get("/", (req, res, next) => {
  res.send("<h1>Hello world<h1>");
});

app.use("/api/urls", require("./routes/urls"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listen on port...`);
});
