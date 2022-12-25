import Website, { IWebsite } from "../models/website";
import DBService from "./DBService";



class WebsiteService extends DBService<IWebsite>{

    constructor(populatedFields:string[] = []) {
        super(Website, populatedFields);
    }
}
export default WebsiteService;
