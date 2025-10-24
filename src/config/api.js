import axios from "axios";

// ✅ Use Render backend when deployed, localhost for local testing
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://syncspend.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");
  if (user) {
    const token = JSON.parse(user).token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
