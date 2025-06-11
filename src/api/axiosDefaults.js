import axios from 'axios';

axios.defaults.baseURL = 'https://dripdrop-drf-api-8425aae53a44.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
