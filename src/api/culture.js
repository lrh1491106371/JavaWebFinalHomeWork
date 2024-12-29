import apiClient from "@/api/index"; // 引入封装好的 Axios 实例

// 获取文化内容
export const fetchCultureList = () => {
  return apiClient.get("http://localhost:8080/culture/list");
};

// 根据 ID 查询文化信息
export const fetchCultureById = (id) => {
  return apiClient.get(`/culture/${id}`);
};

// 新增文化信息
export const addCulture = (culture) => {
  return apiClient.post("/culture/add", culture);
};

// 根据 ID 修改文化信息
export const updateCulture = (culture) => {
  return apiClient.put("/culture/update", culture);
};

// 根据 ID 删除文化信息
export const deleteCultureById = (id) => {
  return apiClient.delete(`/culture/delete/${id}`);
};

// 模糊搜索文化数据
export const searchCultureByKeyword = (keyword) => {
  return apiClient.get("/culture/searchCulture", {
    params: { keyword },
  });
};

// 获取文化内容（分页）
export const fetchCultureList2 = (page = 1, pageSize = 10) => {
  return apiClient.get("/culture/page", {
    params: { page, pageSize },
  });
};