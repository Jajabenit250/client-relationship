import dotenv, {
    config
} from 'dotenv';
import response from '../utils/response';
import Payment from '../models/payment';
import User from '../models/user';


/**
 * Payment controller
 */
export default class PaymentController {
    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} function to collect users credit information
     */
    static async collectPaymentInformation(req, res) {
        const updateUser = await User.findOneAndUpdate(
            req.user.email, {
                $set: req.body
            }, {
                new: true
            })
        if (updateUser) {
            return response.setSuccess(res, 201, "user Payment Info Updated Successfully", updateUser);
        }
        return response.setError(res, 401, "error while updating profile");
    }

    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} function to collect users credit information
     */
    static async subscriptions(req, res) {
        const findUser = await User.findOne(
            req.user.email);
        if (findUser) {
            const data = {
                productId: req.body.productId,
                amount: req.body.amount,
                currency: req.body.currency,
                subscriptionType: req.body.subscriptionType,
                startDate: req.body.startDate,
                subscriptedUserId: findUser._id
            }
            if (!findUser.creditCardNumber){
                response.setError(res, 401, "Error occured credit informations of user is missing first update the");
            }
            const paymentCard = new Payment(data);
            await paymentCard
                .save()
                .then(async (info) => {
                    if (info._id){
                        return response.setSuccess(res, 201, `User ${findUser.firstName} successfully subuscribed`, info);
                    }
                    else {
                        response.setError(res, 401, "Not Updated");
                    }
                })
        }
        return response.setError(res, 401, "User Not Found - Register Subscriber first");
    }

    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} function to view users credit information
     */
    static async viewPaymentInformation(req, res) {
        const paymentId = req.params.paymentId;
        const paymentDetails = Payment.findOne({
            paymentId
        })
        .then(async (card) => {
            if (card){}
        })
        return response.setSuccess(res, 201, "Payment Information", paymentDetails)
    }
}