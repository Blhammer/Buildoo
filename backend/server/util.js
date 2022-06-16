const jwt = require('jsonwebtoken');
const configFile = require('../config/index');

function setToken(user) {
    if (!user) return;

    const id = user._id;
    const email = user.email;
    const token = jwt.sign({ id, email }, configFile.tokenKey);
    
    return token;
}

module.exports = {
    setToken
};