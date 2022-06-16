require('dotenv').config();
// console.log(process.env);

const startConfig = {
    port: process.env.PORT || 3003,
    dbUser: process.env.DB_USER || 'user1',
    dbPassword: process.env.DB_PASS || 123456,
    dbName: process.env.DB_NAME || 'Buildoo',
    dbAddress: "mongodb://localhost:27017/Buildoo",
    tokenKey: process.env.SECRET || 'MegaSecretKey'
}

module.exports = startConfig;