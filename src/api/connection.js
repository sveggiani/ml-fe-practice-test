import axios from 'axios';

const api = {
  connection: axios.create({
    baseURL: process.env.REACT_APP_API_URL
  }),
  endpoints: {
    search: '/items',
    detail: '/item'
  }
};

export default api;
