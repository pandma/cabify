const { Schema, model } = require("mongoose");

const groupSchema = new Schema(
  {
    leader: {
      type: String,
    },
    eaters: {
      type:  [String],
    },
    restaurant: {
      type:String,
    },
  },
  {
    timestamps: true,
  }
);

const Group = model("Group", groupSchema);

module.exports = Group;
