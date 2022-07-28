const { mapErrors } = require('../../server/util');
const User = require('../models/User');
const { hashPassword } = require('../util');

const invalidData = (data) => {
    return !data || typeof data !== 'object';
}

async function createUser(user) {
    if (!user || !user.firstName || !user.lastName || !user.email || !user.password) {
        return res.status(401).send('Invalid data').end();
    }

    try {
        user.password = hashPassword(user.password);
        const userModel = new User(user);
        const savedUser = await userModel.save();
        return savedUser;
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function findUser(data) {
    if (invalidData(data)) {
        return res.status(401).send('Invalid data').end();
    }

    try {
        return await User
            .findOne(data)
            .populate('isAdmin')
    }
    catch (err) {
        errorsHandler(req, res, err);
    }
}

async function findUserById(id) {
    if (!id) {
        return res.status(401).send('Invalid data').end();
    }

    try {
        return await User
            .findById(id)
            .populate('isAdmin')
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function findUserByEmail(data) {
    if (!data) {
        return res.status(401).send('Invalid data').end();
    }

    try {
        return await User
            .find(data)
            .populate('isAdmin')
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function findAllUsers() {
    try {
        return await User
            .find()
            .populate('isAdmin')
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function updateAdmin(user) {
    if (invalidData(user)) {
        return res.status(401).send('Invalid data').end();
    }

    try {
        return await User
            .findOneAndUpdate({ _id: user._id }, user, { new: true })
            .populate('isAdmin')
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function updatePassword(user) {
    if (!user) {
        return res.status(401).send('Invalid data').end();
    }

    try {
        return await User
            .findOneAndUpdate({ _id: user._id }, user, { new: true })
            .populate('isAdmin')
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function deleteUser(id) {
    if (!id) {
        return res.status(401).send('Invalid data').end();
    }
    
    try {
        return await User
            .findByIdAndDelete(id)
            .populate('isAdmin')
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

function errorsHandler(req, res, err) {
    console.error(err.message);
    const error = mapErrors(err);
    return res.status(500).send({ message: error });
}

module.exports = {
    createUser,
    findUser,
    findUserByEmail,
    findUserById,
    findAllUsers,
    updateAdmin,
    updatePassword,
    deleteUser
};