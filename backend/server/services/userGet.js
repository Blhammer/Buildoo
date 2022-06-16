import { findUserById } from '../../database/user';
import { verifyToken } from '../util';

async function userAuthorization(req, res) {
    try {
        const { token } = req.query;

        if (!token) {
            return res.status(401).end();
        }

        const tokenStatus = await verifyToken(token);
        if (!tokenStatus) {
            return res.status(401).end();
        }

        const user = await findUserById(tokenStatus.id);
        return res.status(200).header('Authorization', token).send(user);
    }
    catch (err) { errorHandler(err, req, res) }
}

module.exports = {
    userAuthorization,
};