import express from 'express';
class App {
    public app;

    constructor() {
        this.app = express();
        // this.loadMiddleware();
        this.loadRoutes();

    }

    loadRoutes() {

    }

    loadMiddleware() {

    }


}

export default new App().app;