const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },
    role: {
      type: String,
    },
    phone: {
      type: String,
    },
    create_date: {
      type: Date,
    },
    modify_date: {
      type: Date,
    },
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("User", userSchema);
