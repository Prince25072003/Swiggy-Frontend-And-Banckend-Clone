const dns = require('dns');
const mongoose = require('mongoose');

dns.setServers(['8.8.8.8', '8.8.4.4']);

async function main() {

  await mongoose.connect(process.env.DB_CONNECT_KEY);
}

module.exports = main;