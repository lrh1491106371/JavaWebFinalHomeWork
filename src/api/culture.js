import request from "@/utils/request"; // 引入封装好的 Axios 实例

// 获取所有文化内容
export function fetchCultureList() {
  return request({
    url: "/culture/list", // 后端接口路径
    method: "get",
  });
}

// 根据 ID 获取单个文化内容详情
export function fetchCultureDetail(id) {
  return request({
    url: `/culture/${id}`, // 动态传入 ID
    method: "get",
  });
}

// 新增文化内容
export function addCulture(data) {
  return request({
    url: "/culture", // POST 请求地址
    method: "post",
    data: data, // 请求体数据
  });
}

// 更新文化内容信息
export function updateCulture(id, data) {
  return request({
    url: `/culture/${id}`, // 动态传入 ID
    method: "put",
    data: data, // 请求体数据
  });
}

// 删除文化内容
export function deleteCulture(id) {
  return request({
    url: `/culture/${id}`, // 动态传入 ID
    method: "delete",
  });
}
