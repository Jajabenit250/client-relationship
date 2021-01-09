import dotenv, {
    config
} from 'dotenv';
import response from '../utils/response';
import User from '../models/user';
import GenerateToken from '../utils/token';
import mailer from '../utils/mailer';


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
        const data = {
            email,
            firstName,
            verified: false
        };
        const token = GenerateToken(data);
        data.token = token;
        if (!req.body.email)
            return response.setError(res, 401, "You have not provided a email for this account.")
        User.findOne({
                email
            })
            .then(async (user) => {
                if (user)
                    return response.setSuccess(res, 401, "The email address you have entered is already associated with another account.", user)
                else {
                    const newUser = new User(data);
                    const saved = newUser
                        .save()
                        .then(async (user) => {
                            const emailView = mailer.activateAccountView(token, firstName);
                            mailer.sendEmail(email, 'Verification link', emailView);
                        })
                    response.setSuccess(res, 200, "user successfully created", saved)
                }
            })
    }

    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} function to updateUser a User
     */
    static async updateUser(req, res) {
        const activate = {
            verified: true,
        };
        const updateUser = await User.findOneAndUpdate(
            req.user.email, {
                $set: activate
            }, {
                new: true
            })

        return response.setSuccess(res, 201, "user Successfully Updated", updateUser);
    }

    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} function to signIn a User
     */
    static async signIn(req, res) {
        if (user) {
            response.setSuccess(res, 200, "Login Successfull", user)
        }
        return response.setError(res, 404, "error")
    }

    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} function to complete Profile
     */
    static async editProfile(req, res) {
        const updateUser = await User.findOneAndUpdate(
            req.user.email, {
                $set: req.body
            }, {
                new: true
            })
        if (updateUser){
            return response.setSuccess(res, 201, "user Successfully Updated", updateUser);
        }
        return response.setError(res, 401, "error while updating profile");
    }
}