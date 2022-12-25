import { ErrorResponse, IErrorResponse } from "../../common/constants/ErrorResponse";
import { Response } from "express";
abstract class BaseResponseHandler {
    protected errorResponse: ErrorResponse;

    constructor() {
        this.errorResponse = new ErrorResponse();
    }

    protected sendError(res: Response, error: Error, responseMessage: IErrorResponse, statusCode: number) {
        const response = {
            success: false,
            message: responseMessage.message,
            error_code: responseMessage.code

        }
        res.status(statusCode).json(response)
    }

    protected sendSuccess(res: Response, data: any, statusCode: number = 200) {
        const response = {
            success: true,
            data: data
        }
        res.status(statusCode).json(response);
    }

}

export default BaseResponseHandler;