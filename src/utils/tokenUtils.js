import jwt from 'jsonwebtoken';
import response from './response';
import User from '../models/user';

class verifyTokens {
    static verifyAllTokens = async (req, res, next, token) => {
        if (!token) {
            return response.setError(
                401,
                res,
                'No token provided, Access Denied!',
            );
        }
        try {
            const decodedToken = jwt.verify(token, process.env.JWTKEY);

            const user = User.findOne({
                    email: decodedToken.payload.email
                });

            decodedToken.token = token;
            if (user === undefined) {
                return response.setError(
                    res,
                    401,
                    'You provided the invalid token!',
                );
            }

            if (user.token !== token && user.token === null) {
                return response.setError(res, 401, 'You need to signin first!');
            }
            req.user = user;
            return next();
        } catch (error) {
            return response.setError(res, 401, 'You provided the invalid token!');
        }
    };
}
export default verifyTokens;