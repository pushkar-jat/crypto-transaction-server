const userController = require('../controllers/userTransactionController')
const express = require('express')

const router = express.Router()
 
router.get('/:userAddress', userController.postTransactions)

router.get('/get-balance/:userAddress', userController.getTransactions)

module.exports = router