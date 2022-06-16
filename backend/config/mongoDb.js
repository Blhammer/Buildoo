const mongoose = require('mongoose');
const configFile = require('./index');

// const urlConnectionString = `mongodb+srv://${configFile.dbUser}:${configFile.dbPassword}@${configFile.dbAddress}/${configFile.dbName}?retryWrites=true&w=majority`;
const urlConnectionString = 'mongodb://localhost:27017/Buildoo';

async function databaseConfiguration() {
    try {

        await mongoose.connect(urlConnectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, connectionDatabase);

        function connectionDatabase(err) {
            err
                ? console.error(err)
                : console.log('Database connected!');
        }
    } catch (err) {
        console.error('Error connecting to the database');
        process.exit(1);
    }
}

module.exports = databaseConfiguration;