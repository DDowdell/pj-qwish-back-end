const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, },
    author: { required: true, type: mongoose.Schema.Types.ObjectId, ref: "User", },
    items: [{
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Item", },
      quantity: { type: Number, min: 0, },
    }],
    description: String,
    closeDate: Date,
    sharedWith: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
  },
  { timestamps: true }
);

const List = mongoose.model("List", listSchema);

module.exports = List;
