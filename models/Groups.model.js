const { Schema, model } = require("mongoose");

const groupSchema = new Schema(
  {
    leader: {
      type: String,
      required: true,
    },
    eaters: {
      type: [String],
      required: true,
    },
    restaurant: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Group = model("Group", groupSchema);

module.exports = Group;
