// import aixos
import axios from "axios";

// api with token
const api = axios.create({
    baseURL: "http://localhost:3000/api",
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

// export api
export default api;