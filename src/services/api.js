import axios from 'axios';

const api = axios.create({
    baseURL: 'http://volei.wetech.com.br'
})

export default api;