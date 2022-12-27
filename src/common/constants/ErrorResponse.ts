export interface IErrorResponse {
    code: number;
    message: string;
}

class ErrorResponse {
    public UNKNOWN_ERROR = {
        code: 1,
        message: "An unknown error occurred"
    }
    public UNABLE_TO_LIST_WEBSITE = {
        code: 2,
        message: "Unable to list websites."
    }
    public UNABLE_TO_SAVE_WEBSITE = {
        code: 3,
        message: "Unable to save website."
    }
}

export default ErrorResponse;

