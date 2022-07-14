const bcrypt = require('bcrypt');

function hashPassword(password) {
    if (typeof password !== 'string') {
        return res.status(401).send('Invalid data').end();
    };

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    return hashPassword;
}

async function checkPassword(password, hash) {
    const match = await bcrypt.compare(password, hash);
    return match;
};

module.exports = {
    hashPassword,
    checkPassword
};