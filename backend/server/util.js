const jwt = require('jsonwebtoken');
const configFile = require('../config/index');

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
        console.error(err);
        return undefined;
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

module.exports = {
    setToken,
    verifyToken,
    filterUsersByDeletedOne
};