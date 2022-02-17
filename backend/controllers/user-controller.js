const User = require("../db/models/user-model");
const users = require("../data/users");

class UserController {
  async seed(req, res) {
    // await User.deleteMany({})
    const createdUsers = await User.insertMany(users);
    res.send(createdUsers);
  }
}

module.exports = new UserController();
