import apiClient from "@/api/index"; // 引入封装好的 Axios 实例

// 获取用户列表
export const fetchUserInfoList = () => {
  return apiClient.get("http://localhost:8080/users/list");
};

// 根据 ID 查询用户信息
export const fetchUserInfoById = (id) => {
  return apiClient.get(`/users/${id}`);
};

// 新增用户信息
export const addUserInfo = (userInfo) => {
  return apiClient.post("/users/add", userInfo);
};

// 根据 ID 修改用户信息
export const updateUserInfo = (userInfo) => {
  return apiClient.put("/users/update", userInfo);
};

// 根据 ID 删除用户信息
export const deleteUserInfoById = (id) => {
  return apiClient.delete(`/users/delete/${id}`);
};
