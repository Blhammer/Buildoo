const { adminUpdate, adminDelete } = require('./services/userPost');
const { userRegister, userLogin } = require('./services/userAuth');
const { userAuthorization, getUserByEmail, getUserById, getAllUsers } = require('./services/userGet');
const { cardCreate, serviceUpdate } = require('./services/servicePost');
const { getAllCards } = require('./services/serviceGet');
const { getListFiles, upload } = require('./controller/file');

function expressRouter(router) {
    router.get('/verify', userAuthorization);
    router.get('/usersEmail', getUserByEmail);
    router.get('/usersId', getUserById);
    router.get('/users', getAllUsers);
    router.get('/cards', getAllCards);

    router.get('/files', getListFiles);

    router.post('/user/login', userLogin);
    router.post('/user/register', userRegister);
    router.post('/admin/update', adminUpdate);
    router.post('/admin/delete', adminDelete);

    router.post('/edit/service', serviceUpdate);
    router.post('/card/create', cardCreate);
    // router.post('/card/delete', cardDelete);

    router.post('/user/upload', upload);

    router.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found!' });
    });
}

module.exports = expressRouter;