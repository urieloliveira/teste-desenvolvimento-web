import axios from 'axios';

const server = `http://127.0.0.1:3333`;

const api = axios.create({
  baseURL: server,
});

export default api;
