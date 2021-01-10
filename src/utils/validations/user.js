import Joi from 'joi';
import joiPhone from 'joi-phone-number';
import response from "../response";

const customJoi = Joi.extend(joiPhone);

export const validateUpdateProfileBody = (req, res, next) => {
	const schema = Joi.object({
		firstName: Joi.string().min(2).required().messages({
			'any.required': 'First Name is required',
			'string.empty': 'Name is not allowed to be empty',
			'string.min': 'Last Name length must be at least 2 characters long',
		}),
		lastName: Joi.string().min(2).required().messages({
			'any.required': 'Last Name is required',
			'string.empty': 'Last Name is not allowed to be empty',
			'string.min': 'Last Name length must be at least 2 characters long',
		}),
		title: Joi.string().min(2).required().messages({
			'any.required': 'Last Name is required',
			'string.empty': 'Last Name is not allowed to be empty',
			'string.min': 'Last Name length must be at least 2 characters long',
		}),
		department: Joi.string().min(2).required().messages({
			'any.required': 'Last Name is required',
			'string.empty': 'Last Name is not allowed to be empty',
			'string.min': 'Last Name length must be at least 2 characters long',
		}),
		organization: Joi.string().min(2).required().messages({
			'any.required': 'Last Name is required',
			'string.empty': 'Last Name is not allowed to be empty',
			'string.min': 'Last Name length must be at least 2 characters long',
		}),
		workPhone: customJoi
			.string()
			.phoneNumber({
				format: 'international',
				strict: true
			})
			.required()
			.messages({
				'any.required': 'Work Phone is required',
				'string.empty': 'Work Phone is not allowed to be empty',
				'phoneNumber.invalid': 'Work Phone did not seem to be a phone number',
			}),
		organizationPhone: customJoi
			.string()
			.phoneNumber({
				format: 'international',
				strict: true
			})
			.required()
			.messages({
				'any.required': 'Organization Phone is required',
				'string.empty': 'Organization Phone is not allowed to be empty',
				'phoneNumber.invalid': 'Organization Phone did not seem to be a phone number',
			}),

	}).options({
		abortEarly: false
	});

	const {
		error
	} = schema.validate(req.body);

	if (error) {
		const errors = error.details.map(err => err.message);
		return response.setError(res, 400, errors);
	}
	next();
};

export const validateCardProfileBody = (req, res, next) => {
	const schema = Joi.object({
		creditCardNumber: Joi.string().length(16).pattern(/^[0-9]+$/).required().messages({
			'any.required': 'credit card is required',
			'number.empty': 'Credit Card Number is not allowed to be empty',
			'number.min': 'Credit Card Number length must be 16 characters long',
		}),
		expirationDate: Joi.string().min(2).required().messages({
			'any.required': 'Last Name is required',
			'string.empty': 'Last Name is not allowed to be empty',
			'string.min': 'Last Name length must be at least 2 characters long',
		}),
		cvs : Joi.string().length(3).pattern(/^[0-9]+$/).required().messages({
			'any.required': 'CVS is required',
			'number.empty': 'CVS is not allowed to be empty',
			'number.min': 'CVS length must be 3 characters long',
		}),

	}).options({
		abortEarly: false
	});

	const {
		error
	} = schema.validate(req.body);

	if (error) {
		const errors = error.details.map(err => err.message);
		return response.setError(res, 400, errors);
	}
	next();
};