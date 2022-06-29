const { adminUpdate, adminDelete } = require('./services/userPost');
const { userRegister, userLogin } = require('./services/userAuth');
const { userAuthorization, getUserByEmail, getUserById, getAllUsers } = require('./services/userGet');
const { cardCreate } = require('./services/servicePost');
const { getAllCards } = require('./services/serviceGet');

function expressRouter(router) {
    router.get('/verify', userAuthorization);
    router.get('/usersEmail', getUserByEmail);
    router.get('/usersId', getUserById);
    router.get('/users', getAllUsers);

    router.get('/cards', getAllCards);

    router.post('/user/login', userLogin);
    router.post('/user/register', userRegister);
    router.post('/admin/update', adminUpdate);
    router.post('/admin/delete', adminDelete);

    router.post('/card/create', cardCreate);
    // router.post('/card/delete', cardDelete);

    router.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found!' });
    });
}

module.exports = expressRouter;