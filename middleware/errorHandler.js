const ErrorResponse = require('../utils/errorResponse');

const errorHandler = async(err, req, res, next) => {

    let error = { ...err };
    error.message = err.message;

    console.log(err);

    if (err.code === 11000) {
        const message = "Email already exists";
        error = new ErrorResponse(message, 401);
    }

    if (err.name === "ValidationError") {
        const message =  Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 401)
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    })

}

module.exports = errorHandler;