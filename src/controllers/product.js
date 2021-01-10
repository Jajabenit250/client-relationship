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
            if (product){
                return response.setSuccess(res, 201, "Product Successfully created", product)
            }
            response.setError(res, 401, "Error while creating a product")
        }).catch(async (error) => {
            response.setError(res, 401, "Error while creating a product")
        })

    }

    /**
	 * @param {object} req
	 * @param {object} res
	 * @returns {object} function to view Product
	 */
	static async viewProduct(req, res) {
        const productId = req.params.productId;
        Product.findOne({
            "_id" : productId
        })
        .then(async (product) => {
            if (product){
                response.setSuccess(res, 201, "Product Information", product)
            }
            response.setError(res, 401, "Product Not Found")
        }).catch(async (error) => {
            response.setError(res, 401, "Product Not Found")
        })
    }
}
