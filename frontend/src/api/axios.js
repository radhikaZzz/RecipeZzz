import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api', // Update this line
});

export default axiosInstance;