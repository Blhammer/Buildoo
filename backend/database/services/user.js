const User = require('../models/Users');
const { hashPassword } = require('../util');

const invalidData = (data) => {
    return !data || typeof data !== 'object';
}

async function createUser(user) {
    if (!user || !user.firstName || !user.lastName || !user.email || !user.password) {
        return undefined;
    }

    try {
        user.password = hashPassword(user.password);
        const userModel = new User(user);
        const savedUser = await userModel.save();
        return savedUser;
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function findUser(data) {
    if (invalidData(data)) {
        return undefined;
    }

    try {
        return await User
            .findOne(data)
            .populate('isAdmin');
    }
    catch (err) {
        console.error(err);
        return undefined;
    }
}

async function findUserById(id) {
    if (!id) {
        return undefined;
    }

    try {
        return await User
            .findById(id)
            .populate('isAdmin');
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function findUserByEmail(data) {
    if (!data) {
        return undefined;
    }

    try {
        return await User
            .find(data)
            .populate('isAdmin');
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function findAllUsers() {
    try {
        return await User
            .find()
            .populate('isAdmin');
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function updateAdmin(user) {
    if (invalidData(user)) {
        return undefined;
    }

    try {
        return await User
            .findOneAndUpdate({ _id: user._id }, user, { new: true })
            .populate('isAdmin')
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function deleteUser(id) {
    if (!id) {
        return undefined;
    }
    
    try {
        return await User
            .findByIdAndDelete(id)
            .populate('isAdmin')
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

module.exports = {
    createUser,
    findUser,
    findUserByEmail,
    findUserById,
    findAllUsers,
    updateAdmin,
    deleteUser
};