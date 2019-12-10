import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-d9576.firebaseio.com/'
});

export default instance;