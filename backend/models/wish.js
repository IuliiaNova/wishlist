const { Schema, model } = require("mongoose");

const WishSchema = Schema({
  wishTitle: {
    type: String,
    required: true,
  },
  wishId: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  }
});

module.exports = model("Wish", WishSchema);