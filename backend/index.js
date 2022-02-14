require("dotenv").config();
const { port } = require("./config");
const app = require("./app.js");

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
