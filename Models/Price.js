const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const PriceSchema = new Schema({
      
    price: {
        type: Number,
        required: true,
    },
    currency : {
        type: String,
        required: true,
        default : 'INR'
    }
},{
    timestamps: true
})

const Price = mongoose.model("ethPrice", PriceSchema)

module.exports.Price = Price