import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e247b.firebaseio.com/'
});

export default instance;