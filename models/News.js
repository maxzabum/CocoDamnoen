const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let newsSchema = new Schema(
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
    type: {
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
    collection: "news",
  }
);

module.exports = mongoose.model("News", newsSchema);
