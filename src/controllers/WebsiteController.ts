import WebsiteService from "../services/WebsiteService";
import App from "../App";
import BaseController from "./base/BaseController";

class WebsiteController extends BaseController{

    constructor() {
        super()
    }

    protected initRoutes() {

    }

    protected initServices() {
        this.listWebsites()
    }


    listWebsites() {
        // this.router.get('/', async (req, res) => {
        //     res.render('home')
        // })
    }


}

export default new WebsiteController().router;