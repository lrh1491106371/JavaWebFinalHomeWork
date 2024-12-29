import apiClient from "@/api/index"; // 引入封装好的 Axios 实例

// 获取全部美食
export const fetchFoodList = () => {
  return apiClient.get("http://localhost:8080/specialty/list");
};

// 根据 ID 获取美食详情
export const fetchFoodDetail = (id) => {
  return apiClient.get(`/specialty/detail/${id}`);
};

// 新增美食
export const addFood = (food) => {
  return apiClient.post("/specialty/add", food);
};

// 根据 ID 修改文化信息
export const updateFood = (food) => {
  return apiClient.put(`/specialty/update`, food);
};

// 删除美食
export const deleteFood = (id) => {
  return apiClient.delete(`/specialty/delete/${id}`);
};

// 模糊搜索美食数据
export const searchFoodByKeyword = (keyword) => {
  return apiClient.get("/specialty/searchSpecialty", {
    params: { keyword },
  });
};