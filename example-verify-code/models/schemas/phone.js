const {Schema} = require("mongoose");

const phoneSchema = Schema({
    phone: {
        type: String,
        required: false,
        match: //g
    }
});

module.exports = phoneSchema;