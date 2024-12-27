<template>
  <div id="app" class="app-container">
    <!-- 页面顶部学校Logo和标题 (仅在非登录页面显示) -->
    <header v-if="!isLoginPage" class="header">
      <img src="@/assets/images/schoolLogo.png" alt="学校Logo" class="school-logo" />
      <div class="title">基于Java的Web开发期末大作业</div>
    </header>

    <!-- 根据路由动态显示导航栏 -->
    <NavBar v-if="showNavBar" />
    <BackNavBar v-if="showBackNavBar" />

    <!-- 路由内容 -->
    <router-view></router-view>

    <!-- 页面底部信息 (仅在非登录页面显示) -->
    <footer v-if="!isLoginPage" class="footer">
      <p>学号：22H034160319 | 姓名：林瑞浩 ｜ 邮箱：1491106371@qq.com | <a href="https://github.com/lrh1491106371"
          target="_blank">GitHub</a></p>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import BackNavBar from './components/BackNavBar.vue';

export default {
  components: {
    NavBar,
    BackNavBar,
  },
  computed: {
    // 判断是否为登录页面
    isLoginPage() {
      return this.$route.path === '/'; 
    },
    // 动态判断是否显示 NavBar
    showNavBar() {
      const routes = ['/home', '/culture', '/food', '/scenery', '/information', '/feedback'];
      return routes.includes(this.$route.path);
    },
    // 动态判断是否显示 BackNavBar
    showBackNavBar() {
      const backRoutes = [];
      return backRoutes.includes(this.$route.path);
    },
  },
};
</script>

<style scoped>
/* 全局背景样式 */
.app-container {
  background: linear-gradient(to bottom, #f3e7e9, #e3eeff);
  min-height: 100vh;
  padding: 2rem;
  color: #333;
  position: relative;
  overflow: hidden;
}

.app-container::before {
  content: '';
  position: absolute;
  top: -50px;
  left: -50px;
  width: 300px;
  height: 300px;
  background: rgba(255, 183, 197, 0.4);
  filter: blur(100px);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite alternate;
  z-index: -1;
}

@keyframes float {
  to {
    transform: translateY(20px) translateX(20px);
  }
}

/* 顶部Header样式 */
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.school-logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

/* 页脚样式 */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 0.9rem;
  color: #666;
}

.footer a {
  color: #0073e6;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>