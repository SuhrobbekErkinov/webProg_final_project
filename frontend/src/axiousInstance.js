import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api", // or leave it blank if you're overriding
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
