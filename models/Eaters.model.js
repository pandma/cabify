const { Schema, model } = require("mongoose");

const eatersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Eater = model("Eater", eatersSchema);

module.exports = Eater;
