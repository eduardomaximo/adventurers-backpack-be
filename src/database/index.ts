const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose
      .connect("mongodb://admin:admin@localhost:27017/admin")
      .then(() => console.log("Database connected."));
  } catch (err) {
    console.log(err);
  }
}

module.exports = main;
