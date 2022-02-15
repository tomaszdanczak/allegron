const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }));

// init database
require("./db/mongoose");

app.use(express.json());

// mount routes
app.use(require("./routes/api.js"));

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

module.exports = app;
