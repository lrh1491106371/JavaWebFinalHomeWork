import apiClient from "@/api/index"; // 引入封装好的 Axios 实例

// 获取表格统计数据
export const fetchTableStats = () => {
  return apiClient.get("/stats/tableCounts");
};
