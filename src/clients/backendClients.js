import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const backendClient =axios.create({
    baseURL:apiUrl
})

// backendClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('fullapp-token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });