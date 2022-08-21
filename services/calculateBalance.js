const { Transaction } = require("../Models/Transaction");
const { getPrice } = require('../api/api')
var Web3 = require('web3'); 
const logger = require("winston");

 
module.exports.getBalance = async (userAddress) => {
  try {
    let balance = null
    let transaction = await Transaction.find({user_address:userAddress})
    let current_balance = 0 
    if(transaction){  
      transaction[transaction.length - 1].user_transaction.map((data)=>{
        if(data?.from == userAddress && data.value){
            current_balance = current_balance + Number(data.value)
        }
        else{
            current_balance = current_balance - Number(data.value)
        } 
      })
    }
    else{
        logger.error(`get transaction failed due to error:${err}`); 
        return err
    } 
    let price = await getPrice()
    price = price?.data?.ethereum?.inr
    balance = Number(Web3.utils.fromWei(current_balance.toString(), 'ether'))*price
    return {
        currentBalance:balance,
        ethPrice:price,
        currency:'INR'
    }
  } catch (err) {
    logger.error(`get transaction in get balance failed failed due to error:${err}`); 
    return err
  }
};
