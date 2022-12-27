import express from 'express';
import dotenv from "dotenv";
import Routes from "./routes/routes";
dotenv.config()
const apiVersion = process.env.API_VERSION || 'v1';
export const API_PATH = `/api/${apiVersion}`;
class App {
    public app;

    constructor() {
        this.app = express();
        this.loadMiddleware();
        this.loadRoutes();


    }

    loadRoutes() {
        new Routes(this.app).initRoutes();
    }
    loadMiddleware() {
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.json())
    }


}

export default new App().app;