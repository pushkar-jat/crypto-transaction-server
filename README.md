# Crypto Transaction Server
 Server Side Application to fetch Crypto Transactions of a user

# Description

This sample demonstrates how to get and store blockchain transaction on basis of user address. Developed in Nodejs, with three major functionalities: get and store transaction with mongodb, a system within the same server to fetch the price of Ethereum every 10 minutes and store it in the database, and Develop a `GET` API for a user where they give their address as an input and get their current balance and current price of ether as output.     
Project Include azure service app for deployment, Central Logging system using winston.
</br>

### Table of Contents
* [Assignment](#assignments)
* [Installation](#installation) 
* [Deployment](#deployment) 
* [Central Log system](#logs) 
</br>
</br> 

## Assignments: <i id="assignments"></i>

[✅] Develop the below workflow in Nodejs for fetch Crypto Transaction of a user
[✅] Task 1 - Crypto Transaction of a user fetch from etherscan and should be stored in MongoDB
[✅] Task 2 - a system within the same server to fetch the price of Ethereum every 10 minutes and store it in the database
[✅] Task 3 - Develop a `GET` API for a user where they give their address as an input and get their current balance and current price of ether as output.
Note: - As mentioned in task The balance should be calculated from the transactions of the user. If the “from” address is of the user, the “value” property gets added to the user’s balance. If the “to” address is of the user, the “value” property gets deducted from the user’s balance. These transactions are the ones that were fetched in the previous tasks but for calculate current balance we need to use “from” address of the user for subtract from current balance and use “to” address of the user for added in current balance, because "to" address defined that user receive some amount and "from" address for transfer amount from address.
[✅] Task 4 - Deployment of Mongodb on mongodb atlas cloud 
[✅] Task 5 - Deployment of Server Side Application on azure app service 
[✅] Centralized log monitoring system for complete application using winston 


</br>

## Deployed URL
``` 
Backend - https://recrutment-bot.azurewebsites.net/api/messages
```

## Installation: <i id="installation"></i> 
```
Unzip file
npm install
```
</br>

## Usage: <i id="usage"></i> 
<b>1. Variable in `.env` file or use given defaults</b>
```
 MONGOOSE_STRING=mongodb+srv://user:user@cluster0.fqqttdq.mongodb.net/?retryWrites=true&w=majority
PORT=3000
Environment=Production
```

<b>2. Start server with:</b>
```
node index.js
```
