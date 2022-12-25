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
    }

});

export interface IWebsite extends Document {
    website: string;
    username?: string;
    email?: string;
    password: string;


}

export default model<IWebsite>('Website', WebsiteSchema);

