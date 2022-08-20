require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const winston = require("winston");


//logger initialize for centralize log monitoring system
const { initializeLogger } = require("./utilities/logger");
const logger = initializeLogger();

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs');

const connect = mongoose.connect(process.env.MONGOOSE_STRING)

connect
.then((db) => {
    logger.info("Connected to db Successfully");
})
.catch((err) => {
    logger.error(`Connected to db failed due to ${err}`);
})

app.listen(process.env.PORT, () => {
    logger.info(`Server is running on PORT ${process.env.PORT}`);
})