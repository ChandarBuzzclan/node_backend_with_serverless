const axios = require('axios');
const axiosInstance = axios.create({
    baseURL: 'https://api.example.com', // Your API base URL
    timeout: 5000, // Request timeout in milliseconds
    headers: {
      'Content-Type': 'application/json', // Set default content type
    },
  });

module.exports = axiosInstance;  