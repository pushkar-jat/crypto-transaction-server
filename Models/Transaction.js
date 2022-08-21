const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    
    user_address: {
        type: String,
    },
    user_transaction: {
        type: Array , 
        default : []
    } 
}, {
    timestamps: true
})

const Transaction = mongoose.model("userTransaction", TransactionSchema)

module.exports.Transaction = Transaction