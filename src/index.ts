import dotenv from 'dotenv';
import App from './App';
import mongoose, {ConnectOptions} from 'mongoose';
import ejs from 'ejs';
const pejs = require('pejs');
const views = pejs();



dotenv.config();
const {PORT} = process.env;
const {MONGO_URI}: any = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'pswdMgrByInnovin'
}

App.set('view engine', 'ejs');
App.set('views', './views')
App.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`);
})
mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URI, options as ConnectOptions);

mongoose.connection.once('open', () => {
    console.log('Connected To MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.error('Unable to connect to mongo db \n', err);
})


// App.get('/', (req, res) => {
//     res.send('Welcome To Password Manager Created ');
// });


