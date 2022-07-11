const mongoose = require("mongoose");

const homeDataSchema = new mongoose.Schema(
  {
    title: { type: String },
    info_1: { type: String },
    info_2: { type: String },
    ID: { type: String },

  },
  { collection: "HomeData" }
);

module.exports = mongoose.model("homeData1", homeDataSchema);
