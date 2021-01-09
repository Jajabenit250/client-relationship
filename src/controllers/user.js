import dotenv, {
    config
} from 'dotenv';
import response from '../utils/response';
import User from '../models/user';


/**
 * User controller
 */
export default class UserController {
    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} function to create new user
     */
    static async signUp(req, res) {
        const {
            email,
            firstName
        } = req.body;
        User.findOne({
                email
            })
            .then(async (user) => {
                if (user)
                    return response.setError(res, 401, "The email address you have entered is already associated with another account.")
                if (!req.body.email)
                    return response.setError(res, 401, "You have not provided a email for this account.")
            })
            const newUser = new User(req.body);
    //    await newUser.save().then(async (user) => {
    //         email,
    //         firstName,
    //         verified: false
    //     });
        if (user) {
            response.setSuccess(res, 200, successMessage, user)
        }
        return response.setError(res, 404, errorMessage)
    }

    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} function to signIn a User
     */
    static async signIn(req, res) {
        if (user) {
            ResponseService.setSuccess(res, 200, successMessage, user)
        }
        return ResponseService.setError(res, 404, errorMessage)
    }

    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} function to complete Profile
     */
    static async editProfile(req, res) {}
}