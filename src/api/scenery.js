import request from "@/utils/request"; // 引入封装好的 Axios 实例

// 获取所有景点
export function fetchSceneryList() {
  return request({
    url: "/scenery/list",
    method: "get",
  });
}

// 根据 ID 获取单个景点详情
export function fetchSceneryDetail(id) {
  return request({
    url: `/scenery/${id}`,
    method: "get",
  });
}

// 新增景点
export function addScenery(data) {
  return request({
    url: "/scenery",
    method: "post",
    data: data,
  });
}

// 更新景点信息
export function updateScenery(id, data) {
  return request({
    url: `/scenery/${id}`,
    method: "put",
    data: data,
  });
}

// 删除景点
export function deleteScenery(id) {
  return request({
    url: `/scenery/${id}`,
    method: "delete",
  });
}

