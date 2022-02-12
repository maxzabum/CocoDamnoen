const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cartoonSchema = new Schema(
  {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    type: {
      type: Number,
    },
    price: {
      type: String,
    },
    count: {
      type: String,
    },
    link: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    collection: "cartoon",
  }
);

module.exports = mongoose.model("Cartoon", cartoonSchema);
