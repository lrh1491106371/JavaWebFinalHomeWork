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

    // 获取后端返回的 token 和 user 信息
    const { token, user } = response.data;

    // 存储 token 到 localStorage
    localStorage.setItem("token", token);

    // 存储用户信息到 localStorage
    localStorage.setItem("user", JSON.stringify(user)); // 存储用户信息，记得转换为 JSON 字符串

    return response.data; // 返回登录结果
  } catch (error) {
    console.error("登录失败:", error);
    throw error;
  }
};
