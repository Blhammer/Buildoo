const { userRegister, userLogin } = require('./services/user');

function expressRouter(router) {
    router.post('/user/login', userLogin);
    router.post('/user/register', userRegister);

    router.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found!' });
    });
}

module.exports = expressRouter;