const { Transaction } = require("../Models/Transaction");
const {postTransactions} = require('../web3/getTransactions') 

const logger = require("winston");
 
module.exports.postTransactions = async (req,res) => {
  try {
    if(req.params.userAddress){
      let transactionList = await postTransactions(req.params.userAddress)
      return res.status(200).send({
        "message":"user transaction stored successfully",
        "success":true
      })
    }
    else{
      return res.status(400).send({
        "message":"user transaction stored failed due to bad request",
        "success":false
      })
    }
    
  } catch (err) {
    logger.error(`post transaction api failed due to error:${err}`);
    return res.status(500).send({
      "message":"user transaction failed",
      "success":false
    })
  }
};

module.exports.getTransactions = async (req,res) => {
  try {
    if(req.params.userAddress){
      let transactionList = await postTransactions(req.params.userAddress)
      return res.status(200).send({
        "message":"user transaction stored successfully",
        "success":true
      })
    }
    else{
      return res.status(400).send({
        "message":"user transaction stored failed due to bad request",
        "success":false
      })
    }
    
  } catch (err) {
    logger.error(`post transaction api failed due to error:${err}`);
    return res.status(500).send({
      "message":"user transaction failed",
      "success":false
    })
  }
};
