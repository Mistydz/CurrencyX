const mongoose = require('mongoose')

const dbSchema = new mongoose.Schema({
    currencyName: {
        type: String,
        required: true,
    },
    buyPrice: {
        type: Number,
        required: true,
    },
    sellPrice: {
        type: Number,
        required: true,
    },
})

const db = mongoose.model("db", dbSchema)
module.exports = db
