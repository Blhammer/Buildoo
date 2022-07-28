const { userRegister, userLogin, passwordUpdate } = require('./services/userAuth');
const { upload, deleteFile } = require('./controller/file');
const { userAuthorization, getUserByEmail, getUserById, getAllUsers } = require('./services/userGet');
const { getAllCards, getServiceById, getFilterServices, getServicesPaginated, getServicesCount } = require('./services/serviceGet');
const { getAllComments } = require('./services/commentGet');
const { commentCreate, commentDelete } = require('./services/commentPost');
const { adminUpdate, adminDelete } = require('./services/userPost');
const { cardCreate, serviceUpdate, cardDelete } = require('./services/servicePost');
const { createLike, createDislike } = require('./services/like');

function expressRouter(router) {
    router.get('/api/verify', userAuthorization);
    router.get('/api/usersEmail', getUserByEmail);
    router.get('/api/usersId', getUserById);
    router.get('/api/serviceId', getServiceById);
    router.get('/api/users', getAllUsers);
    router.get('/api/cards', getAllCards);
    router.get('/api/comments', getAllComments);
    router.get('/api/cardsPaginate', getServicesPaginated);
    router.get('/api/cards/count', getServicesCount);

    router.post('/api/filter/services', getFilterServices);
    router.post('/api/user/login', userLogin);
    router.post('/api/user/register', userRegister);
    router.post('/api/user/password', passwordUpdate);
    router.post('/api/admin/update', adminUpdate);
    router.post('/api/admin/delete', adminDelete);
    router.post('/api/comment/delete', commentDelete);

    router.post('/api/edit/service', serviceUpdate);
    router.post('/api/card/create', cardCreate);
    router.post('/api/card/comment', commentCreate);
    router.post('/api/card/like', createLike);
    router.post('/api/card/dislike', createDislike);
    router.post('/api/card/delete', cardDelete);

    router.post('/api/image/upload', upload);
    router.post('/api/image/delete', deleteFile);
}

module.exports = expressRouter;