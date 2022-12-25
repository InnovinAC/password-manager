import express from 'express';
class App {
    public app;

    constructor() {
        this.app = express();

        // this.loadMiddleware();
        this.initRoutes();

    }

    initRoutes() {

    }

    initMiddleware() {

    }


}

export default new App().app;