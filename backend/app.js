const express = require("express");

const app = express();

// init database
require("./db/mongoose");

app.get("/", (req, res) => {
  res.send("Hello express");
});

module.exports = app;
