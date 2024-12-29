<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div id="culture-chart" style="height: 400px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="scenery-chart" style="height: 400px;"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div id="user-info-chart" style="height: 400px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="specialty-chart" style="height: 400px;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      cultureData: [/* 示例数据 */ 20, 40, 30],
      sceneryData: [/* 示例数据 */ 15, 25, 35],
      userInfoData: [/* 示例数据 */ 10, 50, 20],
      specialtyData: [/* 示例数据 */ 30, 20, 10],
    };
  },
  mounted() {
    this.initChart("culture-chart", this.cultureData, "Culture");
    this.initChart("scenery-chart", this.sceneryData, "Scenery");
    this.initChart("user-info-chart", this.userInfoData, "User Info");
    this.initChart("specialty-chart", this.specialtyData, "Specialty");
  },
  methods: {
    initChart(id, data, title) {
      const chart = echarts.init(document.getElementById(id));
      chart.setOption({
        title: { text: title },
        tooltip: {},
        xAxis: { type: "category", data: ["Row1", "Row2", "Row3"] },
        yAxis: { type: "value" },
        series: [
          {
            name: title,
            type: "bar",
            data: data,
          },
        ],
      });
    },
  },
};
</script>

<style>
#culture-chart,
#scenery-chart,
#user-info-chart,
#specialty-chart {
  border: 1px solid #dcdcdc;
  margin-bottom: 20px;
}
</style>