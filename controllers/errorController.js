'use strict';

module.exports = async function (err, req, res, next) {
    err.message = err.message;
    err.status = err.status;
    err.statusCode = err.statusCode;
    err.stack = err.stack;

    process.env.NODE_ENV === 'development' ? res.status(err.statusCode).json({ error: err.message, status: err.status, statusCode: err.statusCode, stack: err.stack }) :
        res.status(err.statusCode).json({ error: err.message });
    next(err);
}

