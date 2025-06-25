import axios from 'axios';

axios.defaults.baseURL = 'https://cl-pp5-pawlio-ba8f8e344581.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
