const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let productSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
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
    collection: "product",
  }
);

module.exports = mongoose.model("Product", productSchema);
