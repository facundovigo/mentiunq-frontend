import axios from 'axios';
//server backend
//const server = 'http://127.0.0.1:8000'

const server = 'https://menti-backend.herokuapp.com'

// const API = axios.create({
//     headers: {
//       "Access-Control-Allow-Origin": "*"
//     }
//   });
  

const API = {
    get: path => axios.get(`${server}${path}`).then(response => response.data),
    put: (path, body) => axios.put(`${server}${path}`, body).then(response => response.data),
    post: (path, body) => axios.post(`${server}${path}`, body).then(response => response.data),
    delete: path => axios.delete(`${server}${path}`).then(response => response.data),
};

// axios.interceptors.request.use(
//     (config) => {
//         let token = localStorage.getItem('accessToken');
//         if (token) {
//             config.headers['Authorization'] = 'Token ' + token;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );



export default API;