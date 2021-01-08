import dotenv, { config } from 'dotenv';
import ResponseService from '../utils/response.util';
import Payment from '../models/payment';


/**
 * Auth controller
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
