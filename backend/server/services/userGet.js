const { findUserById, findUserByEmail, findAllUsers } = require('../../database/user');
const { verifyToken } = require('../util');

async function userAuthorization(req, res) {
    try {
        const { token } = req.query;
        if (!token) {
            return res.status(401).end();
        }

        const tokenStatus = await verifyToken(token);
        if (!tokenStatus) {
            return res.status(401).end();
        }

        const user = await findUserById(tokenStatus.id);
        return res.status(200).header('Authorization', token).send(user);
    }
    catch (err) {
        console.error(err);
        return undefined;
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await findAllUsers();
        return res.status(200).send(users);
    }
    catch (err) {
        console.error(err);
        return undefined;
    }
}

async function getUserByEmail(req, res) {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(401).end();
        }

        const user = await findUserByEmail({ email });
        return res.status(200).send(user);
    }
    catch (err) {
        console.error(err);
        return undefined;
    }
}

async function getUserById(req, res) {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(401).end();
        }

        const user = await findUserById(id);
        return res.status(200).send(user);
    }
    catch (err) {
        console.error(err);
        return undefined;
    }
}

module.exports = {
    userAuthorization,
    getAllUsers,
    getUserByEmail,
    getUserById
};