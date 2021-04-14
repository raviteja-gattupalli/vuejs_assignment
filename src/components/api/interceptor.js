import axios from 'axios';

axios.interceptors.request.use(
  /* eslint-disable */
  (config) => {
    config.headers.common.Authorization = '113456789';
    /* eslint-enable */
    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
