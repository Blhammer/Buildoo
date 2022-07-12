require('dotenv').config();

const startConfig = {
    port: process.env.PORT || 3003,
    dbUser: process.env.DB_USER || 'user',
    dbPassword: process.env.DB_PASS || 'QTY5aS9LW2wn2QGv',
    dbName: process.env.DB_NAME || 'Buildoo',
    dbAddress: '_mongodb._tcp.cluster0.kduqy.mongodb.net',
    tokenKey: process.env.SECRET || 'MegaSecretKey'
}

module.exports = startConfig;