const { createUser, findUser } = require('../../database/services/user');
const { setToken } = require('../util');
const { checkPassword } = require('../../database/util');

async function userRegister(req, res) {
    try {
        const user = req.body;

        if (!user.firstName || !user.lastName || !user.email || !user.password) {
            return res.status(401).send('Invalid data!').end();
        }

        const foundUser = await findUser({ email: user.email });
        if (foundUser) {
            return res.status(401).send('The user already exists.').end();
        }

        const createdUser = await createUser(user);
        const token = setToken(createdUser);
        return res.status(200).header('Authorization', token).send(createdUser);
    } catch (error) {
        return res.status(500).send({ error: 'Something failed!' });
    }
}

async function userLogin(req, res) {
    try {
        const user = req.body;

        if (!user || !user.email || !user.password) {
            return res.status(401).send('Invalid data').end();
        }

        const foundUser = await findUser({ email: user.email });
        if (!foundUser) {
            return res.status(401).end();
        }

        const matchPassword = await checkPassword(user.password, foundUser.password);
        if (!matchPassword) {
            return res.status(401).end();
        }

        const token = setToken(foundUser);
        return res.status(200).header('Authorization', token).send(foundUser);
    } catch (err) {
        return res.status(500).send({ error: 'Something failed!' });
    }
} 

module.exports = {
    userRegister,
    userLogin
};