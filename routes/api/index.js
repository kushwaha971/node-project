const express = require("express");
const router = express.Router();

const Router = require("./v1/index");

router.use("/v1", Router);

module.exports = router;
