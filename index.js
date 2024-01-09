const express = require("express");
const db = require("./src/config/db.config");
const middleware = require("./src/config/middleware");
const indexRouter = require("./routes/api");

require('dotenv').config();
const app = express();

// Connect to MongoDB
db();

// Middleware
middleware(app);

app.get("/", (req, res) => {
  return res.status(200).send({ msg: "Working" });
});


// Routes
app.use("/api", indexRouter);

module.exports = app;
