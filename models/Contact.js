const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let contactSchema = new Schema(
  {
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    mail: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    line: {
      type: String,
    },
    instagram: {
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
    collection: "contact",
  }
);

module.exports = mongoose.model("Contact", contactSchema);
