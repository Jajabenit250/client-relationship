import dotenv, { config } from 'dotenv';
import ResponseService from '../utils/response.util';
import User from '../models/user';


/**
 * Auth controller
 */
export default class UserController {
	/**
	 * @param {object} req
	 * @param {object} res
	 * @returns {object} function to create new user
	 */
	static async signUp(req, res) {
        const { phoneNumber } = req.body;
        const user = await User.find({}, {
            username: 1,
            firstName: 1,
            accountType: 1,
            createdAt: 1,
            image: 1,
          });
		if (user){
			ResponseService.setSuccess(res, 200, successMessage, user)
		}
		return ResponseService.setError(res, 404, errorMessage)
    }

    /**
	 * @param {object} req
	 * @param {object} res
	 * @returns {object} function to signIn a User
	 */
	static async signIn(req, res) {
		if (user){
			ResponseService.setSuccess(res, 200, successMessage, user)
		}
		return ResponseService.setError(res, 404, errorMessage)
    }

    /**
	 * @param {object} req
	 * @param {object} res
	 * @returns {object} function to complete Profile
	 */
	static async editProfile(req, res) {
    }
}
