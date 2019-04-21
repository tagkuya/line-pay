require("dotenv").config();

// Import packages.
const uuid = require("uuid/v4");
const cache = require("memory-cache");

// Instanticate LINE Pay API SDK.
const line_pay = require("line-pay");

module.exports.pay = new line_pay({
    channelId: process.env.LINE_PAY_CHANNEL_ID,
    channelSecret: process.env.LINE_PAY_CHANNEL_SECRET,
    hostname: process.env.LINE_PAY_HOSTNAME,
    isSandbox: true
})

