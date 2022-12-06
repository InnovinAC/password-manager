import App from './App';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 1000;

App.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`);
})

App.get('/', (req, res) => {
    res.send('Welcome To Password Manager');
})
