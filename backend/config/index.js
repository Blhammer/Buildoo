require('dotenv').config();

const startConfig = {
    port: process.env.PORT || process.env.START_CONFIG_PORT,
    dbUser: process.env.DB_USER || process.env.START_CONFIG_USERNAME,
    dbPassword: process.env.DB_PASS || process.env.START_CONFIG_PASSWORD,
    dbName: process.env.DB_NAME || process.env.DATABASE_NAME,
    dbAddress: process.env.DATABASE_URL || process.env.DATABASE_ADDRESS,
    tokenKey: process.env.SECRET || process.env.DATABASE_SECRET_KEY
}

module.exports = startConfig;