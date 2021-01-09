import jwt from 'jsonwebtoken';
import response from './response';
import User from '../models/user';

class verifyTokens {
  static verifyAllTokens = async (req, res, next, token) => {
    if (!token) {
      return response.setError(
        res,
        'No token provided, Access Denied!',
        401,
      );
    }
    try {
      const decodedToken = jwt.verify(token, process.env.JWTKEY);

      const user = User.findOne({
        email : decodedToken.payload.email
    })
    .then(async (user) => {
        if (user)
            return response.setError(res, 401, "The email address you have entered is already associated with another account.")
        if (!req.body.email)
            return response.setError(res, 401, "You have not provided a mobile number for this account.")
    })

      decodedToken.token = token;
      if (user === undefined) {
        return response.setError(
          res,
          'You provided the invalid token!',
          401,
        );
      }

      if (user.token !== token && user.token === null) {
        return response.setError(res, 'You need to signin first!', 401);
      }
      req.user = user;
      return next();
    } catch (error) {
      return response.setError(res, 'You provided the invalid token!', 401);
    }
  };
}
export default verifyTokens;
