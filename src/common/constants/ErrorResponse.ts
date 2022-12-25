export interface IErrorResponse {
    code: number;
    message: string;
}

export class ErrorResponse {
    public UNKNOWN_ERROR = {
        code: 1,
        message: "An unknown error occurred"
    }
}

export default ErrorResponse;

