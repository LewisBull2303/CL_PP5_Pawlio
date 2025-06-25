import axios from 'axios';

axios.defaults.baseURL = 'https://pawlio-drf-api-3e0c60a339b8.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
