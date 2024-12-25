import request from "@/utils/request"; // 引入封装好的 Axios 实例

// 获取所有用户
export function fetchUserList() {
  return request({
    url: "/users",
    method: "get",
  });
}

// 根据 ID 获取单个用户详情
export function fetchUserDetail(id) {
  return request({
    url: `/users/${id}`,
    method: "get",
  });
}

// 新增用户
export function addUser(data) {
  return request({
    url: "/users",
    method: "post",
    data: data,
  });
}

// 更新用户信息
export function updateUser(id, data) {
  return request({
    url: `/users/${id}`,
    method: "put",
    data: data,
  });
}

// 删除用户
export function deleteUser(id) {
  return request({
    url: `/users/${id}`,
    method: "delete",
  });
}


