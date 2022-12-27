import {Document, Schema, model} from 'mongoose';

export const WebsiteSchema = new Schema({
    website: {
        type: String,
        required: true
    },
    username: String,
    email: String,
    password: {
        type: String,
        required: true
    },
    website_name: {
        type: String
    }

});

export interface IWebsite extends Document {
    website: string;
    username?: string;
    email?: string;
    password: string;
    website_name: string;


}

export default model<IWebsite>('Website', WebsiteSchema);

