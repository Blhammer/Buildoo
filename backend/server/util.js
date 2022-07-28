const jwt = require('jsonwebtoken');
const configFile = require('../config/config');

function setToken(user) {
    if (!user) return;

    const id = user._id;
    const email = user.email;

    const token = jwt.sign({ id, email }, configFile.tokenKey);

    return token;
}

function verifyToken(token) {
    try {
        return jwt.verify(token, configFile.tokenKey);
    }
    catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        return res.status(500).send({ message: error });
    }
}

function filterUsersByDeletedOne(users, id) {
    if (!users || !id) {
        return;
    }

    const match = (user) => user._id == id;
    if (users.some(match)) {
        const index = users.findIndex(match);
        users.splice(index, 1);
    }

    return users;
}

function mapErrors(err) {
    if (Array.isArray(err)) {
        return err.join('\n');
    } else if (err.name == 'ValidationError') {
        return Object.values(err.errors).map(e => e.message).join('\n');
    } else if (typeof err.message == 'string') {
        return err.message;
    } else {
        return 'Request error';
    }
}

module.exports = {
    setToken,
    verifyToken,
    filterUsersByDeletedOne,
    mapErrors
};