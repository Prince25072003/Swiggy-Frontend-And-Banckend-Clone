const redis = require('redis');

const redisClient = redis.createClient({
    username: 'default',
    password: '8vdy1NCTDzSRgs0xiAdMinQFwutZlIK8',
    socket: {
        host: 'office-oasislike-ultragentle-68971.db.redis.io',
        port: 18513
    }
});


module.exports = redisClient;