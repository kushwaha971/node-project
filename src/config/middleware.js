const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(helmet());
  app.use(cors());
  app.use(morgan("combined"));
};
