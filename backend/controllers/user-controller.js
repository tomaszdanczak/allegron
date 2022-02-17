const User = require("../db/models/user-model");
const bcrypt = require("bcryptjs");
const users = require("../data/users");

class UserController {
  async seed(req, res) {
    // await User.deleteMany({})
    const createdUsers = await User.insertMany(users);
    res.send(createdUsers);
  }

  async signin(req, res) {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  }
}

module.exports = new UserController();
