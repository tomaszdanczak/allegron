const mongoose = require("mongoose");
const { database } = require("./../config");

mongoose.connect(database);

const Company = mongoose.model("Company", {
  slug: {
    type: String,
  },
  name: {
    type: String,
  },
});

// Save example company in DB
async function main() {
  const company = new Company({
    name: "TS",
    slug: "ts",
  });

  await company.save();
}

main();
