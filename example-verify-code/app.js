const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const {orderRouter} = require("./api");

app.use("/orders", orderRouter);

const PORT = process.env.PORT || 3000;

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=> {
    app.listen(PORT);
})

