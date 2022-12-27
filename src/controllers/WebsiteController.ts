import WebsiteService from "../services/WebsiteService";
import BaseController from "./base/BaseController";
import {Request, Response} from 'express';

class WebsiteController extends BaseController{
    private websiteService!: WebsiteService;

    constructor() {
        super();
    }

    protected initRoutes() {
        this.listWebsites();
        this.addWebsite();
    }

    protected initServices() {
        this.websiteService = new WebsiteService();
    }


    listWebsites() {
        this.router.get('/all-websites', async (req: Request, res: Response) => {
            await this.websiteService.find({})
                .then((data) => {
                    console.log(data);
                    return this.sendSuccess(res, data);
                })
                .catch((err) => {
                    return this.sendError(res, err, this.errorResponse.UNABLE_TO_LIST_WEBSITE, 400)
                })
        })
    }

    addWebsite() {
        this.router.post('/add-website', async (req, res) => {
            const {email, username, password, website_name, website} = req.body
            let query = {};
            email && (query = {...query, email: email})
            username && (query = {...query, username: username})
            password && (query = {...query, password: password})
            website_name && (query = {...query, website_name: website_name})
            website && (query = {...query, website: website})

            await this.websiteService.save(query)
                .then((saved) => {
                    return this.sendSuccess(res, {message: "Website details added successfully"})
                })
                .catch((error) => {
                    return this.sendError(res, error, this.errorResponse.UNABLE_TO_SAVE_WEBSITE, 400)
                })
        })
    }


}

export default new WebsiteController().router;