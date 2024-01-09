const User = require("../../models/user/user.model");
const userController = {};

userController.register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

userController.login = async (req, res) => {
  try {
    // Implement login logic here
    res.send("Login endpoint");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = userController;
