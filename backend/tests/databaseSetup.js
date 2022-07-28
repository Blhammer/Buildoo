const { MongoClient } = require('mongodb');

const config = {
    dbUser: 'user',
    dbPassword: 'Q1W2E3R4T5',
    dbName: 'Buildoo-Test'
};

let connection;
let db;

beforeAll(async () => {
    const connectionDatabaseString = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbName}.kduqy.mongodb.net/?retryWrites=true&w=majority`;

    connection = await MongoClient.connect(connectionDatabaseString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    db = await connection.db(connectionDatabaseString);
});

afterAll(async () => {
    await connection.close();
});