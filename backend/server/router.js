const { userRegister, userLogin, passwordUpdate } = require('./services/userAuth');
const { getListFiles, upload } = require('./controller/file');
const { userAuthorization, getUserByEmail, getUserById, getAllUsers } = require('./services/userGet');
const { getAllCards } = require('./services/serviceGet');
const { getAllComments } = require('./services/commentGet');
const { commentCreate, commentDelete } = require('./services/commentPost');
const { adminUpdate, adminDelete } = require('./services/userPost');
const { cardCreate, serviceUpdate, cardDelete } = require('./services/servicePost');
const { createLike, createDislike } = require('./services/like');

function expressRouter(router) {
    router.get('/verify', userAuthorization);
    router.get('/usersEmail', getUserByEmail);
    router.get('/usersId', getUserById);
    router.get('/users', getAllUsers);
    router.get('/cards', getAllCards);

    router.get('/files', getListFiles);
    router.get('/comments', getAllComments);

    router.post('/user/login', userLogin);
    router.post('/user/register', userRegister);
    router.post('/user/password', passwordUpdate);
    router.post('/admin/update', adminUpdate);
    router.post('/admin/delete', adminDelete);
    router.post('/comment/delete', commentDelete);

    router.post('/edit/service', serviceUpdate);
    router.post('/card/create', cardCreate);
    router.post('/card/comment', commentCreate);
    router.post('/card/like', createLike);
    router.post('/card/dislike', createDislike);
    router.post('/card/delete', cardDelete);

    router.post('/user/upload', upload);

    router.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found!' });
    });
}

module.exports = expressRouter;