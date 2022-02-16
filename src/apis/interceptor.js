import axios from 'axios';
import apis from './apis';

const httpUrl = axios.create({
  baseURL: apis.baseURL
  //   timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});

httpUrl.interceptors.request.use(
  async (config) => {
    const token = sessionStorage.getItem('token');
    config.headers = {
      Accept: "application/json",
      authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export default httpUrl;
