import WebsiteController from "../controllers/WebsiteController";
import {API_PATH} from "../App";

class Routes {
    private app;

    constructor(app: any) {
        this.app = app;
    }

    initRoutes() {
        this.app.use(API_PATH, WebsiteController);
    }




}

export default Routes;