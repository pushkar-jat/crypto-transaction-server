require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const winston = require("winston");
const { postEthPrice } = require('./services/updatePrice')


//logger initialize for centralize log monitoring system
const { initializeLogger } = require("./utilities/logger");
const logger = initializeLogger();

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs');

const userRoute = require('./routers/transaction') 

const connect = mongoose.connect(process.env.MONGOOSE_STRING)

connect
.then((db) => {
    logger.info("Connected to db Successfully");
})
.catch((err) => {
    logger.error(`Connected to db failed due to ${err}`);
})

// update ethereum price in every 10 minutes
var now = new Date();
var min = now.getMinutes();
var startIn = 1 - (min % 2); 
setTimeout(runInterval, startIn * 60 * 1000);
function runInterval() {
    setInterval(function() {
        postEthPrice()
    }, 1 * 60 * 1000);
} 

app.use('/api/user', userRoute) 

app.listen(process.env.PORT, () => {
    logger.info(`Server is running on PORT ${process.env.PORT}`);
})