const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let storeSchema = new Schema(
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
    collection: "store",
  }
);

module.exports = mongoose.model("Store", storeSchema);
