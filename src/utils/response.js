/* eslint-disable require-jsdoc */

class ResponseService {
	static setSuccess(res, statusCode, message, data) {
		return res.status(statusCode).json({
			status: statusCode,
			message,
			data,
		});
	}

	static setError(res, statusCode, message) {
		return res.status(statusCode).json({
			status: statusCode,
			message,
		});
	}
}

export default ResponseService;
