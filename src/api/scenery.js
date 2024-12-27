import apiClient from "@/api/index"; // 引入封装好的 Axios 实例

// 获取风景列表
export const fetchSceneryList = () => {
  return apiClient.get("http://localhost:8080/scenery/list");
};

// 根据 ID 查询风景信息
export const fetchSceneryById = (id) => {
  return apiClient.get(`/scenery/${id}`);
};

// 新增风景信息
export const addScenery = (scenery) => {
  return apiClient.post("/scenery/add", scenery);
};

// 根据 ID 修改风景信息
export const updateScenery = (scenery) => {
  return apiClient.put("/scenery/update", scenery);
};

// 根据 ID 删除风景信息
export const deleteSceneryById = (id) => {
  return apiClient.delete(`/scenery/delete/${id}`);
};
