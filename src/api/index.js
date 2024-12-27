import axios from "axios";

// 创建 axios 实例
const apiClient = axios.create({
  baseURL: "http://localhost:8080", // 替换为后端的实际 API 地址
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 如果有 Token，统一添加到请求头
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response.data; // 简化响应数据
  },
  (error) => {
    // 处理错误信息
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error.response || error);
  }
);

export default apiClient;
