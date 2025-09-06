// import aixos
import axios from "axios";

// api with token
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
});

// Automatically attach token if it exists
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Handle expired/invalid token
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            // redirect to login
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);

// export api
export default api;