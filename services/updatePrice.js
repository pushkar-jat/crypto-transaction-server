const { Price } = require("../Models/Price");
const {getPrice } = require('../api/api')

const logger = require("winston");

module.exports.getEthPrice = async (timestamp) => {
    try {
      let transaction = await Price.find({ timestamp: timestamp });
      return transaction;
    } catch (err) {
      logger.error(`get transaction failed due to error:${err}`);
    }
  };

module.exports.postEthPrice = async () => {
  try {
    let transactionList = await getPrice()
    if(transactionList?.data){ 
      await Price.create({price : transactionList?.data?.ethereum?.inr });
    }
    else{
        logger.error(`post api of eth in price failed due to error:${err}`); 
    } 
  } catch (err) {
    logger.error(`post price of eth in db failed failed due to error:${err}`); 
  }
};
