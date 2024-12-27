import apiClient from "@/api/index"; // 引入 axios 实例

// 注册用户 API
export const registerUser = (data) => {
  return apiClient.post("/register", data);
};

// 用户登录 API
export const loginUser = (data) => {
  return apiClient.post("/login", data);
};
