const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Tomek",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: true,
  },
  {
    name: "John",
    email: "user@example.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: false,
  },
];

module.exports = users;
