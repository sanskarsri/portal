const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

let UserSchema = mongoose.Schema(
  {
    id: {
      type: ObjectId,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    card: {
      type: String,
      required: true,
    },
    age: {
      type: Number, 
      min: 16,
      max: 65,
      required: true,
    },
    paid: {
      type:Boolean,
      default: true
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("user", UserSchema);
