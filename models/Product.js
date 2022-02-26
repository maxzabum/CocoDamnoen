const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let productSchema = new Schema(
  {
    title: {
      text: String,
      text_align: String,
      text_color: String,
    },
    description: {
      text: String,
      text_align: String,
      text_color: String,
    },
    image: {
      type: String,
    },
  },
  {
    collection: "product",
  }
);

module.exports = mongoose.model("Product", productSchema);
