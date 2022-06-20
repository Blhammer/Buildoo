const User = require('./models/Users');
const { hashPassword } = require('./util');

const invalidSelector = (selector) => {
    return !selector || typeof selector !== 'object';
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

async function findUser(selector) {
    if (invalidSelector(selector)) {
        return undefined;
    }

    try {
        return await User
            .findOne(selector)
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

async function findUserByEmail(selector) {
    if (invalidSelector(selector)) return undefined;
    try {
        return await User
            .find(selector)
            .populate('isAdmin');
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function findAllUsers() {
    try {
        return await User
            .find({})
            .populate('isAdmin');
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function updateAdmin(body) {
    if (!body) {
        return undefined;
    }

    try {
        return await User
            .findOneAndUpdate({ _id: body._id }, body, { new: true })
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
    updateAdmin
};