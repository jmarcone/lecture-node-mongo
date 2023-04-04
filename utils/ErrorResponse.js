class ErrorResponse extends Error {
    constructor(message, statusCode, shouldLog){
        super(message);
        this.statusCode = statusCode;
        this.shouldLog = shouldLog;
    }
}


export default ErrorResponse;