const dns = require('dns');
const mongoose = require('mongoose');

dns.setServers(['8.8.8.8', '8.8.4.4']);

async function main() {
  const mongoUri = process.env.DB_CONNECT_KEY || process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error('Missing MongoDB connection string in DB_CONNECT_KEY or MONGODB_URI');
  }

  await mongoose.connect(mongoUri);
}

module.exports = main;