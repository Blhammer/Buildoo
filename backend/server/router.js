const { adminUpdate } = require('./services/userPost');
const { userRegister, userLogin } = require('./services/user');
const { userAuthorization, getUserByEmail, getUserById, getAllUsers } = require('./services/userGet');

function expressRouter(router) {
    router.get('/verify', userAuthorization);
    router.get('/usersEmail', getUserByEmail);
    router.get('/usersId', getUserById);
    router.get('/users', getAllUsers);

    router.post('/user/login', userLogin);
    router.post('/user/register', userRegister);

    router.post('/admin/update', adminUpdate);

    router.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found!' });
    });
}

module.exports = expressRouter;