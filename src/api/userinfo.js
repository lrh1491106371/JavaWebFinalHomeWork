import apiClient from "@/api/index";

// 获取用户列表
export const fetchUserInfoList = (filter = {}) => {
  return apiClient.get("/users/list", { params: filter });
};

// 根据 ID 获取用户信息
export const fetchUserInfoById = (id) => {
  return apiClient.get(`/users/${id}`); // 修改为 /users/{id}
};

// 新增用户信息
export const addUserInfo = (userInfo) => {
  return apiClient.post("/users", userInfo); // 修改为 /users
};

// 根据 ID 修改用户信息
export const updateUserInfo = (userInfo) => {
  return apiClient.put(`/users/${userInfo.id}`, userInfo); // 修改为 /users/{id}
};

// 根据 ID 删除用户信息
export const deleteUserInfoById = (id) => {
  return apiClient.delete(`/users/${id}`); // 修改为 /users/{id}
};

// 模糊搜索文化数据
export const searchUserInfoByKeyword = (keyword) => {
  return apiClient.get("/users/searchUserInfo", {
    params: { keyword },
  });
};
