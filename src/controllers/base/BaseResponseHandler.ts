import ErrorResponse, { IErrorResponse } from "../../common/constants/ErrorResponse";
import { Response } from "express";
import mongoose from "mongoose";
import Logger from "../../common/utils/logger";
abstract class BaseResponseHandler {
    protected errorResponse: ErrorResponse;
    protected logger: Logger;

    constructor() {
        this.errorResponse = new ErrorResponse();
        this.logger = new Logger();
    }

    protected sendError(res: Response, error: Error, responseMessage: IErrorResponse, statusCode: number) {
        let response;
        if (error instanceof mongoose.Error.ValidationError) {
            response = {
                message: error.message,
                success: false,
                error_code: 0
            }
        } else {
            response = {
                success: false,
                message: responseMessage.message,
                error_code: responseMessage.code

            }
        }
        this.logger.logError(error);
        res.status(statusCode).json(response);
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