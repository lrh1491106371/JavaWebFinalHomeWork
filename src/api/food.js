import request from "@/utils/request"; // 引入封装好的 Axios 实例

// 获取所有食品
export function fetchFoodList() {
  return request({
    url: "/foods/list", // 后端接口路径
    method: "get",
  });
}

// 根据 ID 获取单个食品详情
export function fetchFoodDetail(id) {
  return request({
    url: `/foods/${id}`, // 动态传入 ID
    method: "get",
  });
}

// 新增食品
export function addFood(data) {
  return request({
    url: "/foods", // POST 请求地址
    method: "post",
    data: data, // 请求体数据
  });
}

// 更新食品信息
export function updateFood(id, data) {
  return request({
    url: `/foods/${id}`, // 动态传入 ID
    method: "put",
    data: data, // 请求体数据
  });
}

// 删除食品
export function deleteFood(id) {
  return request({
    url: `/foods/${id}`, // 动态传入 ID
    method: "delete",
  });
}
