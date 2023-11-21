import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000/api',
  withCredentials: true, // Ensure credentials are sent with requests (important for CORS)
});

export default api;
