const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

let BatchSchema = mongoose.Schema(
  {
    id: {
      type: ObjectId,
    },
    batch: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("batch", BatchSchema);
