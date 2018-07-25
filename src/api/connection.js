import axios from 'axios';

const api = {
  connection: axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000
  }),
  endpoints: {
    search: process.env.REACT_APP_API_ENDPOINT_SEARCH
  }
};

export default api;
