const responseMiddleware = (req, res, next) => {
    const send = ({status, succes,  message, data = null, errors = null}) => {
        res.status(status).json({success, data, message, errors})
    }

    res.ok = (message = "Success", data = null) => {
        return send({status: 200, success: true, data, message})
    }

    res.created = (message="Created", data = null) => {
        return send({status: 201, success: true, data, message})
    }

    res.error = (status, message, errors = null) => {
        return send({status, success: false, message, errors})
    }
}

module.exports = {responseMiddleware}