const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
    {
        Restaurant: {
            type: String,
            required: true,
        },
        numberOfEaters: {
            type: Number,
            required: true,
        },
        restaurantNumber: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Order = model("Order", orderSchema);

module.exports = Order;