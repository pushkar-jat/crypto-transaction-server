const axios = require("axios");  
const logger = require("winston");
 
module.exports.getUserTransaction = async function (user_address) {
  try { 
    if (user_address) {
      const URL = `https://api.etherscan.io/api?module=account&action=txlist&address=${user_address}&startblock=0&endblock=99999999&page=1&offset=&sort=asc&apikey=QR3KJ3X8YH6PXUWGNZG689PTNEZMSZKHY2`;
      let userTransaction = await axios.get(URL)
      return userTransaction;     
    }
    return 
  } catch (err) {
    logger.error(`get country list api failed due to error:${err}`);
  }
};

module.exports.getPrice = async function () {
  try {  
      const URL = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr`;
      const price = await axios.get(URL)
      return price;
  } catch (err) {
    logger.error(`get price api failed due to error:${err}`);
  }
};
 
