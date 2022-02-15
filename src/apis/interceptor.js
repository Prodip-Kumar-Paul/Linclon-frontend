import axios from 'axios';
import api from './apis';

const httpUrl = axios.create({
  baseUrl: api.baseURL
  //   timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});

// httpUrl.interceptors.request.use(
//   async (config) => {
//     const token = sessionStorage.getItem('token');
//     config.headers = {
//       Accept: "application/json",
//       authorization: `Bearer ${token}`,
//     };
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );
export default httpUrl;
