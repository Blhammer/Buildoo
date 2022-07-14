const { updateAdmin, deleteUser } = require('../../database/services/user');
const { mapErrors } = require('../util');

async function adminUpdate(req, res) {
    try {
        const user = req.body;
        if (!user) return res.status(401).send('Invalid data').end();

        user.isAdmin = !user.isAdmin;
        const updatedUser = await updateAdmin(user);

        return res.status(200).send(updatedUser);
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function adminDelete(req, res) {
    try {
        const { id } = req.body;
        if (!id) return res.status(401).send('Invalid data').end();

        await deleteUser(id);

        return res.status(200);
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
    adminUpdate,
    adminDelete
};