import response from '../utils/response';
import User from '../models/user';
import verifyTokens from '../utils/tokenUtils';


/**
 * User Middleware
 */
export default class UserMiddleware {
    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} function to create new user
     */
    /**
   * check request params
   * @param {Object} req user request
   * @param {Object} res user response
   * @param {Object} next continue with request
   * @returns {Object} user response
   */
  static paramTokenVerification(req, res, next) {
    const token = req.params.autorizations;
    if (Number(token)) {
      return response.setError(res, 'Token must not be a number', 401);
    }
    verifyTokens.verifyAllTokens(req, res, next, token);
  }

  /**
   * check request headers
   * @param {Object} req user request
   * @param {Object} res user response
   * @param {Object} next continue
   * @returns {Object} return user message
   */
  static headerTokenVerification(req, res, next) {
    if (req.headers.token === undefined) {
      return response.setError(
        res,
        401,
        'Please Set The Authorization Header!',
      );
    }
    if (!/(?=^[Bb]earer)/.test(req.headers.token)) {
      return response.setError(
        res,
        401,
        '"Bearer" not found Invalid token!',
      );
    }
    const token = req.headers.token.split(' ')[1];
    verifyTokens.verifyAllTokens(req, res, next, token);
  }
}
