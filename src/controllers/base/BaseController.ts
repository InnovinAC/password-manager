import express from "express";
import BaseResponseHandler from "./BaseResponseHandler";
abstract class BaseController extends BaseResponseHandler {
    public router;

    constructor() {
        super();
        this.router = express.Router();
        this.initRoutes();
        this.initServices();

    }

    protected abstract initRoutes(): void;
    protected abstract initServices(): void;
}
export default BaseController;