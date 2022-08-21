const { Transaction } = require("../Models/Transaction");
const {getUserTransaction } = require('../api/api')

const logger = require("winston");

module.exports.getTransactions = async (user_address) => {
    try {
      let transaction = await Transaction.find({ user_address: user_address });
      return transaction;
    } catch (err) {
      logger.error(`get transaction failed due to error:${err}`);
    }
  };

module.exports.postTransactions = async (user_address) => {
  try {
    let transactionList = await getUserTransaction(user_address)
    if(transactionList?.data?.status == '1'){
      let body = {
        user_address: user_address,
        user_transaction: transactionList?.data?.result
      }
      let transaction = await Transaction.create(body);
      return transaction
    }
    else{
        return false
    } 
  } catch (err) {
    logger.error(`post transaction api failed due to error:${err}`);
    return err
  }
};
