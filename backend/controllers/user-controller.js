const User = require("../db/models/user-model");
const bcrypt = require("bcryptjs");
const users = require("../data/users");
const generateToken = require("../helpers");
const bcryptjs = require("bcryptjs");

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
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  }

  async register(req, res) {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 8),
    });

    const createdUser = await newUser.save();

    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  }
}

module.exports = new UserController();
