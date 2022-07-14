const { findUserById, findUserByEmail, findAllUsers } = require('../../database/services/user');
const { verifyToken, mapErrors } = require('../util');

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
        errorsHandler(req, res, err);
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await findAllUsers({});
        return res.status(200).send(users);
    }
    catch (err) {
        errorsHandler(req, res, err);
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
        errorsHandler(req, res, err);
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
        errorsHandler(req, res, err);
    }
}

function errorsHandler(req, res, err) {
    console.error(err.message);
    const error = mapErrors(err);
    return res.status(500).send({ message: error });
}

module.exports = {
    userAuthorization,
    getAllUsers,
    getUserByEmail,
    getUserById
};