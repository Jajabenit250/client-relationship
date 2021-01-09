import dotenv, { config } from 'dotenv';
import response from '../utils/response';
import Payment from '../models/payment';


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
    }

    /**
	 * @param {object} req
	 * @param {object} res
	 * @returns {object} function to view users credit information
	 */
	static async viewPaymentInformation(req, res) {
    }
}
