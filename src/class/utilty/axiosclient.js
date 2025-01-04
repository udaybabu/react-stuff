import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // use your base URL here
  timeout: 10000, // set a timeout for requests
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Attach token or any other modifications
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log('Request config:', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx will trigger this function
    console.log('Response:', response);
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx will trigger this function
    if (error.response) {
      console.error('Error response:', error.response);
      if (error.response.status === 401) {
        // Handle unauthorized errors (e.g., redirect to login)
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
