const jwt = require('jsonwebtoken');
const configFile = require('../config/index');

function setToken(user) {
    if (!user) return;

    const id = user._id;
    const email = user.email;
    const token = jwt.sign({ id, email }, configFile.tokenKey);
    
    return token;
}

async function verifyToken(token) {
    try {
        return await jwt.verify(token, configFile.tokenKey);
    }
    catch (err) {
        console.error(err);
        return undefined;
    }
}

module.exports = {
    setToken,
    verifyToken
};