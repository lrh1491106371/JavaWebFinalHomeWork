<template>
  <div>
    <el-container>
      <!-- 引入独立的导航栏组件 -->
      <BackNavBar :activeIndex="activeIndex" />

      <!-- Main Content -->
      <el-container>
        <el-header
          style="background: #fff; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
          <h3>仪表盘</h3>
          <el-button type="primary" icon="el-icon-plus" @click="back">返回登陆/注册</el-button>
        </el-header>
        <div>
          <div id="stats-chart" style="width: 1000px; height: 550px; margin: auto;"></div>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BackNavBar from "@/components/BackNavBar.vue"; // 引入封装好的导航栏组件
import { fetchTableStats } from "@/api/tableStats"; // 引入封装好的 API
import * as echarts from "echarts";

export default {
  components: { BackNavBar, },
  data() {
    return {
      tableCounts: [], // 存储从后端获取的数据
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    // 获取表格统计数据
    async fetchTableCounts() {
      try {
        const response = await fetchTableStats(); // 调用封装的 API
        this.tableCounts = response;
        this.initChart(); // 数据加载完毕后初始化图表
      } catch (error) {
        console.error("获取表格统计数据失败：", error);
      }
    },


    // 初始化图表
    initChart() {
      const chart = echarts.init(document.getElementById("stats-chart"));
      const tableNames = this.tableCounts.map((item) => item.tableName); // X轴数据
      const rowCounts = this.tableCounts.map((item) => item.rowCount); // Y轴数据

      const option = {
        title: {
          text: "表格数据统计",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: tableNames,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "数据条数",
            type: "bar",
            data: rowCounts,
            itemStyle: {
              color: "#73a0fa",
            },
          },
        ],
      };

      // 设置图表
      chart.setOption(option);
    },
  },
  mounted() {
    this.fetchTableCounts(); // 组件挂载后加载数据
  },
};
</script>

<style scoped>
.el-header {
  border-bottom: 1px solid #ebeef5;
}

.el-main {
  padding: 20px;
}

#stats-chart {
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>