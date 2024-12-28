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
        正在开发中
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BackNavBar from "@/components/BackNavBar.vue"; // 引入封装好的导航栏组件


export default {
  components: { BackNavBar, },
  data() {
    return {
      activeIndex: "/system/user",
      filter: {
        username: "",
        phone: "",
        status: "",
      },
      loading: false,
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
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
</style>