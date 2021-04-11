const {Schema, model, ObjectId } = require("mongoose");

const {phoneSchema} = require("./schemas");

const orderSchema = Schema({
    products: [ObjectId],
    email: {
        type: String,
        required: [true, "Email - обязательно поле заказа"]
    },
    code: {
        type: String,
        required: [true, "Код для оправки на почту должен быть сгенерирован"]
    },
    verify: {
        type: Boolean,
        default: false
    },
    phone: phoneSchema
});

const Order = model("order", orderSchema);

module.exports = Order;