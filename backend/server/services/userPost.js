const { updateAdmin, deleteUser } = require('../../database/services/user');

async function adminUpdate(req, res) {
    try {
        const user = req.body;
        if (!user) return res.status(401).send('Invalid data').end();

        user.isAdmin = !user.isAdmin;
        const updatedUser = await updateAdmin(user);

        return res.status(200).send(updatedUser);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function adminDelete(req, res) {
    try {
        const { id } = req.body;
        if (!id) return res.status(401).send('Invalid data').end();

        await deleteUser(id);

        return res.status(200);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

module.exports = {
    adminUpdate,
    adminDelete
};