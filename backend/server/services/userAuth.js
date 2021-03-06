const { createUser, findUser, updatePassword } = require('../../database/services/user');
const { setToken, mapErrors } = require('../util');
const { checkPassword, hashPassword } = require('../../database/util');

async function userRegister(req, res) {
    try {
        const user = req.body;

        if (!user.firstName || !user.lastName || !user.email || !user.password) {
            return res.status(401).send('Invalid data!').end();
        }

        if (user.email.trim() == '' || user.password.trim() == '') {
            throw new Error('Email and password are required');
        }

        const foundUser = await findUser({ email: user.email.trim().toLowerCase() });
        if (foundUser) {
            return res.status(401).send('The user already exists.').end();
        }

        user.email.trim().toLowerCase();
        user.password.trim();

        const createdUser = await createUser(user);
        const token = setToken(createdUser);
        return res.status(201).header('Authorization', token).send(createdUser);
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function userLogin(req, res) {
    try {
        const user = req.body;

        if (!user || !user.email || !user.password) {
            throw new Error('Invalid data');
        }

        const foundUser = await findUser({ email: user.email });
        if (!foundUser) {
            throw new Error('Invalid data');
        }

        const matchPassword = await checkPassword(user.password, foundUser.password);
        if (!matchPassword) {
            throw new Error('Invalid data');
        }

        const token = setToken(foundUser);
        return res.status(200).header('Authorization', token).json(foundUser);
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function passwordUpdate(req, res) {
    try {
        const { user, currentPassword, newPassword } = req.body;

        if (!user ||
            !currentPassword ||
            !newPassword ||
            currentPassword === '' ||
            newPassword === '' ||
            newPassword.length < 8 ||
            newPassword.length > 60
        ) return res.status(401).send('Invalid data').end();

        const foundUser = await findUser({ email: user.email });
        if (!foundUser) {
            return res.status(401).end();
        }

        const matchPassword = await checkPassword(currentPassword, user.password);
        if (!matchPassword) {
            return res.status(401).end();
        }

        const updatedPassword = hashPassword(newPassword);
        user.password = updatedPassword;
        const updatedUser = await updatePassword(user);

        return res.status(200).send(updatedUser);
    } catch (err) {
        errorsHandler(req, res, err);
    }
};

function errorsHandler(req, res, err) {
    console.error(err.message);
    const error = mapErrors(err);
    res.status(400).json({ message: error });
}

module.exports = {
    userRegister,
    userLogin,
    passwordUpdate
};