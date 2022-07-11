const mongoose = require('mongoose');
const configFile = require('./index');

const urlConnectionString = `mongodb+srv://${configFile.dbUser}:${configFile.dbPassword}@cluster0.kduqy.mongodb.net/?retryWrites=true&w=majority`;

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