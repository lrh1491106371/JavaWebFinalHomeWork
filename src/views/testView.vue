<template>
  <el-pagination style="margin-top: 20px; text-align: right;" :current-page="page" :page-size="pageSize" :total="total"
    layout="prev, pager, next, sizes, total" @current-change="handlePageChange" @size-change="handlePageSizeChange" />
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "CulturePage",
  setup() {
    // 状态
    const tableData = ref([]); // 表格数据
    const total = ref(0); // 数据总数
    const currentPage = ref(1); // 当前页码
    const pageSize = ref(10); // 每页显示条数

    // 获取数据的方法
    const fetchData = async (page = 1, pageSize = 10) => {
      try {
        const { data } = await axios.get("/api/culture/page", {
          params: {
            page,
            pageSize,
          },
        });

        // 更新数据
        tableData.value = data.data; // 假设后端返回格式中 `data` 是列表
        total.value = data.total; // 假设后端返回格式中 `total` 是总条数
      } catch (error) {
        console.error("获取数据失败：", error);
      }
    };

    // 监听分页变化
    const handlePageChange = (newPage) => {
      currentPage.value = newPage;
      fetchData(newPage, pageSize.value);
    };

    // 初次加载数据
    onMounted(() => {
      fetchData(currentPage.value, pageSize.value);
    });

    return {
      tableData,
      total,
      currentPage,
      pageSize,
      handlePageChange,
    };
  },
};
</script>

<style scoped>
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>