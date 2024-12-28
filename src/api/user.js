import apiClient from "@/api/index"; // 引入 axios 实例

// 注册用户 API
export const registerUser = (data) => {
  return apiClient.post("/register", data);
};

// 用户登录 API
export const loginUser = async (data) => {
  try {
    // 调用后端登录接口
    const response = await apiClient.post("/login", data);

    // 假设后端返回的 token 在 response.data.data
    const token = response.data.data;

    // 存储 token 到 localStorage
    localStorage.setItem("token", token);

    return response.data; // 返回登录结果
  } catch (error) {
    console.error("登录失败:", error);
    throw error;
  }
};
