import axios from "axios";

export const backendClient =axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}/api`
})

// backendClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('fullapp-token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });