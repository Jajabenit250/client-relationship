import dotenv, { config } from 'dotenv';
import response from '../utils/response';
import Product from '../models/product';


/**
 * Product controller
 */
export default class ProductController {
	/**
	 * @param {object} req
	 * @param {object} res
	 * @returns {object} function to create new Product
	 */
	static async createProduct(req, res) {
        const data = {
            ownerId : req.user._id,
            name : req.body.name,
            type : req.body.type,
            description : req.body.description,
            startDate : req.body.startDate,
            endDate : req.body.endDate,
            attachments : req.body.attachments,
            otherLinks : req.body.otherLinks
        }

        const newProduct = new Product(data);
        newProduct.save().then(async (product) => {
           return response.setSuccess(res, 200, "user successfully created", saved)
        }).catch(async (error) => {
            response.setSuccess(res, 401, "user successfully created", saved)
        })

    }

    /**
	 * @param {object} req
	 * @param {object} res
	 * @returns {object} function to view Product
	 */
	static async viewProduct(req, res) {
        const productId = req.params.productId;
        const productDetails = Product.findOne({
            productId
        })
        .then(async (product) => {
            if (product){}
        })
        return response.setSuccess(res, 201, "Product Information", productDetails)
    }
}
