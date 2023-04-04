const errorHandler = (error, req, res, next) => {
    const { message, statusCode } = error;

    console.error(message);

    res
        .status(statusCode || 500)
        .json({ error: message })
}

export default errorHandler;