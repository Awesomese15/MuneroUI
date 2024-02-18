import axios from 'axios';

const BASE_URL = 'http://localhost:9090/munero';

const authService = {
  login: async (username, password) => {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    return response;
  },
  isAuthenticated:()=>{
    const token = sessionStorage.getItem('Authorization')
    return !!token;
  },
  logout: () => {
    // Implement logout logic
  },
};

export default authService;